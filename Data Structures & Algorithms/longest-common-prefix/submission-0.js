class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let lcp = "";
        for(let i = 0; i < strs[0].length; i++){
            for(const str of strs){
                if (!str[i] || str[i] != strs[0][i])
                    return str.slice(0,i);
                

            }
        }
        return strs[0];
    }
}
