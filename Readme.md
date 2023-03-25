# Get Big O Notation Function

This JavaScript function getBigONotation(code) accepts a string of JavaScript code as an argument and returns the Big O notation of the code's time complexity based on the number of loop statements present in the code.

## How it Works

The function uses a regular expression to find all loop statements (for, while, do-while, forEach, map, and filter) in the code, and then counts the number of loop statements found. If there are no loops in the code, it returns O(1) because the code runs in constant time. If there is only one loop in the code, it returns O(n) because the code runs in linear time (i.e., the number of operations increases linearly with the input size). If there are multiple loops in the code, it returns O(n^k) where k is the number of loops because the code runs in polynomial time (i.e., the number of operations increases exponentially with the input size).

## How to Use

To use this function, simply call it with a string of JavaScript code as the argument. The function will return a string with the appropriate Big O notation.

## Example

```
const code1 = "let sum = 0; for (let i = 0; i < n; i++) { sum += i; }";
console.log(getBigONotation(code1)); // Output: O(n)

const code2 = "let product = 1; for (let i = 1; i <= n; i++) { product *= i; }";
console.log(getBigONotation(code2)); // Output: O(n)

const code3 = "let result = arr.filter(x => x % 2 === 0).map(x => x * 2);";
console.log(getBigONotation(code3)); // Output: O(n^2)
```

## Demo

Try it here https://jsfiddle.net/cghbfpL6/

## Limitations

Please note that this function only considers the number of loops in the code and does not take into account other factors that may affect the code's time complexity, such as recursion, nested loops, and conditional statements. Therefore, it should be used as a tool to estimate the time complexity of a code snippet and not as an absolute measure of its performance.

# License

The getBigONotation function is released under the MIT license.