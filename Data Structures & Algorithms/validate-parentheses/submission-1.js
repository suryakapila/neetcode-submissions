class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const myStack= [];
        const closeParan = {
            ')': '(',
            '}':'{',
            ']':'['
        };
        for(let a of s){
            if(a === '(' || a === '[' || a === '{'){
                myStack.push(a);
            }
            else {
                if(myStack.length > 0 && myStack[myStack.length-1] === closeParan[a]){
                    myStack.pop();
                }
                else{
                    return false;
                }
            }
        }
        return myStack.length === 0;
    }
}
