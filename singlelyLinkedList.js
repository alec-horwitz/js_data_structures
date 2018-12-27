const SinglelyLinkedList = (function SinglelyLinkedList() {

// PRIVATE:

  import Node from "./node.js"
  const lists = []

// PUBLIC:

  return class SinglelyLinkedList {
    constructor(data, children = [], parent = null) {

    }

    static getLists () {
      return lists
    }

    update (changes) {
    }

    destroy () {
    }
  }
})()

// Example Code:
//
