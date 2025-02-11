export function transformData(users) {
    if (!Array.isArray(users)) {
        throw new Error("Expected an array of users");
    }

    if (users.some(user => typeof user !== 'object' || user === null)) {
        throw new Error("Expected an array of objects");
    }

    return users.map(user => ({
        fullName: `${user.first_name.toUpperCase()} ${user.last_name.toUpperCase()}`,
        email: user.email.toLowerCase()
    }));
}

