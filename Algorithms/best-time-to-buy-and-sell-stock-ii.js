/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length;
    //for each day, buy stock if it will go up the next day, sell it
    //if it goes down the next day, don't buy it yet
    let profit = 0;
    for (let i = 0; i < n; i++) {
        let potential = prices[i + 1] - prices[i];
        if (potential > 0)
            profit += potential;
    }
    return profit;
};