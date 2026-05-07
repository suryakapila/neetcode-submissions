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
        const lengthOfNode = (cur)=>{
            let length = 0;
            while(cur){
                length++;
                cur = cur.next;
            }
            return length;
        };

        let m = lengthOfNode(headA);
        let n = lengthOfNode(headB);

        let l1 = headA;
        let l2 = headB;

        if(m < n){
            [m,n] = [n,m];
            [l1, l2] = [l2, l1];
        }

        while(m > n){
            l1 = l1.next;
            m--;
        }

        while(l1 && l1 != l2){
            l2 = l2.next;
            l1 = l1.next;
        }
        return l2;
    }
}
