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
     * @return {boolean}
     */
    isPalindrome(head) {
        let fast = head;
        let slow = head;
        while(fast !== null && fast.next !== null){
            fast = fast.next.next;
            slow = slow.next;
        }

        let start = slow;
        let prev = null;
        while(start){
            let next = start.next;
            start.next = prev;
            prev = start;
            start = next;
        }
        let left = head;
        while(prev){
            if(prev.val !== left.val) return false;
            prev = prev.next;
            left = left.next;
        }
        return true;
    }
}
