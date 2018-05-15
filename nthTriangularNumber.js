/*
Calculates the nth triangular number. A triangular number counts the objects that can form an equilateral triangle.
The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n.
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
*/

function nthTriangularNumber(number, add = 0, sum = 0) {
    if (number === 0) {
        console.log(sum)
        return sum;
    } else {
        console.log(sum)
        add++
        sum += add
        number --
        return nthTriangularNumber(number, add, sum)
    }
}

nthTriangularNumber(9)
nthTriangularNumber(15)

function nthTriangularNumberAlt(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i
        console.log(sum)
    }
    return sum
}

nthTriangularNumberAlt(9)
nthTriangularNumberAlt(15)