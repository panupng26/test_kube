const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (str.length < 2) {
      return true;
    }
    if (str.length % 2 === 0) {
      return str === str.split('').reverse().join('');
    }
    const mid = Math.floor(str.length / 2);
    const firstHalf = str.slice(0, mid);
    const secondHalf = str.slice(mid + 1).split('').reverse().join('');
    return firstHalf === secondHalf;
}
console.log(isPalindrome("helleh"))
console.log(isPalindrome("hel"))
console.log(isPalindrome("abba"))
