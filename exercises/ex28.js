/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/


const facebookProfile = {
    profileName: "Miya",
    numberOfFriends: 2,
    messagePosted: ["Hi", "Hello world"],
    postMessage: function newMessage(message) {
        this.messagePosted.push(message)
    },
    deleteMessage: function deleteMessage(index) {
        this.messagePosted.splice(index, 1)
    },
    addFriend: function () {
        this.numberOfFriends++
    },
    removeFriend: function () {
        this.numberOfFriends--
    }
}



console.log(facebookProfile.profileName)
console.log(facebookProfile.messagePosted)
facebookProfile.deleteMessage("Hi")
console.log(facebookProfile.messagePosted)
console.log("===================")
console.log(facebookProfile.numberOfFriends)
facebookProfile.addFriend()
console.log(facebookProfile.numberOfFriends)
facebookProfile.removeFriend()
console.log(facebookProfile.numberOfFriends)
