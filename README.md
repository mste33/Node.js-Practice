# Node.js Practice
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/mste33/Node.js-Practice)

This repository contains a collection of Node.js exercises designed to practice various concepts, including server creation, request handling, form processing, cookie management, and basic JavaScript utility functions.

## Exercises

### Exercise 1: Node.js Functions

This exercise implements a web server using Express.js that exposes several utility functions through different API endpoints. An HTML frontend (`exercise1.html`) is provided to interact with these functions.

**Functionality:**

*   **Find Summation (`/findSummation`)**:
    *   Accepts a positive integer `n`.
    *   Calculates the sum of all positive integers from 1 to `n`.
    *   Returns `false` if the input is not a positive integer.
*   **Uppercase First and Last Letters (`/uppercaseFirstandLast`)**:
    *   Accepts a string.
    *   Capitalizes the first and last letter of each word in the string.
*   **Find Average and Median (`/findAverageAndMedian`)**:
    *   Accepts a comma-separated list of numbers.
    *   Calculates the average and median of the provided numbers.
*   **Find Four-Digit Number (`/find4Digits`)**:
    *   Accepts a string of numbers separated by spaces.
    *   Returns the first four-digit number found in the string, or `false` if none exists.

**Running the Exercise:**

1.  Navigate to the `Exercise1` directory:
    ```bash
    cd Exercise1
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm start
    ```
4.  Open your web browser and go to `http://localhost:3000` to access the functions via the HTML interface.

### Exercise 2: Number of Visits Counter

This exercise implements a simple HTTP server that tracks and displays the number of times a user has visited the webpage. It uses cookies to store the visit count and the timestamp of the last visit.

**Functionality:**

*   On the first visit, it displays a welcome message.
*   On subsequent visits, it displays:
    *   The current visit count (e.g., "Hello, this is the 2nd time that you are visiting my webpage").
    *   The date and time of the previous visit.

**Running the Exercise:**

1.  Navigate to the `Exercise2` directory:
    ```bash
    cd Exercise2
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm start
    ```
4.  Open your web browser and go to `http://localhost:3000`. Refresh the page to see the visit count and last visit time update.

### Exercise 3: Phone Number Checker

This exercise uses Express.js to create a web application that checks if a submitted phone number adheres to a specific format (`123-456-7890`).

**Functionality:**

*   Provides an HTML form (`exercise3.html`) to input a name and a phone number.
*   Upon submission (`POST /check`):
    *   Validates if the phone number matches the `XXX-XXX-XXXX` format.
    *   Displays a success message with the user's name and phone number if the format is correct.
    *   Displays an error message if the format is incorrect, guiding the user to use the correct format.

**Running the Exercise:**

1.  Navigate to the `Exercise3` directory:
    ```bash
    cd Exercise3
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm start
    ```
4.  Open your web browser and go to `http://localhost:3000` to access the phone number checker form.
