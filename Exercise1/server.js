const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// A) Function: findSummation
// Parameter(s): A positive integer number (default value is 1)
// Description: Given the input positive number (N), find the summation of all
// positive integer numbers from 1 to N (1+2+3+...+N) and return this summation.
// If the input parameter is not a number or if it is not a positive number, return false.
function findSummation(n = 1) {
    // Convert input to number
    const num = Number(n);
    
    // Check if input is a letter (using regex to check if it's a string containing only letters)
    if (typeof n === 'string' && /^[a-zA-Z]+$/.test(n)) {
        return false;
    }
    
    // Check if input is valid (must be a positive integer)
    if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
        return false;
    }
    
    // Calculate sum using a loop
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

// B) Function: uppercaseFirstandLast
// Parameter(s): String
// Description: For each word in the input string, capitalize (uppercase) both
// the first letter and the last letter, and return the modified string.
function uppercaseFirstandLast(str = '') {
    // Check if input is empty or not a string
    if (typeof str !== 'string' || str.trim() === '') {
        return 'Please enter a valid string';
    }

    // Split the string into words
    return str.split(' ').map(word => {
        if (word.length === 1) {
            // If word is a single character, uppercase it
            return word.toUpperCase();
        } else if (word.length > 1) {
            // Get first and last letters
            const first = word[0].toUpperCase();
            const middle = word.slice(1, -1);
            const last = word[word.length - 1].toUpperCase();
            return first + middle + last;
        }
        return word; // Return empty words as is
    }).join(' ');
}

// C) Function: findAverageAndMedian
// Parameter: An array of numbers.
// Description: Calculate the average and median of the numbers and return both values.
function findAverageAndMedian(numbers) {
    // Convert string of numbers to array
    let numArray = [];
    for (let i = 0; i < numbers.length; i++) {
        let num = Number(numbers[i]);
        if (!isNaN(num)) {
            numArray.push(num);
        }
    }

    // Check if we have any valid numbers
    if (numArray.length === 0) {
        return "Please enter valid numbers";
    }

    // Calculate average
    let sum = 0;
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    let average = sum / numArray.length;

    // Calculate median
    for (let i = 0; i < numArray.length - 1; i++) {
        for (let j = 0; j < numArray.length - i - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                // Swap numbers
                let temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }

    let median;
    let middle = Math.floor(numArray.length / 2);
    
    if (numArray.length % 2 === 0) {
        median = (numArray[middle - 1] + numArray[middle]) / 2;
    } else {
        median = numArray[middle];
    }

    return "Average: " + average.toFixed(2) + ", Median: " + median.toFixed(2);
}

// D) Function: find4Digits
// Parameter: A string of numbers separated by spaces.
// Description: Return the first four-digit number in the string; return false if none.
function find4Digits(str = '') {
    if (typeof str !== 'string' || str.trim() === '') {
        return false;
    }

    // Split the string by spaces
    let numbers = str.split(' ');

    for (let i = 0; i < numbers.length; i++) {
        let num = Number(numbers[i]);
        if (!isNaN(num) && num >= 1000 && num <= 9999) {
            return num;
        }
    }

    // If no four-digit number is found
    return false;
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'exercise1.html'));
});

app.get('/findSummation', (req, res) => {
    const n = req.query.n || 1;
    const result = findSummation(n);
    
    if (result === false) {
        res.send('False: Please enter a positive integer ');
    } else {
        res.send(`The sum of numbers from 1 to ${n} is: ${result}`);
    }
});

app.get('/uppercaseFirstandLast', (req, res) => {
    const text = req.query.text || '';
    const result = uppercaseFirstandLast(text);
    res.send(`Result: ${result}`);
});

app.get('/findAverageAndMedian', (req, res) => {
    const numbers = req.query.numbers ? req.query.numbers.split(',') : [];
    const result = findAverageAndMedian(numbers);
    res.send(result);
});

app.get('/find4Digits', (req, res) => {
    const text = req.query.text || '';
    const result = find4Digits(text);
    
    if (result === false) {
        res.send('No four-digit number found in the input.');
    } else {
        res.send(`First four-digit number found: ${result}`);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 