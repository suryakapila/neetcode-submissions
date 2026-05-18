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
        const arr = [];
        while(head != null){
            arr.push(head.val);
            head = head.next;
        }

        let s = 0, e = arr.length-1;
        while(s < e){
            if(arr[s] !== arr[e]) return false;
            s++;
            e--;
        } 
        return true;
    }
}
