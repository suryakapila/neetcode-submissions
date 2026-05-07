class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const len = nums.length;
        const val = new Map();
        for(let i = 0; i < len; i++){
            val.set(nums[i], i);
        }
        for(let i = 0; i < len; i++){
            let ans = target - nums[i];
            if(val.has(ans) && val.get(ans) !== i) {
                    return [val.get(ans), i];
            }
        }
        return [-1, -1]
    }
}
