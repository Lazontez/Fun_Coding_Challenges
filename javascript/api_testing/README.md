# Fetch Post Title Challenge

## Problem Statement
Write an asynchronous function `fetchPostTitle` that fetches data from the following public API endpoint:

```
https://jsonplaceholder.typicode.com/posts/1
```

Your function should:
- Send a **GET** request to the endpoint.
- Verify that the response status is **200**.
- Parse the response as JSON.
- Validate that the JSON object contains the keys: `userId`, `id`, `title`, and `body`.
- If all keys are present, return the value of the `title` property.
- If any key is missing or the response status is not 200, throw an appropriate error.

## Requirements
- Use **async/await** for asynchronous operations.
- Use proper error handling with **try/catch**.
- Validate the JSON response before returning the title.
- Ensure that the function returns the post title if validations pass.

## Example Input & Output

### Example Input
The function does not require any parameters since it uses the fixed URL.

### Example JSON Response from the API
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum..."
}
```

### Expected Output
The function should return:
```
"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
```

