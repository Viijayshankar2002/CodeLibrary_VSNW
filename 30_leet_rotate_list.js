/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === 0) {
    return head;
  }

  // Count the number of nodes in the list
  let count = 0;
  let node = head;
  while (node) {
    count++;
    node = node.next;
  }

  // Calculate the actual number of places to rotate
  k %= count;

  // If k is 0, the list doesn't need to be rotated
  if (k === 0) {
    return head;
  }

  // Find the new tail and new head of the rotated list
  let tail = head;
  let newHead = head;
  for (let i = 0; i < count - k - 1; i++) {
    tail = tail.next;
  }
  newHead = tail.next;
  tail.next = null;

  // Find the original tail of the list and connect it to the original head
  node = newHead;
  while (node.next) {
    node = node.next;
  }
  node.next = head;

  return newHead;
};