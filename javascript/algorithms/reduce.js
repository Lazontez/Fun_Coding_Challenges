


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

function finalBalance(transactions) {
    // Iterate through transactions
    if (!Array.isArray(transactions)) throw new Error('Expected and array');

    
    const totalPrice = transactions.reduce((total, currentTransaction) =>{
            if(currentTransaction.type === 'debit'){
                return total -= currentTransaction.amount
            }
            // Use reduce function to take the current trasaction and add it to a total balanace
            return total += currentTransaction.amount
    }, 0 )
    return totalPrice
  }
  
  const transactions = [
    { amount: 100, type: "credit" },
    { amount: 50, type: "debit" },
    { amount: 200, type: "credit" },
    { amount: 30, type: "debit" }
  ];
  
  console.log(finalBalance(transactions)); // Expected output: 220
  
  // Interview Question:
  // Describe the difference between manual and automated testing.
  // When would you choose one over the other?
//   Answer: Manual testing is a testing approach of 'Manually' validating software
// with the use of a specialized tester. Some of the different types which also apply to 
// automation testing are. Functional,Security, and Performance testing. Automation testing is when
// you run an automated script that mimics a manual test on the UI, or an API and Database test. All of this 
// done in order to confirm a system functions correctly, is secured correctly, and works effeciently.
// You choose one over the other in my opinion depending on your current test coverage. Automation is built off manual testing, so if you 
// do not have a solid manual testing suite, you need that before automation can even be considered.