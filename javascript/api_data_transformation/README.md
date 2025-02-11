# API Data Transformation Challenge  

## Problem Statement  
You are given an array of user objects returned from an API. The data includes `first_name`, `last_name`, and `email`, but we need to transform it into a more useful format.

## Instructions
Create a function called transformUserData(users).

### The function should:
Combine first_name and last_name into fullName
Convert email to lowercase
Return the transformed array
Export the function to allow testing.

### **Input Example**
```json
[
  { "id": 1, "first_name": "John", "last_name": "Doe", "email": "JOHN@EXAMPLE.COM" },
  { "id": 2, "first_name": "Jane", "last_name": "Smith", "email": "JANE@EXAMPLE.COM" }
]
