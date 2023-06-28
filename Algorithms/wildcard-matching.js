/**
 * helper function to look for subpattern in substring
 *
 * @param {string} s only letters
 * @param {string} subpattern letters or ? (single character wildcard)
 * @param {number} start index in s to start looking for subpattern
 * @param {number} s_end index in s by which subpattern must match
 * @return {number} index of last character of matched subpattern, or -1 for no match
 */
var subMatch = function (s, subpattern, start, s_end) {
    //last index the subpattern could start
    const end_i = s_end - subpattern.length + 1;

    //loop each possible subpattern start location checking for a match
    for (let i = start; i <= end_i; i++) {
        for (let j = 0; ; j++) {
            //check letters match 
            if (subpattern[j] !== '?' && subpattern[j] !== s[i + j])
                break;

            //subpattern matched if j is length of subpattern-1
            if (j === subpattern.length - 1)
                return i + j;
        }
    }

    //subpattern did not match in the range
    return -1;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const s_last = s.length - 1;
    const p_last = p.length - 1;

    //check start forward until first * (there may not be one)
    let start;
    for (start = 0; start <= p_last; start++) {
        const p_char = p[start];
        if (p_char === '*')
            break;
        else if (p_char === '?')
            ; //do nothing; we 'matched' any letter
        else if (p_char !== s[start])
            return false; //letter did not match
    }

    //if we went through entire pattern there was no *
    //so we are good if the search string is the same length
    if (start > p_last)
        return s_last === p_last;

    //check end backward until last * (which we know exists at this point)
    let end2;
    for (end2 = 0; ; end2++) {
        const p_char = p[p_last - end2];
        if (p_char === '*')
            break;
        else if (p_char === '?')
            ; //do nothing; we 'matched' any letter
        else if (p_char !== s[s_last - end2])
            return false; //letter did not match
    }

    //convert end2 to indices for s and p
    const s_end = s_last - end2;
    const p_end = p_last - end2;

    //edge case: start and end2 overlapped in s
    if (start - 1 >= s_end + 1)
        return false;

    //put subpatterns between * in an array
    let subpatterns = [];
    for (let i = start; i < p_end;) {
        let subpattern = "";
        let j;
        for (j = i + 1; j < p_end; j++) {
            if (p[j] === '*')
                break;
            else
                subpattern += p[j];
        }
        //only non-zero length subpatterns
        if (subpattern)
            subpatterns.push(subpattern);
        i = j;
    }

    //if no subpatterns, the middle of s just matches the * and we're good
    if (subpatterns.length === 0)
        return true;

    //search from start to end for subpatterns
    for (const subpattern of subpatterns) {
        start = subMatch(s, subpattern, start, s_end) + 1;
        if (start === 0)
            return false;
    }

    //all subpatterns were found, success
    return true;
};