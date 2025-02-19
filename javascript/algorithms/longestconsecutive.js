longestConsecutive = () => {

    const numSet = new Set(nums)
    let longest = 0
    // Run a loop through numSet
    for (const num of numSet) {
        // Start counting only if number is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNumber = num;
            let currentStreak = 1;
            // Keep the streak alive if the next number exists in the array
            while (numSet.has(currentNumber + 1)) {
                currentNumber++;
                currentStreak++;
            }

            
            longest = Math.max(longest, currentStreak);
        }
    }

    return longest;
}

