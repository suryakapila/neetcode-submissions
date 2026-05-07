class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length;
        const ans = Array(2*len);
        for(let i = 0; i < 2*len ; i++){
            ans[i] = nums[i%len];
        }
        return ans;
    }
}
