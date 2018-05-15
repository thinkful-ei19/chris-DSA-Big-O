/*
Write a recursive function that counts how many sheep jumps over the fence.
Your program should take a number as an input. That number should be the number of sheep you have.
The function should display the number along with the message "Another sheep jump over the fence" until no more sheep are left.

Input: 3
Output:
3 - Another sheep jump over the fence
2 - Another sheep jump over the fence
1 - Another sheep jump over the fence

*/

function countingSheep(sheep) {
    if (sheep === 1) {
        return "Last sheep jumping over the fence: " + sheep
    } else {
        console.log("Another sheep jumps over the fence: " + sheep + " sheep remaining")
        return countingSheep(sheep - 1)
    }
}

console.log(countingSheep(5))

function countingSheepAlt(sheep) {
    for (let i = sheep; i > 0; i--) {
        console.log("Another sheep jumps over the fence: " + sheep + " sheep remaining")
        sheep--
    }
    return sheep + " sheep remaining"
}

console.log(countingSheepAlt(5))