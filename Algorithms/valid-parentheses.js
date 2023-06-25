/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    //early exit: odd number of characters; impossible
    if (s.length % 2 === 1)
        return false;

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            //for opening, push onto stack
            case '(':
            case '[':
            case '{':
                stack.push(s[i]);
                break;

            //for closing, pop opening from stack and make sure it matches
            case ')':
                if (stack.pop() !== '(')
                    return false;
                break;
            case ']':
                if (stack.pop() !== '[')
                    return false;
                break;
            case '}':
                if (stack.pop() !== '{')
                    return false;
                break;

            default:
            //shouldn't get here
        }
    }

    //success if the stack is empty
    return stack.length === 0;
};