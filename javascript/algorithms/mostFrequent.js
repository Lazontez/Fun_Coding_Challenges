mostFrequent = (arr)=>{

    if(!Array.isArray(arr)) throw TypeError('Expected an array');
    let correctArr = arr.filter(element => Number.isFinite(element)=== true)
    if(correctArr.length === 0) throw TypeError('Array must contain atleast 1 number')

    const db = new Set(correctArr)
    let [highestCount, mostFrequent] = [0 , null]
    
     // Run a loop through the set
    for(x of db){
         // Count how many instances the current x has
        const currentCount = correctArr.filter(num => x === num).length
        // If the amount of instances are higher than the current streak
        if(currentCount > highestCount){
            highestCount = currentCount;
            mostFrequent = x
        }
    }
    return mostFrequent
}

console.log(mostFrequent([]))