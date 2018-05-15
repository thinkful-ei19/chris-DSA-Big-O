/*
Write a recursive function that prints the fibonacci sequence of a given number.
The fibonnaci sequence a series of numbers in which each number is the sum of the two preceding numbers.
For example the 7th fibonacci number in a fibonaci sequence is 13. The sequence looks as follows: 1 1 2 3 5 8 13.
*/

function fibonacci(number, arr=[]) {

    if (number === 0) {
        return;
    } else {
        if (arr.length < 2) {
            arr.push(1)
        } else {
            arr.push(arr[arr.length-1] + arr[arr.length-2])
        }
        number --
        fibonacci(number, arr)
    }
    console.log(arr)
    return arr
}

// fibonacci(7)

function fibonacciAlt(number) {
    let arr = []
    for (i=0; i < number; i++) {
        if (arr.length < 2) {
            arr.push(1)
        } else {
            arr.push(arr[arr.length-1] + arr[arr.length-2])
        }
    }
    console.log(arr)
    return arr
}

fibonacciAlt(7)