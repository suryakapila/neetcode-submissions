class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        const freqS = new Array(26).fill(0);
        for(let i = 0; i < s.length; i++){
            freqS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            freqS[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        return freqS.every(val => val === 0);


    }
}
