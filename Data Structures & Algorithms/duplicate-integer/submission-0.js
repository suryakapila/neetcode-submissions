class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for(let i = 0; i < nums.length-1;  i++){
            let j = i+1;
            while(j < nums.length ){
                if(nums[i] === nums[j]) return true;
                j++;
            }
        }
        return false;
    }
}
