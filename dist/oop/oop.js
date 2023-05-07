"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    animalDetails() {
        console.log(`this animal name is ${this.name}`);
    }
}
const animal = new Animal("dog", 25);
animal.animalDetails;
