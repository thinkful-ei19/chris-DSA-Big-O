// Putting everything into one file for convenience.


// Even or odd
function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

/*
O(1)
It will only iterate through the argument once, figuring out if it is even or odd.
*/

//Are you here?
function areYouHere(arr1, arr2) {
    for (let i=0; i<arr1.length; i++) {
        const el1 = arr1[i];
        for (let j=0; j<arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

/*
O(n^2)
There is a nested loop inside a loop - This will iterate exponentially through each individual value and compare arr1[i] to all of arr2[j] before going to arr1[i+1]
*/

//Doubler
function doubleArrayValues(array) {
    for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

/*
O(n)
Iterates through each key in array and multiplies it.
*/

//Naive Search
function naiveSearch(array, item) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
/*
O(n)
Iterates through an array, if array[i] is item, returns it.
*/

//Creating pairs:
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
/*
O(n^2)
Nested loop within a loop - arr[i] will iterate through all of arr[j] before going on to arr[i+1]
*/

// Computing fibonaccis
/*
A fibonacci sequence is one where every number is the sum of the previous two numbers in the sequence.
For example the following is a fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34.
The first number always starts at 1 (technically it is 0).
Then the second number is 0+1 = 1, the third number is the sum of the first and the second numbers (1 + 2 = 3) and the sequence continues in a similar manner.

*/
//Here, we have a function generateFib that uses iteration to generate a fibonacci sequence. Determine its run time complexity in big O.

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
        result.push(result[i - 2] + result[i - 3]);
      }
    }
    // once the for loop finishes
    // we return `result`.
    return result;
}
/*
O(n) Iterates through each item in array once.
*/


//An Efficient Search
//In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above.
//Assume that the input array is always sorted.

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

/*
O(logn) the search starts in the middle of the array which is ordered numerically from lower to higher numbers, then iterates in the
direction it needs to to find the correct item number by determining whether the item number is lower or higher than the current iterated value.
*/

//Random element
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/*
O(1) gets one random number in the array, doesn't iterate through the array- just picks on single number out of it.
*/


//Is it prime?
function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

/*
O(n) - worst case scenario will be O(n)- if the number has to be compared to a loop of i. ((Best case scenario would be O(1).))
*/