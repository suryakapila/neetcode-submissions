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
            const a = s.charCodeAt(i) - 97;
            const b = t.charCodeAt(i) - 97;
            freqS[a]++;
            freqT[b]++;
        }

        for(let i = 0; i < 26; i++){
            if(freqS[i] !== freqT[i]) return false;
        }
        return true;
        
    }
}
