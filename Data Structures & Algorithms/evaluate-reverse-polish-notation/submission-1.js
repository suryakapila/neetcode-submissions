class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(const token of tokens){
            if(token === "+"){
                let tmp1 = stack.pop();
                let tmp2 = stack.pop();
                stack.push(tmp1+tmp2);
            }else if(token === "-"){
                let tmp1 = stack.pop();
                let tmp2 = stack.pop();
                stack.push(tmp2-tmp1);
            }else if(token === "*"){
                let tmp1 = stack.pop();
                let tmp2 = stack.pop();
                stack.push(tmp1*tmp2);
            }else if(token === "/"){
                let tmp1 = stack.pop();
                let tmp2 = stack.pop();
                stack.push(Math.trunc(tmp2/tmp1));
            }else{
                stack.push(parseInt(token));
            }
        }
        return stack[stack.length-1];
    }
}
