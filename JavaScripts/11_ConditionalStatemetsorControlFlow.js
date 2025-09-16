// Conditional Statements

// 1. if statement
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// 2. if-else statement
let age1 = 16;
if (age1 >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// 3. if-else if-else statement
let age2 = 20;
if (age2 < 18) {
    console.log("You are not eligible to vote.");
} else if (age2 === 18) {
    console.log("You just became eligible to vote.");
} else {
    console.log("You are eligible to vote.");
}

// 4. switch statement
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("You chose a banana.");
        break;
    case "apple":
        console.log("You chose an apple.");
        break;
    default:
        console.log("Unknown fruit.");
}

// 5. Ternary operator
let age3 = 19;
let eligibility = (age3 >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(eligibility);

// 6. Nested if statement
let age4 = 22;
if (age4 >= 18) {
    console.log("You are eligible to vote.");
    if (age4 === 18) {
        console.log("You just became eligible to vote.");
    }
} else {
    console.log("You are not eligible to vote.");
}

// 7. Logical operators
let age5 = 25;
if (age5 >= 18 && age5 < 65) {
    console.log("You are eligible to vote and work.");
} else {
    console.log("You are either not eligible to vote or work.");
}

// 8. Short-circuit evaluation
let isLoggedIn = true;
let hasPermission = false;
if (isLoggedIn && hasPermission) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

// 9. Nullish coalescing operator
let user = {
    name: "Alice",
    age: 25
};
let userName = user.name ?? "Guest";
console.log(userName);

// 10. Optional chaining
let user2 = {
    name: "Bob",
    address: {
        age:24
    }
};
let userCity = user2.address?.city ?? "Unknown";
console.log(userCity);

// Break statement
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i); // This will log numbers 0, 1, 2
}

// Continue with the next iteration
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);  // This will log numbers 0, 1, 2, 4
}