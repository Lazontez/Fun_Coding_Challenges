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


#

## 2. **Problem Statement** 
Write a function that takes an array of words and groups them together **if they contain the exact same letters**, regardless of order.  

## **Requirements**  
- Words must be grouped if they contain the **same exact letters**.  
- **Different from anagrams**: The number of each letter must be the same.  
- Return an **array of arrays**, where each sub-array contains words that belong together.  

## **Example Input & Output**  

### **Input:**  
```javascript
const words = ["abc", "bca", "cab", "xyz", "yxz", "zxy", "hello", "olelh"];
console.log(groupWords(words));
```
### **Output:##

```javascript
[
  ["abc", "bca", "cab"],
  ["xyz", "yxz", "zxy"],
  ["hello", "olelh"]
]
```

## 2. Problem Statement
Given an array of transactions, each containing an amount and type ("credit" or "debit"),
write a function to calculate the final balance starting from an initial balance of 0.

### Instructions

#### Example Inpiut
```javascript

// Example Input:
// const transactions = [
//   { amount: 100, type: "credit" },
//   { amount: 50, type: "debit" },
//   { amount: 200, type: "credit" },
//   { amount: 30, type: "debit" }
// ];
//
// Expected Output:
// finalBalance(transactions) // 220

```

