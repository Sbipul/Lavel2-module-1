class Man {
  takeBreak() {
    console.log("please take a break for 5 hour");
  }
}
class Son extends Man {
  takeBreak(): void {
    console.log("I am a studen i need 8 hour sleep");
  }
}
class Devs extends Man {
  takeBreak(): void {
    console.log("i am dev i have no break");
  }
}
function getNap(prm: Man) {
  prm.takeBreak();
}
const person1 = new Man();
const person5 = new Son();
const person3 = new Devs();
getNap(person1);
getNap(person5);
getNap(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}
function writeArea(pram: Shape) {
  console.log(pram.getArea());
}
writeArea(new Circle(5));
writeArea(new Rectangle(5, 5));
