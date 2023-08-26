/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    //go from right to left keeping track of the max price in the future
    //and calculate what's the max profit for buying on that day
    const n = prices.length;
    let maxSell = prices[n - 1];
    let bestProfit = 0;
    for (let i = n - 1; i >= 0; i--) {
        let buy = prices[i];
        if (buy > maxSell)
            maxSell = buy;
        else {
            let profit = maxSell - buy;
            if (profit > bestProfit)
                bestProfit = profit;
        }
    }
    return bestProfit;
};