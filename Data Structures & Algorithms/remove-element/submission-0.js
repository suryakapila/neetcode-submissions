class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let count = 0;
        for (let i = 0; i < nums.length; i++){
            if (nums[i] === val){
                nums[i] = 51;
                count++;
            }
        }

        nums.sort((a,b)=> a-b);

        return nums.length-count;
        
    }
}
