// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
// Fibonacci seq is the whole numbers 1,1,2,3,5,8,13,21, ...
// which starts with 1 and 1, and where every number thereafter is equal to sum of previous two numbers.

function fib(index) {
  if (index <= 2) return 1;
  return fib(index - 1) + fib(index - 2);
}

console.log('Ans: ', fib(4));
