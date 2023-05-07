class Animal {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  animalDetails() {
    console.log(`this animal name is ${this.name}`);
  }
}
const animal = new Animal("dog", 25);
animal.animalDetails();
