class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const n = nums.length;
        for(let i = 0; i < n ; i++){
            for(let j = i+1; j < n; j++){
                if(nums[i]> nums[j]){
                let tmp = nums[j];
                nums[j] = nums[i];
                nums[i] = tmp;
                }
            }
        }

        return nums;
    }
}
