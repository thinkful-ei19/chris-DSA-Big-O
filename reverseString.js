/*
Write a function that reverses a string. 
Take a string as input, reverse the string, and return the new string.
*/

function reverseString(string, index = string.length, result = []) {
    if (index === 1) {
        index--
        console.log(string.slice(index, index + 1))
        result.push(string.slice(index, index + 1))
    } else {
        index--
        console.log(string.slice(index, index + 1))
        result.push(string.slice(index, index + 1))
        return reverseString(string, index, result)
    }
    console.log(result.join(''))
    return result.join('')
}

reverseString('string')

function reverseStringAlt(string) {
    console.log(string.split('').reverse().join(''))
    return string.split('').reverse().join('')
}

reverseStringAlt('string')