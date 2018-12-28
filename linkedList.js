const LinkedList = (function LinkedList() {

// PRIVATE:

  const Node = require("./node.js")
  const lists = []

// PUBLIC:

  return class LinkedList extends Node {
    constructor(data, children = [], parent = null) {
      super(data, [...children], parent)
      lists.push(this)
    }

    static getLists () {
      return lists
    }

    next (i=0) {
      if (this.children[i] !== null) {
        return LinkedList.getDisk[this.children[i]]
      } else {
        console.warn(`Child at index ${i} does not exist!`)
        return this
      }
    }

    lastNode () {
      let lastNode = this
      while (typeof lastNode.next() !== "undefined") {
        console.log(lastNode.next());
        lastNode = lastNode.next()
      }
      return lastNode
    }

    addNode (data = null) {
      let lastN = this.lastNode()
      let newNode = new LinkedList(data, [], LinkedList.getDisk().indexOf(lastN))
      lastN.children.push(LinkedList.getDisk().indexOf(newNode))
    }

    previous () {
      if (this.parent !== null) {
        return LinkedList.getDisk[this.parent]
      } else {
        console.warn("No parent exists for this node!")
        return this
      }
    }

    destroy () {
    }
  }
})()

// Example Code:
//
let newLinkedList
newLinkedList = new LinkedList()
console.log("Testing getDisk", LinkedList.getDisk().indexOf(newLinkedList))
newLinkedList.addNode()
console.log(newLinkedList)
