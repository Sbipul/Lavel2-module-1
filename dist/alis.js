"use strict";
const man = {
    name: "mithun",
    age: 27,
    job: "engineer",
};
const woman = {
    name: "sakila",
    job: "developer",
};
const isMaried = false;
const calculate = (num1, num2, operation) => {
    return operation;
};
calculate(4, 5, (x, y) => x + y);
const newDev = {
    name: "bipul",
    age: 28,
    gf: true,
    job: "yes",
};
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
