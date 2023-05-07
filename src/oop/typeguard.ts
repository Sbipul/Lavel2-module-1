//keyof guard
type Alphanumeric = string | number;
function add(numa: Alphanumeric, numb: Alphanumeric): Alphanumeric {
  if (typeof numa === "number" && typeof numb === "number") {
    return numa + numb;
  } else {
    return numa.toString() + numb.toString();
  }
}
add(2, 6);
add("5", "9");

// in guard
type NormalUserType = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "admin";
};
function getUser(user: NormalUserType | AdminUser) {
  if ("role" in user) {
    return `This is admin`;
  } else {
    return `This user`;
  }
}
const normalUser: NormalUserType = {
  name: "Bipul chandro roy",
};
const adminUser: AdminUser = {
  name: "Snigdha roy",
  role: "admin",
};
console.log(getUser(normalUser));
console.log(getUser(adminUser));
// instance of guard
class Animals {
  name: string;
  bark: string;
  leg: number;
  constructor(name: string, bark: string, leg: number) {
    this.name = name;
    this.bark = bark;
    this.leg = leg;
  }
  details() {
    console.log(
      `this animal is ${this.name} and it has ${this.leg} and it barks like ${this.bark}`
    );
  }
}

class Dog extends Animals {
  constructor(name: string, bark: string, leg: number) {
    super(name, bark, leg);
  }
  seeDogOwner() {
    console.log("Bipul chandro roy");
  }
}
class Cat extends Animals {
  constructor(name: string, bark: string, leg: number) {
    super(name, bark, leg);
  }
  seeDogSeller() {
    console.log("Snigdha roy");
  }
}
// instance guard
function checkDogInstance(animal: Animals): animal is Dog {
  return animal instanceof Dog;
}
function checkCatInstance(animal: Animals): animal is Cat {
  return animal instanceof Cat;
}
function getAnimal(obj: Animals) {
  if (checkDogInstance(obj)) {
    obj.seeDogOwner();
  } else if (checkCatInstance(obj)) {
    obj.seeDogSeller();
  } else {
    obj.details();
  }
}
const catDetails = new Cat("purnata", "mew", 4);
const dogDetails = new Dog("jerry", "Ghew", 4);
getAnimal(dogDetails);
getAnimal(catDetails);
