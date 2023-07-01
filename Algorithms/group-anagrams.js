/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    //key is representation of an anagram
    //value is list of words for this anagram
    let matches = {};

    for (const word of strs) {
        //sort the word to represent the anagram
        //counting sort might be better for very long words
        const sorted = word.split("").sort().join("");

        if (!(sorted in matches))
            matches[sorted] = [word];
        else
            matches[sorted].push(word);
    }

    return Object.values(matches);
};