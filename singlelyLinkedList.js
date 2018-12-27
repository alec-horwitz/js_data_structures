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
// console.log(Node.getDisk())
