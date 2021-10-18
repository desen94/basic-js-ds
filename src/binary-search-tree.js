// const {NotImplementedError} = require('../extensions/index.js')

const {Node} = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
    
    constructor() {
        this.node = null
    }
    
    root() {
        return this.node ?? null
    }
    
    add(data) {
        this.node = insertData(this.node, data)
        
        function insertData(node, data) {
            if (!node) return new Node(data)
            if (node.data === data) return node
            
            data < node.data ? node.left = insertData(node.left, data)
                             : node.right = insertData(node.right, data)
            
            return node
        }
    }
    
    has(data) {
        return searchData(this.node, data)
        
        function searchData(node, data) {
            if (!node) return false
            if (node.data === data) return true
            
            return data < node.data ? searchData(node.left, data)
                                    : searchData(node.right, data)
        }
    }
    
    find(data) {
        return searchData(this.node, data)
        
        function searchData(node, data) {
            if (!node) return null
            if (node.data === data) return node
            
            return data < node.data ? searchData(node.left, data)
                                    : searchData(node.right, data)
        }
    }
    
    remove(data) {
        this.node = removeNode(this.node, data)
        
        function removeNode(node, data) {
            if (!node) return null
            
            if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            } else if (node.data < data) {
                node.right = removeNode(node.right, data)
                return node
            } else {
                if (!node.left && !node.right) return null
                
                if (!node.left) return node = node.right
                if (!node.right) return node = node.left
                
                let minRight = node.right
                
                while (minRight.left) {
                    minRight = minRight.left
                }
                
                node.data = minRight.data
                
                node.right = removeNode(node.right, minRight.data)
                
                return node
            }
        }
    }
    
    min() {
        if (!this.node) return null
        
        let node = this.node
        while (node.left) {
            node = node.left
        }
        
        return node.data
    }
    
    max() {
        if (!this.node) return null
        
        let node = this.node
        while (node.right) {
            node = node.right
        }
        
        return node.data
    }
}