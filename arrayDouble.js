/*
Write a function that takes an array as input which contains an unknown set of numbers, 
and outputs an array with each input value doubled. Test your solution by trying a handful of different arrays. 

For example,

Input: [1, 2, 3]
Output: [2, 4, 6]
*/

function arrayDouble(array, index = 0) {
    if (index === (array.length - 1)) {
        array[index] = array[index] * 2
        console.log(array)
    } else {
        array[index] = array[index] * 2
        index ++
        return arrayDouble(array, index)
    }
}

arrayDouble([1, 2, 3])
arrayDouble([1, 5, 2, 1, 8, 12])

function arrayDoubleAlt(array) {
    const result = array.map(function(number) {
        return number * 2
    })
    console.log(result)
    return result
}

arrayDoubleAlt([1, 2, 3])
arrayDoubleAlt([1, 5, 2, 1, 8, 12])