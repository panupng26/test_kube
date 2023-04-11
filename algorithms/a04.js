const fibonacci = (n) => {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      let prev1 = 1;
      let prev2 = 0;
      let result = 0;
      for (let i = 2; i <= n; i++) {
        result = prev1 + prev2;
        prev2 = prev1;
        prev1 = result;
      }
      return result;
    }
}
console.log(fibonacci(2))
console.log(fibonacci(9))
