/**
 * function for determining if number represented by 'digits' is too big
 *
 * @param {number []} digits array of digits representing a number, no leading zeros
 * @param {number []} max_digits array of digits of biggest possible number
 * @return {boolean}
 */
var isTooBig = function (digits, max_digits) {
    //early exit: too many digits
    if (digits.length > max_digits.length)
        return true;

    //early exit: less digits
    if (digits.length < max_digits.length)
        return false;

    //else must compare digit-by-digit
    for (let i = 0; i < digits.length; i++) {
        //exit: bigger digit
        if (digits[i] > max_digits[i])
            return true;

        //exit: smaller digit
        if (digits[i] < max_digits[i])
            return false;

        //else same digit: continue comparing
    }

    //only gets here if all digits are the same
    return false;
}

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    //read past any leading spaces
    let i = 0;
    for (; s[i] === ' '; i++)
        ;

    //read sign
    let negative = false;
    if (s[i] === '-') {
        negative = true;
        i++;
    }
    else if (s[i] === '+') {
        i++;
    }

    //get digits but ignore leading zeros
    let digits = [];
    for (let j = i; j < s.length; j++) {
        switch (s[j]) {
            case '0':
                if (digits.length > 0)
                    digits.push(0);
                break;
            case '1':
                digits.push(1);
                break;
            case '2':
                digits.push(2);
                break;
            case '3':
                digits.push(3);
                break;
            case '4':
                digits.push(4);
                break;
            case '5':
                digits.push(5);
                break;
            case '6':
                digits.push(6);
                break;
            case '7':
                digits.push(7);
                break;
            case '8':
                digits.push(8);
                break;
            case '9':
                digits.push(9);
                break;
            default:
                //non-digit: break out of loop
                j = s.length;
        }
    }

    //early exit: if no digits, answer is zero
    if (digits.length === 0)
        return 0;

    //early exit: number too big for 32 bit int
    if (!negative) {
        const max = 2147483647;
        const max_digits = [2, 1, 4, 7, 4, 8, 3, 6, 4, 7];
        if (isTooBig(digits, max_digits))
            return max;
    }
    else {
        const max = -2147483648;
        const max_digits = [2, 1, 4, 7, 4, 8, 3, 6, 4, 8];
        if (isTooBig(digits, max_digits))
            return max;
    }

    //calculate the number
    let answer = 0;
    let multiple = negative ? -1 : 1;
    for (i = digits.length - 1; i >= 0; i--) {
        answer += digits[i] * multiple;
        multiple *= 10;
    }

    return answer;
};