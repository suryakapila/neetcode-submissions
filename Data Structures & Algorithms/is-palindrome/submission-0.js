class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric(ch){
        return (ch >='a' && ch <= 'z' ||
        ch >= 'A' && ch <='Z' ||
        ch >= '0' && ch <= '9');
    }

    isPalindrome(s) {
        let str = '';
        for(let ch of s){
            if(this.isAlphaNumeric(ch)){
                str += ch.toLowerCase();
            }
        }
        let l = 0, r = str.length-1;
        while(l<r){
            if(str[l] === str[r]){
                l++;
                r--;
            }else return false
        }
        return true;
    }
}
