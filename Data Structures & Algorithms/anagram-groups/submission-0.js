class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const len = strs.length;
        const res = {};
        for (let str of strs){
            const key = str.split('').sort().join('');
            if (!res[key]){
                res[key] = [];
            }
            res[key].push(str);
        }
        return Object.values(res);
    }
}
