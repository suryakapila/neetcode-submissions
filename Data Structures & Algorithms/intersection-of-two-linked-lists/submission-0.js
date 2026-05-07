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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        while(headA){
            let cur = headB;
            while(cur){
                if(headA === cur){
                    return headA;
                }
                cur = cur.next;
            }
            headA = headA.next;
        }
        return null;
    }
}
