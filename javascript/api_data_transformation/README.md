# API Data Transformation Challenge  

## 1. Problem Statement
You are given an array of user objects returned from an API. The data includes `first_name`, `last_name`, and `email`, but we need to transform it into a more useful format.

### Instructions

#### The function should:
Combine first_name and last_name into fullName
Convert email to lowercase
Return the transformed array
Export the function to allow testing.

#### **Input Example**
```json
[
  { "id": 1, "first_name": "John", "last_name": "Doe", "email": "JOHN@EXAMPLE.COM" },
  { "id": 2, "first_name": "Jane", "last_name": "Smith", "email": "JANE@EXAMPLE.COM" }
]
```
## 2. Problem Statement
Create a function that will take an array of users and return a new array where each user object includes a unique id. The id should be based on the index of the user in the array (starting from 1).

#### **Input Example**

```json

 [
  { "first_name": "John", "last_name": "Doe", "email": "john.doe@email.com" },
  { "first_name": "Jane", "last_name": "Smith", "email": "jane.smith@work.com" },
  { "first_name": "Alice", "last_name": "Johnson", "email": "alice.johnson@email.com" }
];

```
#### **Output Example**

```json
[
  { "first_name": "John", "last_name": "Doe", "email": "john.doe@email.com", "id": 1 },
  { "first_name": "Jane", "last_name": "Smith","email": "jane.smith@work.com", "id": 2 },
  { "first_name": "Alice", "last_name": "Johnson", "email": "alice.johnson@email.com", "id": 3 }
]


```

