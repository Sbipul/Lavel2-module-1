"use strict";
class Human {
    constructor(name, profession, age) {
        this.name = name;
        this.profession = profession;
        this.age = age;
        this.name = name;
        this.profession = profession;
        this.age = age;
    }
    makeSleep(hour) {
        return `This person name is ${this.name} and he sleeps ${hour} hour`;
    }
}
class Student extends Human {
    constructor(name, profession, age, girlfriend) {
        super(name, profession, age);
        this.girlfriend = girlfriend;
    }
}
const studentDetails = new Student("Bipul chandro roy", "developer", 28, false);
const sleeping_time = studentDetails.makeSleep(5);
console.log(sleeping_time);
