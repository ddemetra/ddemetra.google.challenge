/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Demetra",
    friends: 2,
    messages: ["Cheers from New York City."],
    
    postMessage: function postMessage(message) {
        return facebookProfile.messages.push(message);
},
    deleteMessage: function deleteMessage(index) {
        return facebookProfile.messages.splice(index, 1);
    },
    addFriend: function add() {
        return facebookProfile.friends++;
    },
    removeFriend: function del() {
        return facebookProfile.friends--;
    }
};

facebookProfile.addFriend();
console.log(facebookProfile.friends);
facebookProfile.postMessage("Cheers from New York City.");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);
