/*
Split a string based upon a separator (similar to String.prototype.split).
*/

function stringSplitter(string, splitter, index=0, arr=[]) {

    if (string[index] === splitter) {
        arr[0] = string.slice(0, index)
        arr[1] = string.slice(index + 1)
        console.log(arr)
        return arr
    } 
    else if (index > string.length) {
        console.log('Unable to split')
        return null
    }
    else {
        index++
        stringSplitter(string, splitter, index, arr)
    }
}

// stringSplitter('string', 'r')
// stringSplitter('string', 'i')
// stringSplitter('string', 'z')

function stringSplitterAlt(string, splitter){
    console.log(string.split(splitter))
    return string.split(splitter)
}

stringSplitterAlt('string', 'r')
stringSplitterAlt('string', 'i')
stringSplitterAlt('string', 'z')