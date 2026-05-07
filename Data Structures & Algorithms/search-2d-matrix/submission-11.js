class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;
        let top = 0, bot = m-1;
        while(top <= bot){
            const mR = Math.floor(top+(bot-top)/2);
            if(matrix[mR][n-1] < target) top = mR+1;
            else if(matrix[mR][0] > target) bot = mR - 1;
            else{
                break;
            }
        }
        if(top > bot) return false;
        const mR = Math.floor((top+bot)/2);
        let l = 0, r = n-1; 
                while(l <= r){
                    const mid = Math.floor((l+r)/2);
                    if(matrix[mR][mid] < target) l = mid +1;
                    else if(matrix[mR][mid] > target) r = mid -1;
                    else return true;
                }
    return false;
         
    }
}
