/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function() {
        if (umbrella.isOpen === false) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = false;
            return "Julia opens the umbrella!";
        }
    }
};

console.log(umbrella.close());

/*
 * Programming Quiz: Menu Items (7-2)
 */

// your code goes here
var breakfast = {
    name: "The Lumberjack",
    price: "$9.95",
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};


/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function (){
        return 'Welcome!\n'+ 'Your balance is currently ' + '$' + this.balance + ' and your interest rate is ' + this.interestRatePercent + '%.';
    }
};

console.log(savingsAccount.printAccountSummary());


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


/*
 * Programming Quiz: Donuts Revisited (7-6)

 Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each

 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];
    donuts.forEach(function(donut){
        console.log(donut.type + " donuts cost $" + donut.cost + " each");
});

















