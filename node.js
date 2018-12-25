const Node = (function Node() {

// PRIVATE:

  const diskSize = 250
  const hardDisk = (new Array(diskSize)).fill(null)

  const findSpace = () => {
    for (let i = 0; i < hardDisk.length; i++){
      if (hardDisk[i] === null){
        return i
      }
    }
    return -1
  }

  const findTheIndex = (arry, input) => {
    if (typeof input === "object") {
      for (let i = 0; i < arry.length; i++) {
        if (arry[i] === input) {
          return i
        }
      }
    }
    if (!(Node.validAddresses([input]) === -1)) {
      return input
    }
    return -1
  }

  const validAddresses = (arry) => {
    for (let el of arry) {
      if (typeof el === "string") {
        return -1
      }
      if ((el < 0) || !(el < diskSize)) {
        return -1
      }
    }
    return arry
  }

// PUBLIC:

  return class Node {
    constructor(data, children = [], parent = null) {
      const address = findSpace()
      if (address === -1) {
        console.error("ERROR: Disk Full!!!")
      } else {
        this.data = data;
        this.children = children;
        this.parent = parent;
        hardDisk[address] = this
      }
    }

    static hardDrive () {
      return hardDisk
    }

    destroy () {
      const address = findTheIndex(hardDisk, this)
      if (address === -1) {
        console.error("ERROR: Node Not Found!!!")
      } else {
        hardDisk[address] = null
      }
      return this
    }

    update (changes) {
      if (!(this === null)) {
        if (changes.data) {
          this.data = changes.data
        }
        if (changes.children) {
          const newChild = validAddresses(changes.children)
          if (newChild === -1) {
            console.error("ERROR: Invalid Children Values!!!");
          } else {
            this.children = changes.children
          }
        }
        if (changes.parent) {
          const newParent = validAddresses([changes.parent])
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
  }
})()

// Example Code:
//
// let newNode
// for (let i = 0; i < 50; i++) {
//   newNode = new Node()
//
//   if((i % 5) === 0) {
//     newNode.update({
//       data : "steve",
//       children : [2,249,0,23],
//       parent : 6
//     })
//   }
//
//   if((i % 3) === 0) {
//     newNode.destroy()
//     newNode = null
//   }
//
//   console.log(newNode)
// }
