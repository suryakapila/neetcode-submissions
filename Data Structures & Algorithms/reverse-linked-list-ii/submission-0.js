/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode(0);
        dummy.next = head;
        let prev = dummy;
        for(let i = 0; i < left-1 ; i++){
            prev = prev.next;
        }
        let start = prev.next;
        let prevReverse = null;
        let curr = start;
        for(let i = 0; i < right-left+1; i++){
            let next = curr.next;
            curr.next = prevReverse;
            prevReverse = curr;
            curr = next;
        }
        prev.next = prevReverse;
        start.next = curr;
        return dummy.next;

    }
}
