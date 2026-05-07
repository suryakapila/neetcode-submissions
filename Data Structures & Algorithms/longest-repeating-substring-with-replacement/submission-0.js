class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        for(let l = 0; l < s.length; l++){
            let mp = new Map();
            let maxf = 0;
            for(let r = l; r < s.length; r++){
                mp.set(s[r], (mp.get(s[r])|| 0) + 1);
                maxf = Math.max(maxf, mp.get(s[r]));

                if(r-l+1 - maxf <= k){
                    res = Math.max(res, r-l+1);
                }
            }
        }
        return res;
    }
}
