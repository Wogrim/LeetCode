/**
 * truncated square root of x
 * 
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // guess up and down similar to binary search
    // but we are searching for a square root of
    // a 31-bit number (signed 32-bit non-negative)
    // which means our answer will fit in 16 bits
    // so we can start guessing at 2^15 = 32768
    // and change by smaller and smaller steps

    //optimization: lookup table for step size instead of calculating
    const changes = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024,
        2048, 4096, 8192, 16384];
    let guess, i;

    // optimization: better starting guess for smaller x
    // (with minimal computation or not worth)
    if (x < 1024) {
        // sqrt(x) < 32
        guess = 16;
        i = 3;
    }
    else if (x < 1048576) {
        // sqrt(x) < 1024
        guess = 512;
        i = 8
    }
    else {
        guess = 32768;
        i = 14;
    }

    for (; i >= 0; i--) {
        // // optional early exit: exact answer
        // if(guess*guess===x)
        //     return guess;

        if (guess * guess > x)
            guess -= changes[i];
        else
            guess += changes[i];
    }

    // we should be on the answer except 0,
    // or we may have been on the answer and gone over it
    if (guess * guess > x)
        return guess - 1;
    else
        return guess;
};