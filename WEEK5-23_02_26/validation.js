const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function validateUser(name, age, email) {

    // Name Validation
    if (name.trim() === "") {
        console.log("Name cannot be empty!");
        return;
    }
    if (!/^[A-Za-z\s]+$/.test(name)) {
        console.log("Name must contain only alphabets!");
        return;
    }

    // Age Validation
    if (age.trim() === "") {
        console.log("Age cannot be empty!");
        return;
    }
    if (isNaN(age)) {
        console.log("Age must be a number!");
        return;
    }
    age = Number(age);
    if (age < 18 || age > 60) {
        console.log("Age must be between 18 and 60!");
        return;
    }

    // Email Validation
    if (email.trim() === "") {
        console.log("Email cannot be empty!");
        return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        console.log("Invalid Email Format!");
        return;
    }

    console.log("\nAll validations passed successfully!");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Email: " + email);

    rl.close();
}

rl.question("Enter Name: ", function(name) {
    rl.question("Enter Age: ", function(age) {
        rl.question("Enter Email: ", function(email) {
            validateUser(name, age, email);
        });
    });
});