class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const res = new Array(len).fill(1);
        for(let i = 0; i < len; i++){
            for(let j = 0; j < len; j++){
                if(i != j){
                    res[i] *= nums[j];  
                }
            }
        }
        return res;
    }
}
