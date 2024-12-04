# Unexpected NaN with undefined parameter in JavaScript function

This bug demonstrates unexpected behavior when using `undefined` and `null` as parameters in a JavaScript function. Specifically, when the first parameter is `undefined`, the addition operation (`+`) results in `NaN`, while using `null` produces an unexpected numerical result.

## Bug Description
The function `foo` takes two parameters and returns their sum. However, when calling `foo` with `undefined` as the first parameter, the result is `NaN`. When using `null` as the first parameter the result is 5. This is unexpected and can lead to hidden bugs.

## Reproduction
1. Run the code in `bug.js`.
2. Observe the output of `console.log()`.

## Solution
The provided solution in `bugSolution.js` addresses this issue by using strict equality checks to explicitly handle `undefined` and `null` parameters, preventing unexpected behavior.  This ensure consistent and expected results. 