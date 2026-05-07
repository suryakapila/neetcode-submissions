class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let len = nums.length;
        let l = 0, r = len-1;
        while(l <= r){
            let m = Math.floor((l+r)/2);
            if(target > nums[m]) l = m+1;
            else if (target < nums[m]) r = m-1;
            else return m;
        }
        return -1;
        
    }
}
