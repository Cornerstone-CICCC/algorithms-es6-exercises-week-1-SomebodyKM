/*
Wrap the code you've written in a function called loopy(range, multiples, words) that you call with 3 parameters.

range - should be an array of 2 numbers representing the start and end values for the loop.
multiples - should be an array of 2 numbers representing the multiples you want to replace with words.
words - should be an array of 2 strings representing the words that will replace the multiples.
For example, say we called the function with the following arguments.

loopy([15, 90], [2, 5], ["Batty", "Beacon"]);

The loopy function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".
*/

function loopy(range, multiples, words) {
    const min = range[0]
    const max = range[1]
    const multiples1 = multiples[0]
    const multiples2 = multiples[1]
    const word1 = words[0]
    const word2 = words[1]

    for (let i = min; i <= max; i++) {
        if (i % (multiples1 * multiples2) === 0) {
            console.log(word1 + word2)
        } else if (i % multiples1 === 0) {
            console.log(word1)
        } else if (i % multiples2 === 0) {
            console.log(word2)
        } else {
            console.log(i)
        }
    }
}

loopy([15, 90], [2, 5], ["Batty", "Beacon"])


