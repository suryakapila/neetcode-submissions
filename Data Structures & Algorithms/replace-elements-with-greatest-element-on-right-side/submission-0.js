class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const n = arr.length;
        const ans = new Array(n);
        let max_so_far = -1;
        for(let i=n-1;i>=0;i--){
            ans[i] = max_so_far;
            max_so_far= Math.max(arr[i], max_so_far);
        }
        return ans;
    }

}
