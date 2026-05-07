class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 0, r = x;
        let res = 1;
        while(l <=r){
            const mid = Math.floor(l+(r-l)/2);
            if(mid*mid === x) return mid;
            else if(mid*mid < x) {
                res = mid;
                l = mid+1;
            }
            else r = mid -1;

        }
        return res;
    }
}
