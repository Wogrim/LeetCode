/**
 * helper function to left-justify
 *
 * @param {string[]} words
 * @param {number} first
 * @param {number} last
 * @param {number} extraSpaces
 * @return {string}
 */
var justify_left = function (words, first, last, extraSpaces) {
    let answer = "";

    //put words with 1 space between
    answer += words[first];
    first++;
    while (first <= last) {
        answer += ' ' + words[first];
        first++;
    }

    //put all extra spaces at the end
    while (extraSpaces > 0) {
        answer += ' ';
        extraSpaces--;
    }

    return answer;
}

/**
 * helper function to justify multiple words in a line
 *
 * @param {string[]} words
 * @param {number} first
 * @param {number} last
 * @param {number} extraSpaces
 * @return {string}
 */
var justify = function (words, first, last, extraSpaces) {
    let answer = "";

    //calculate how many extra spaces between all words
    const extra_per = Math.floor(extraSpaces / (last - first));
    //an additional extra space before which words?
    const another_extra = extraSpaces % (last - first) + first;

    //put first word then spaces and extra spaces before each remaining
    answer += words[first];
    first++;
    while (first <= last) {
        for (let i = 1 + extra_per + (first <= another_extra ? 1 : 0); i > 0; i--)
            answer += ' ';
        answer += words[first];
        first++;
    }

    return answer;
}

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let answers = [];

    const n = words.length;
    let first = 0;
    let size = -1; //to not count space before first word
    let currentW;
    // for each word
    for (let current = 0; current < n; current++) {
        currentW = words[current].length;
        // if not too big, 'add' current word
        // else current word must go on next line
        if (size + currentW + 1 <= maxWidth) {
            size += currentW + 1;
        }
        else {
            //if only one word, left-justify
            //else justify
            if (current - 1 === first) {
                answers.push(justify_left(words, first, current - 1, maxWidth - size));
            }
            else {
                answers.push(justify(words, first, current - 1, maxWidth - size));
            }

            //set up next line to start with current
            first = current;
            size = currentW;
        }
    }

    //the last line must be left-justified
    answers.push(justify_left(words, first, n - 1, maxWidth - size));

    return answers;
};