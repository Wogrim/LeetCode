/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    //in-place increment
    for (let i = digits.length - 1; i >= 0; i--) {
        //if incrementing this digit makes it 10
        //carry the 1 to next digit
        //else done
        if (++digits[i] === 10)
            digits[i] = 0;
        else
            return digits;
    }

    //if we made it here, all digits were 9 and we need to add 1 at front
    digits.splice(0, 0, 1);
    return digits;
};