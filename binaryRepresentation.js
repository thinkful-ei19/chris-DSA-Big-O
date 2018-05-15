/*
Write a recursive function that prints out the binary representation of a given number. 
For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. 
Note that the binary representation of 0 should be 0.
*/

function binaryRepresentation(number, arr = null) {

    //1, 2, 4, 8, 16, 32, 64, 128
    let currentBinary = 0
    let i = 1
    while (i*2 <= number) {
        if (i === 1) {
            i = 2
        } else {
            i = i * 2
        }
        currentBinary++
    }

    //Because fill is not working...
    if (!arr) {
        arr = []
        for (e = 0; e < currentBinary; e++) {
            arr.push(0)
        }
    }

    if (number === 1) {
        arr[0] = 1;
        // arr.fill(0, 0, currentBinary)
        console.log(arr.reverse().join(''))
        return arr.reverse().join('');
    } else if (number === 0) {
        // arr.fill(0, 0, currentBinary)
        console.log(arr.reverse().join(''))
        return arr.reverse().join('')
    } else {
        // arr.fill(0, 0, currentBinary)
        number = number - i
        arr[currentBinary] = 1
        binaryRepresentation(number, arr)
    }
}

// binaryRepresentation(16)
// binaryRepresentation(17)
// binaryRepresentation(56)

function binaryRepresentationAlt(number) {

    let currentBinary = 0
    let i = 1
    while (i*2 <= number) {
        if (i === 1) {
            i = 2
        } else {
            i = i * 2
        }
        currentBinary++
    }

    let arr = [];

    for (e = 0; e < currentBinary; e++) {
        arr.push(0);
    }

    while (number !== 0) {
        //If number is greater than i
        if (number >= i) {
            number = number - i
            arr[currentBinary] = 1
        //If number is less than i, divide i
        } else if (i !== 1) {
            i = i / 2
            currentBinary = currentBinary - 1
        //i is equal if one, set the last array variable
        } else {
            if (number === 1) {
                arr[0] = 1
                number--
            }
        }
    }

    console.log(i, arr.reverse().join(''))
    return arr.reverse().join('')

}

binaryRepresentationAlt(16)
binaryRepresentationAlt(17)
binaryRepresentationAlt(56)


