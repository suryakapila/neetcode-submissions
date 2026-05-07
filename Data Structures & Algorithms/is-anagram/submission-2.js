class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const freqS = new Array(26).fill(0);
        const freqT = new Array(26).fill(0);
        
        for(let i = 0; i < s.length; i++){
            freqS[s.charCodeAt(i) - 97]++;
            freqT[t.charCodeAt(i) - 97]++;
        }

        for(let i = 0; i < 26; i++){
            if(freqS[i] !== freqT[i]) return false;
        }
        return true;
        
    }
}
