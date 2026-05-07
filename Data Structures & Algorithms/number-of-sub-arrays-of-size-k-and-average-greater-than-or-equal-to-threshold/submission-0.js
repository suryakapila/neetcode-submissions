class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let sum = 0;
        let count = 0;
        for(let i = 0; i< k; i++){
            sum+=arr[i];
        }
        if(sum >= threshold*k)count++;
        let s = 0, e = k;
        while(e < arr.length){
            sum = sum - arr[s] + arr[e];
            if(sum >= threshold*k) count++;
            s++;
            e++;
        }
        return count;
    }
}
