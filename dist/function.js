"use strict";
function add(num1, num2) {
    return num1 + num2;
}
const result = add(5, 8);
const addNum = (num1, num2) => num1 + num2;
console.log(result, addNum);
const arrNum = [1, 4, 5, 8, 6, 8];
arrNum.map((item) => item * item);
const person = {
    name: "Bipul Chandro Roy",
    balance: 5,
    addMoney(tk) {
        return this.balance + tk;
    },
    console(tk) {
        console.log(this.balance + tk);
    },
};
// spread operator
const myFriends = ["mithun"];
const newFriends = ["rabbi"];
myFriends.push(...newFriends);
console.log(myFriends);
//npx ts-node-dev src/function.ts
// rest operator
const allFriends = (...friends) => friends.forEach((friend) => console.log(friend));
allFriends("atiq", "emon");
// array & object destructuring
const [bestFriend] = myFriends;
console.log(bestFriend);
const person2 = {
    name: "Bipul",
    age: 27,
};
const { name: myname } = person2;
console.log("my name is--->", myname);
