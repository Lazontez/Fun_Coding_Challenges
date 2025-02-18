function isPalindrome(string) {
    // Your code goes here
    if(typeof string !== 'string'){
        throw new TypeError(`Expected type of string instead got ${typeof string}`)}

    const structuredString = string.toLowerCase().replace(/[^a-z0-9]/g, '')

    return structuredString.split('').reverse().join('') == structuredString
}

console.log(isPalindrome('race car')); // true
console.log(isPalindrome('A man, a plan, a canal, Panama')); // true
console.log(isPalindrome('Hello, World!')); // false
