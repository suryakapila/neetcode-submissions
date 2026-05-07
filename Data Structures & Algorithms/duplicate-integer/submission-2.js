class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hasDup = new Map();
        for(const num of nums){
            if(hasDup.has(num)) return true;
            hasDup.set(num, 1);
        }
        return false;
    }
}
