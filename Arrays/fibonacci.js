// Fibonacci Series - [0,1,1,2,3,5]
// Basically it will add last digits and give the next element in the array.

function fibSeries(n) {
  const arr = [0, 1]; // whatever starting 2 digits of the array could be.

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

n = 10;
console.log(fibSeries(n)); //output is [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//Recurrsion:

function fibNumber(n) {
  if (n <= 1) return n;

  return fibNumber(n - 1) + fibNumber(n - 2);
}

console.log(fibNumber(10)); //output is 55


