class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let l = 0, r = n-1;
        let leftmax = height[l];
        let rmax = height[r];
        let res = 0;
        while(l<r){
            if(leftmax < rmax){
                l++;
                leftmax = Math.max(leftmax, height[l]);
                res += leftmax - height[l];
            } else {
                r--;
                rmax = Math.max(rmax, height[r]);
                res += rmax - height[r];
            }
        }
        return res;
    }
}
