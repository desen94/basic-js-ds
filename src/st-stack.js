// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
module.exports = class Stack {
    array = []
    
    push(element) {
        this.array.push(element)
    }
    
    pop() {
        let size = this.array.length - 1
        let last = this.array[size]
        
        this.array = this.array.slice(0, size)
        return last
    }
    
    peek() {
        return this.array[this.array.length - 1]
    }
}
