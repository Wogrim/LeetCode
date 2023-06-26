/**
 * recursive version, which will be at most 20 deep because of constraints
 * 
 * @param {number} allow index of minimun candidate allowed
 * @param {number[]} candidates
 * @param {number} target
 * @param {number[][]}
 */
var cS_recursive = function (allow, candidates, target) {
    let answers = [];

    //look through allowed candidates
    for (let i = allow; i < candidates.length; i++) {
        const candidate = candidates[i];

        //exit: if candidate > target no more answers
        if (candidate > target)
            break;

        //exit: if candidate === target add answer and no more answers
        if (candidate === target) {
            answers.push([candidate]);
            break;
        }

        //else candidate < target; try and recurse
        //but don't allow earlier candidates, to avoid duplicates
        let recursed_answers = cS_recursive(i, candidates, target - candidate);
        //for each recursed answer add candidate and add to answers
        for (const recursed_answer of recursed_answers) {
            recursed_answer.push(candidate);
            answers.push(recursed_answer);
        }
    }

    return answers;
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    //sort candidates for optimization
    candidates.sort((a, b) => a - b);

    //call recursive version
    return cS_recursive(0, candidates, target);
};