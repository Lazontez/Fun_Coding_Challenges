/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const parsedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    let leftP = 0
    let rightP = parsedString.length - 1
    while (leftP < rightP) {
        if (parsedString[leftP] !== parsedString[rightP]) return false
        leftP++
        rightP--
    }
    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))

// Just a long string to check work and see how it runs
const base = 'AbleWasIEreISawElba'; 
const massive = (base + base.split('').reverse().join('')).repeat(2500); 
console.time('Palindrome Check');
console.log(isPalindrome(massive)); 
console.timeEnd('Palindrome Check');
