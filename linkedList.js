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
      if (this.children[i] !== "undefined") {
        return LinkedList.getDisk[this.children[i]]
      } else {
        console.warn(`Child at index ${i} does not exist!`)
        return this
      }
    }

    lastNode (i=0) {
      let lastNode = this
      while (typeof lastNode.next(i) !== "undefined") {
        console.log(lastNode.next(i));
        lastNode = lastNode.next(i)
      }
      return lastNode
    }

    addNode (data = null, children = [], parent = null) {
      let nodeParent = null
      if (parent !== null) {
        nodeParent = LinkedList.getDisk().indexOf(this)
      }
      let newNode = new LinkedList(data, children, nodeParent)
      this.children.push(LinkedList.getDisk().indexOf(newNode))
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

module.exports = LinkedList

// Example Code:
//
// let newLinkedList
// newLinkedList = new LinkedList()
// console.log("Testing getDisk", LinkedList.getDisk().indexOf(newLinkedList))
// newLinkedList.addNode()
// console.log(newLinkedList)
