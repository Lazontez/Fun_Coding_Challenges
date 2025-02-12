export default function topPerformers(students) {
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


