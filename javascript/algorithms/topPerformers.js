// Problem 1
export function topPerformers(students) {
    if (!Array.isArray(students)) {
        throw new TypeError('Expected an array');
    }

    if (students.some(student => typeof student !== 'object' || student === null)) {
        throw new TypeError('Expected an array of objects');
    }

    let rank = 0; 
    let lastScore = null;
    
    return students
        .filter(student => student.score > 79)
        .sort((a, b) => b.score - a.score)
        .map((student, i, arr) => {
            if (student.score !== lastScore) {
                rank = i + 1;
            }
            lastScore = student.score;

            return {
                name: student.name,
                score: student.score,
                rank: rank
            };
        });
}

// Problem 2

export function groupWords(words){

let groupedWords = {}

for(let x in words){
    let key = words[x].split('').sort().join('')
    if(!groupedWords[key]){
        groupedWords[key] = []
    }
    groupedWords[key].push(words[x])
}

return Object.values(groupedWords)

}
const wrds = ["abc", "bca", "cab", "xyz", "yxz", "zxy", "hello", "olelh"];

console.log(groupWords(wrds))