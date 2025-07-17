// Fibonacci Series - [0,1,1,2,3,5]
// Basically it will add last digits and give the next element in the array.

function fibSeries(n) {
  const arr = [0, 1]; // whatever starting 2 digits of the array could be.

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

n = 6;
console.log(fibSeries(n));
