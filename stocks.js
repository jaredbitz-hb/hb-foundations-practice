function calculateBestProfit(stockPrices) {
    let bestProfitSoFar = 0;
    let lowestPriceSoFar = stockPrices[0];
    for(const curDay of stockPrices) {
        // If we've found a better starting point
        if (curDay < lowestPriceSoFar) {
            lowestPriceSoFar = curDay;
        }
        // Calculate profit if I buy on the lowest so
        // far and sell today
        const todaysProfit = curDay - lowestPriceSoFar;
        // Check if that profit is the best we can do
        if (todaysProfit > bestProfitSoFar) {
            bestProfitSoFar = todaysProfit;
        }
        // For debugging:
        // console.log({curDay, todaysProfit, lowestPriceSoFar, bestProfitSoFar});
    }
    return bestProfitSoFar;
}
console.log(calculateBestProfit([99, 100, 3, 95, 1, 7, 10]));





// Claim: The optimal day to buy will be a day with
//        the lowest price SO FAR

//Example: [99, 100, 4, 50, 3, 7, 99]



// Loop over the array
// If the current number is the lowest so far
// start trying to buy on that date

// For every number after that, calculate the profit
// if you buy on the lowest so far and sell on that date
// Keep track if that possible profit is the LARGEST
// I've seen




// Option 1: Choose to buy on the lowest #
//           And sell on the highest


// These numbers represent stock prices on different days
// Goal: Find the maximum profit possible by buying on
//       one day and selling on another
