## 1. Problem Statement
Given an array of student objects with name and score properties:

### Instructions

#### The function should:
Filter out students who scored 80 or above.
Sort the remaining students in descending order based on their score.
Assign a rank to each student:
Rank 1 goes to the highest score.
If two students have the same score, they share the same rank.
The next rank skips the number of students who tied.
#### Example Inpiut
```javascript

const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 88 },
  { name: "David", score: 92 },
  { name: "Eve", score: 79 },
  { name: "Frank", score: 85 }
];
```
#### Example Output
```javascript

[
  { name: "Alice", score: 92, rank: 1 },
  { name: "David", score: 92, rank: 1 },
  { name: "Charlie", score: 88, rank: 2 },
  { name: "Frank", score: 85, rank: 3 }
]
```