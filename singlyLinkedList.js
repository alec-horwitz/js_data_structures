const SinglyLinkedList = (function SinglyLinkedList(){
  const LinkedList = require("./linkedList.js")
  const singlyLists = []

  return class SinglyLinkedList extends LinkedList {
    constructor(data, child) {
      super(data, child)
      singlyLists.push(this)
    }
    static getSinglyLists (){
    return singlyLists
    }
  }
  previous (){
    console.warn("This function is not supported for Singly Linked Lists.")
    return null
  }
})()

let newSinglyLinkedList
newSinglyLinkedList = new SinglyLinkedList()
console.log("Testing getDisk", SinglyLinkedList.getDisk().indexOf(newSinglyLinkedList))
newSinglyLinkedList.addNode()
console.log("Testing getLists", SinglyLinkedList.getLists().indexOf(newSinglyLinkedList))
console.log("Testing getSinglyLists", SinglyLinkedList.getSinglyLists().indexOf(newSinglyLinkedList))
