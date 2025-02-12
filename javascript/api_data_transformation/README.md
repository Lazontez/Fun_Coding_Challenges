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
# **Filter and Transform Active Users Challenge**

## ** 3. Problem Statement**
This challenge involves processing an array of user objects by:

1. **Filtering** the list to include only users who have `isActive === true`.
2. **Transforming** each remaining user object to include:
   - `userId`: The original `id`
   - `fullName`: The `name` in **uppercase**
   - `contact`: The `email` in **lowercase**
3. **(Bonus)** Sorting the filtered users alphabetically by `fullName`.

---

## **Example**
### **Input:**
```javascript
const users = [
  { id: 1, name: "Alice Johnson", email: "Alice@Example.com", isActive: true },
  { id: 2, name: "Bob Smith", email: "BOB@Example.com", isActive: false },
  { id: 3, name: "Charlie Brown", email: "Charlie@Example.com", isActive: true }
];
```
### **Expected Output:**
```javascript
[
  { userId: 1, fullName: "ALICE JOHNSON", contact: "alice@example.com" },
  { userId: 3, fullName: "CHARLIE BROWN", contact: "charlie@example.com" }
]
```

---

## **Requirements**
- Use **`filter()`** to remove inactive users.
- Use **`map()`** to transform the data structure.
- *(Bonus)* Use **`sort()`** to order users alphabetically by `fullName`.





