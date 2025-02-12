
// 1. Transform Data
export function transformData(users) {
      // Users Validation of being a array
    if (!Array.isArray(users)) {
        throw new Error("Expected an array of users");
    }
    // Users Validation of being a array of objects
    if (users.some(user => typeof user !== 'object' || user === null)) {
        throw new Error("Expected an array of objects");
    }
    return users.map(user => ({
        fullName: `${user.first_name.toUpperCase()} ${user.last_name.toUpperCase()}`,
        email: user.email.toLowerCase()
    }));
}

// 2. Append Id
export function appendId(users){
      // Users Validation of being a array
    if (!Array.isArray(users)) {
        throw new TypeError("Expected an array of users");
    }
    // Users Validation of being a array of objects
    if (users.some(user => typeof user !== 'object' || user === null)) {
        throw new TypeError("Expected an array of objects");
    }

    return users.map((user , i) =>({
        ...user,
        id: i + 1
    }))

}
// 3. Filter Active Users
export default function filterActive(users) {
    // Users Validation of being an array
    if (!Array.isArray(users)) {
        throw new TypeError(`We expected an array, instead received ${typeof users}`);
    }

    // Users Validation of being an array of objects
    if (users.some(user => typeof user !== 'object' || user === null)) {
        throw new TypeError('We expected an array of objects');
    }

    return users
        .filter(user => user.isActive === true)
        .map(user => ({
            fullName: `${user.name.toUpperCase()}`,
            email: user.email.toLowerCase()
        }));
}



