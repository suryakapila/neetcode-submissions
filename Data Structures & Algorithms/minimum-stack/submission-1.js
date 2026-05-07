class MinStack {
    constructor() {
        this.stack = [];
        this.miniStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        val = Math.min(val, this.miniStack.length  === 0 ? val: this.miniStack[this.miniStack.length -1]);
        this.miniStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.miniStack.pop();
         this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.miniStack[this.miniStack.length - 1];
    }
}
