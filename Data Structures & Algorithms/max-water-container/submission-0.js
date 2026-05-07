class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let size = heights.length;
        let left = 0, right = size -1;
        let maxArea = 0;
        while(left < right){
            let height = Math.min(heights[left], heights[right]);
            let area = height *(right - left);
            maxArea = Math.max(area, maxArea);
            if(heights[left] < heights[right]) left++;
            else right --;
        }
        return maxArea;
    }
}
