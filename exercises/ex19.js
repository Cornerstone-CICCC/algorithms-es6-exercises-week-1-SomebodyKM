/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/



function emotions(emotion, callback, count) {
    console.log(`I am ${emotion}, ${callback(count)}`)
}

emotions("happy", function (count) {
    let laughter = ""
    for (let i = 0; i < count; i++) {
        laughter += "ha"
    }
    return (`${laughter}!`)
}, 7)


