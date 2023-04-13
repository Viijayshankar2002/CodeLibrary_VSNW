/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
   let fast = head;
   let cycleExists = false;

   while (fast && fast.next) {
       slow = slow.next;
       fast = fast.next.next;

       if (slow === fast) {
           cycleExists = true;
           break;
       }
   }

   if (!cycleExists) {
       return null;
   }

   let ptr1 = head;
   let ptr2 = slow;

   while (ptr1 !== ptr2) {
       ptr1 = ptr1.next;
       ptr2 = ptr2.next;
   }

   return ptr1;
};