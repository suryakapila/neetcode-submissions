class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = "";
        for(const c of s){
            if(c >= 'a' && c <= 'z'||
                c >= 'A' && c <= 'Z' ||
                c >= '0' && c <= '9') str += c.toLowerCase();
        }
        str = str.split(' ').join(',');
        //console.log(str);

        let l= 0, r = str.length-1;
        while(l<r){
            if(str[l] !== str[r]) return false;
            l++;
            r--;
        }

        return true;
    }
}
