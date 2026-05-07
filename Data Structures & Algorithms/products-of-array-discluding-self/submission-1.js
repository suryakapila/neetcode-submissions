class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        let zeroCount = 0;
        const res = new Array(len).fill(0);
        let prod = 1;
        for(let num of nums){
            if(num !== 0) prod *= num;
            else zeroCount++;
        }
        if (zeroCount > 1) return res;
        else if(zeroCount == 1){
            for(let i = 0; i< len; i++){
                if(nums[i] === 0) res[i] = prod;
                else res[i] = 0;
            }
        }
        else{
            for(let i = 0; i < len; i++){
                res[i] = prod/nums[i];
            }
        }
        return res;

    }
}
