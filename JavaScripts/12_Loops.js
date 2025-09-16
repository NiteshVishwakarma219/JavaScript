// Loops

// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // This will log numbers 0, 1, 2, 3, 4
}

// 2. while loop
let j = 0;
while (j < 5) {
    console.log(j); // This will log numbers 0, 1, 2, 3, 4
    j++;
}

// 3. do-while loop
let k = 0;
do {
    console.log(k); // This will log numbers 0, 1, 2, 3, 4
    k++;
} while (k < 5);

/* ##################################################################################### */

// 4. for...of loop -> used in string and array
let array = [1, 2, 3, 4, 5];
for (let value of array) {
    console.log(value); // This will log numbers 1, 2, 3, 4, 5
}

// 5. for...in loop --> used in object
let object = { a: 1, b: 2, c: 3 };
for (let key in object) {
    console.log(key, object[key]); // This will log key-value pairs
}

// 6. Nested loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(i, j); // This will log pairs of i and j
    }
}

// 7. Breaking out of loops
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i); // This will log numbers 0, 1, 2
}

// 8. Continuing to the next iteration
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i); // This will log numbers 0, 1, 2, 4
}