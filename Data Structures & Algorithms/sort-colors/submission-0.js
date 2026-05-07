class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let red = 0;
        let white = 0;
        let blue = 0;
        for(const num of nums){
            if(num == 0) red++;
            if(num == 1) white++;
            if(num == 2) blue++;
        }
        let idx = 0;
        while(red > 0){
            nums[idx] = 0;
            red--;
            idx++;
        }
        while(white > 0){
            nums[idx] = 1;
            white--;
            idx++;
        }
        while(blue > 0){
            nums[idx] = 2;
            blue--;
            idx++;
        }

        return nums;
    }
}
