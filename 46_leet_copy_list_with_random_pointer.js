/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    
    // First pass: create new nodes and copy the values
    let cur = head;
    while (cur) {
        const newNode = new Node(cur.val);
        newNode.next = cur.next;
        cur.next = newNode;
        cur = newNode.next;
    }
    
    // Second pass: copy the random pointers
    cur = head;
    while (cur) {
        if (cur.random) {
            cur.next.random = cur.random.next;
        }
        cur = cur.next.next;
    }
    
    // Third pass: restore the original list and extract the copy
    const dummy = new Node(0);
    let prev = dummy;
    cur = head;
    while (cur) {
        prev.next = cur.next;
        cur.next = cur.next.next;
        prev = prev.next;
        cur = cur.next;
    }
    
    return dummy.next;
};