//You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
//You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
//Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

//Brut force - O(n^2) - not very good.
// function maxProfit(prices) {
//   if (prices.length < 2) return false;

//   let profit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] < prices[j]) {
//         const diff = prices[j] - prices[i];
//         profit = Math.max(profit, diff);
//       }
//     }
//   }
//   return profit;
// }

// prices = [10, 1, 5, 6, 7, 1];
// console.log(maxProfit(prices));

//Efficient Version (using Two Pointers):

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price; // update buying price
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  }

  return maxProfit;
}

prices = [10, 1, 5, 6, 7, 1];
console.log(maxProfit(prices));
