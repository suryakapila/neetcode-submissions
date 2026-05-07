class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        const freqs = new Array(26).fill(0);
        const freqt = new Array(26).fill(0);
        for(let i = 0; i<s.length; i++){
            freqs[s[i].charCodeAt() - 97]++;
            freqt[t[i].charCodeAt() - 97]++;
        }

        for(let i = 0; i <26; i++){
            if(freqs[i] !== freqt[i]) return false;
        }
        return true;
    }
}
