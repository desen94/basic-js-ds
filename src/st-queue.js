// const {NotImplementedError} = require('../extensions/index.js')

const {ListNode} = require('../extensions/list-node.js')

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
    constructor() {
        this.head = null
        this.length = 0
    }
    
    getUnderlyingList() {
        let currentNode = this.head
        
        while (currentNode.next) {
            let current = currentNode
            currentNode = currentNode.next
            return current
        }
    }
    
    enqueue(value) {
        if (this.length === 0) {
            this.head = new ListNode(value)
        } else {
            let currentNode = this.head
            
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            
            currentNode.next = new ListNode(value)
        }
        
        this.length++
    }
    
    dequeue() {
        let currentNode = this.head
        this.head = currentNode.next
        this.length--
        return currentNode.value
    }
}