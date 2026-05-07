class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let matrixFlat = matrix.flat();
        let len = matrixFlat.length;
        let l = 0, r = len - 1;
        while(l<=r){
            let m = Math.floor((l+r)/2);
            if(target > matrixFlat[m]) l = m+1;
            else if(target < matrixFlat[m]) r = m-1;
            else return true;
        }
        return false;
    }
}
