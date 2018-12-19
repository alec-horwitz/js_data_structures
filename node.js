const Node = (function Node() {
  const hardDisk = (new Array(250)).fill(null)
  return class Node {
    constructor(data, children = [], parent = null) {
      const address = Node.findSpace()
      if (address === -1) {
        console.error("ERROR: Disk Full!!!")
      } else {
        this.data = data;
        this.children = children;
        this.parent = parent;
        hardDisk[address] = this
      }
    }

    static findSpace () {
      for (let i = 0; i < hardDisk.length; i++){
        if (hardDisk[i] === null){
          return i
        }
      }
      return -1
    }

    static findTheIndex (arry, obj) {
      for (let i = 0; i < arry.length; i++) {
        if (arry[i] === obj) {
          return i
        }
      }
      return -1
    }

    static validAddresses (arry) {
      var valid = []
      for (let i = 0; i < arry.length; i++) {
        if (parseInt(arry[i]) !== NaN) {
          valid.push(arry[i])
        } else {
          return -1
        }
      }
      return valid
    }

    destroy () {
      const address = Node.findTheIndex(hardDisk, this)
      if (address === -1) {
        console.error("ERROR: Node Not Found!!!")
      } else {
        hardDisk[address] = null
      }
    }

    update (changes) {
      if (changes.data) {
        this.data = changes.data
      }
      if (changes.children) {
        const newChild = Node.validAddresses(changes.children)
        if (newChild === -1) {
          console.error("ERROR: Invalid Children Values!!!");
        } else {
          this.children = changes.children
        }
      }
      if (changes.parent) {
        const newParent = Node.validAddresses([changes.parent])
        if (newParent === -1) {
          console.error("ERROR: Invalid Parent Value!!!");
        } else {
          if (newParent.length === 1) {
            this.parent = newParent[0]
          } else {
            console.error("ERROR: Invalid Parent Value!!!");
          }
        }
      }
    }
  }
})()

let newNode
for (let i = 0; i < 251; i++) {
  newNode = new Node("")
  if((i % 3) === 0) {
    newNode.update({
      data : "steve",
      children : ["2","trdhhfytuf",523,777,23],
      parent : 6
    })
  }
  if((i % 5) === 0) {
    newNode.destroy()
  }
}
