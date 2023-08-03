/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const n = s.length;

    //helper function to check if valid number
    const valid = (substring) => {
        switch (substring.length) {
            case 1:
                return true;
            case 2:
                return substring[0] !== '0';
            case 3:
                return substring[0] !== '0' && parseInt(substring) <= 255;
            default:
                return false;
        }
    };

    let answers = [];

    //current_combo used to backtrack decisions of where to put the dots
    let current_combo = [0];

    //helper function to put current combo in answers
    const add_current = () => {
        answers.push(s.substring(current_combo[0], current_combo[1])
            + '.'
            + s.substring(current_combo[1], current_combo[2])
            + '.'
            + s.substring(current_combo[2], current_combo[3])
            + '.'
            + s.substring(current_combo[3], n));
    };

    //create valid length combinations with a backtracking loop
    let start = 0;
    let remaining_digits;
    let remaining_numbers = 3;
    let try_length = 3;
    let current_index = 0;

    //helper function to backtrack
    const backtrack = () => {
        let tried_index = current_combo.pop();
        current_index = current_combo[current_combo.length - 1];
        try_length = tried_index - current_index - 1;
        remaining_numbers++;
    };

    while (true) {
        //if remaining_numbers is -1, successful combo then backtrack
        if (remaining_numbers === -1) {
            add_current();
            backtrack();
            continue;
        }
        //if all lengths for this number tried,
        //    backtrack and try 1 length shorter for previous number
        if (try_length === 0) {
            //but if we're on the first number, we're done
            if (remaining_numbers === 3)
                break;
            backtrack();
            continue;
        }

        remaining_digits = n - (current_index + try_length);
        //for this try to be valid
        //    must have enough remaining digits for remaining numbers
        //    and not more than 3 digits per remaining number
        //    and the represented number must be valid
        if (remaining_digits >= remaining_numbers
            && remaining_digits <= 3 * remaining_numbers
            && valid(s.substring(current_index, current_index + try_length))) {
            current_index += try_length;
            current_combo.push(current_index);
            remaining_numbers--;
            try_length = 3;
        }
        //otherwise try shorter length
        else {
            try_length--;
        }
    }

    return answers;
};