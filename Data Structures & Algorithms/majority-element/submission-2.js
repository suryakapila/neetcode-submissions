class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // check for max subarray with same number
        if(nums.length === 1) return nums[0];
        nums.sort((a,b)=>a-b);
        let i = 0, j = 1;
        let k = 1;
        while(i<=j && j < nums.length){
            if(nums[i] === nums[j]){
                j++;
                k++;
                if(k > nums.length/2){
                    return nums[i];
                }
            } else {
                i++;
                k = 0;
            }
        }



    }
}
