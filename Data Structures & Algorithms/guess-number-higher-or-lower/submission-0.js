/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l = 1;
        let r = n;
        while(true){
            let mid = Math.floor((l+r)/2);
            let pick = guess(mid);
            if( pick < 0) r = mid -1;
            else if (pick >0) l= mid+1;
            else return mid; 
        }
    }
}
