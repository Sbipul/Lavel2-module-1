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
    console.log(operation);
    return operation;
};
calculate(4, 5, (x, y) => x + y);
