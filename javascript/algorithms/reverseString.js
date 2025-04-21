// Write a function that reverses a string
// Example: reverseString("hello") => "olleh"

function reverseString(string) {
    if (typeof string !== 'string') return 'Expected A String';
    let array = string.split('');
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        [array[start], array[end]] = [array[end], array[start]];
        start++;
        end--;
    }
    return array.join('');
}

// testing how fast it runs
const longStr = 'abcdefghijklmnopqrstuvwxyz'.repeat(1000); 
console.time('Reverse String');
console.log(reverseString(longStr));
console.timeEnd('Reverse String');
