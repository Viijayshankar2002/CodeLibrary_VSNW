/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    // Step 1: Find the middle node
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let middle = slow.next;
    slow.next = null;
    
    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let current = middle;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    // Step 3: Merge the first half with the reversed second half
    let p1 = head;
    let p2 = prev;
    while (p2) {
        let temp1 = p1.next;
        let temp2 = p2.next;
        p1.next = p2;
        p2.next = temp1;
        p1 = temp1;
        p2 = temp2;
    }
    
    return head;
};