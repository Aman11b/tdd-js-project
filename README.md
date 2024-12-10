# Test-Driven Development (TDD) - JavaScript Functions

This project implements a series of JavaScript functions using Test-Driven Development (TDD). The functions are built incrementally based on their corresponding test cases. The goal is to practice the principles of TDD while implementing several common utility functions.

## Functions Implemented

### 1. **capitalize**
Capitalizes the first letter of a string.

### 2. **reverseString**
Reverses a given string.

### 3. **calculator**
An object that contains functions for basic arithmetic operations:
- `add`: Adds two numbers.
- `subtract`: Subtracts the second number from the first.
- `multiply`: Multiplies two numbers.
- `divide`: Divides the first number by the second.

### 4. **caesarCipher**
Implements the Caesar Cipher technique for text encryption:
- Shifts each letter of the string by a given number.
- Wraps around letters (e.g., 'z' becomes 'a').
- Preserves case (e.g., 'a' to 'b' but 'A' to 'B').
- Ignores punctuation and spaces.

### 5. **analyzeArray**
Analyzes an array of numbers and returns an object containing:
- `average`: The average of the numbers.
- `min`: The minimum value in the array.
- `max`: The maximum value in the array.
- `length`: The length of the array.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/your-repository.git
2. **Navigate to the project directory**:
    ```bash
    cd your-repository
3. **Install dependencies**: If you haven't already, you can install the project dependencies using npm:
    ```bash
    npm install
4. **Run tests**: To run the tests and ensure everything is working correctly, use:
    ```bash
    npm test
## Usage

All functions are tested using Jest. If you want to run a specific test file, you can use:

    npx jest path/to/testfile.js

## Contributing

Feel free to fork the repository, open an issue, or submit a pull request. Contributions are welcome!
