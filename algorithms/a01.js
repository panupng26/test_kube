// regular expression
const isMatch = (s, p) => {
    const numRows = s.length + 1;
    const numCols = p.length + 1;
    console.log('Numrows: ', numRows)
    console.log('NumCols: ', numCols)
    const dp = Array(numRows).fill(false).map(() => Array(numCols).fill(false));
    console.log('dp: ', dp)
    dp[0][0] = true;
    for (let i = 0; i < numRows; i++) {
      for (let j = 1; j < numCols; j++) {
        if (p[j - 1] === '*') {
          dp[i][j] = dp[i][j - 2] || (i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j]);
        } else {
          dp[i][j] = i > 0 && dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
        }
      }
    }
    return dp[numRows - 1][numCols - 1];
}
console.log(isMatch("missionsuccess", "mis*ion.*"))