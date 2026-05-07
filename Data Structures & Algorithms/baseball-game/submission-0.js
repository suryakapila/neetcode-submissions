class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for(const ch of operations){
            if(ch === "+"){
                let tmp1 = stack[stack.length-1];
                let tmp2 = stack[stack.length-2];
                stack.push(tmp1+tmp2);
            }else if (ch === "C"){
                stack.pop();
            }else if(ch === "D"){
                let tmp3 = stack[stack.length-1];
                stack.push(tmp3*2);
            }else{
                stack.push(parseInt(ch));
            }
        }

        let res = 0;
        for(const rec of stack){
            res += rec;
        }

        return res;

    }
}
