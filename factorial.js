/*
Write a recursive function that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number between itself and one.
The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
*/

function factorial(number, arr=[]) {

    arr.push(number)
    number--
    if (number === 0) {
        console.log(arr.reduce((a, b) => a + b))
        return arr.reduce((a, b) => a + b)
    } else {
        factorial(number, arr)
    }
}

// factorial(5)

function factorialAlt(number) {
    let arr = []
    for (i=1; i<=number; i++) {
        arr.push(i)
    }
    console.log(arr.reduce((a, b) => a + b))
    return arr.reduce((a, b) => a + b)
}

factorialAlt(5)