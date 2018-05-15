/*
An anagram is any word or phrase that exactly reproduces the letters in another order.
Write a function that creates an anagram (listing all the rearrangements of a word) of a given word.
For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, and non-words like tsae.

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words.
For example, given east, use e as a prefix and you would place e in front of all six permutations of ast — ast, ats, sat, sta, tas, and tsa.
This will give you the words east, eats, esat, esta, etas, and etsa. Continue this way until you find all the anagrams for east. There should be 24 of them.
*/

/*
    Set a counter i to 0
    Until i === n, generate (n-1) permutations of the first n-1 elements adjoining the last element to each.
    Then if n is odd, switch the first element and the last one.
    If n is even, switch the ith element and the last one
    Increment i++ and repeat
*/

/*
This recursive function has a worst case scenario of O(n)
It performs exactly as many iterations as necessary for each permutation using Heap's Algorithm
*/

function anagrams(string, arr=string.split(''), n = arr.length) {

    if (n === 1) {
        count ++
        console.log(arr, count)
    }
    else {
        for (let i = 0; i < n - 1; i++) {
            anagrams(string, arr, n-1, count)
            if (n % 2 === 0) {
                let placeholder = arr[i]
                arr[i] = arr[n-1]
                arr[n-1] = placeholder
            } else {
                let placeholder = arr[0]
                arr[0] = arr[n-1]
                arr[n-1] = placeholder
            }
        }
        anagrams(string, arr, n - 1, count)
    }
}

// let count = 0
// anagrams('a')
// count = 0
// anagrams('to')
count = 0
anagrams('toe')
// count = 0
// anagrams('east')
// count = 0
// anagrams('north')
// count = 0
// anagrams('fourteen')

function anagramsAlt(string) {
    let arr = string.split('')
    let arr2 = []
    let n = arr.length
    let count = 0;

    //Populate arr2
    for (let i = 0; i < n; i++) {
        arr2.push(0)
    }

    count ++
    console.log(arr, count)

    let e = 0;
    while (e < n) {
        if (arr2[e] < e) {
            if (e % 2 === 0) {
                let placeholder = arr[0]
                arr[0] = arr[e]
                arr[e] = placeholder
            } else {
                // arr[arr2[e]], arr[e]
                let placeholder = arr[arr2[e]]
                arr[arr2[e]] = arr[e]
                arr[e] = placeholder
            }
            count ++
            console.log(arr, count)
            arr2[e]++
            e = 0
        } else {
            arr2[e] = 0
            e++
        }
    }
}

// anagramsAlt('a')
// anagramsAlt('to')
// anagramsAlt('toe')
// anagramsAlt('east')
// anagramsAlt('north')
// anagramsAlt('fourteen')
