class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rowLen = matrix.length; 
        const colLen = matrix[0].length;
        let r = 0, c = colLen -1;
        while(c >=0 && r < rowLen){
            if(matrix[r][c] > target) c-- ;
            else if(matrix[r][c] < target) r++;
            else return true;
        }
        return false;
    }
}
