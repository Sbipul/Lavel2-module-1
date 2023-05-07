class Human {
  constructor(
    public name: string,
    public profession: string,
    public age: number
  ) {
    this.name = name;
    this.profession = profession;
    this.age = age;
  }
  makeSleep(hour: number): string {
    return `This person name is ${this.name} and he sleeps ${hour} hour`;
  }
}
class Student extends Human {
  girlfriend: boolean;
  constructor(
    name: string,
    profession: string,
    age: number,
    girlfriend: boolean
  ) {
    super(name, profession, age);
    this.girlfriend = girlfriend;
  }
}
const studentDetails = new Student("Bipul chandro roy", "developer", 28, false);
const sleeping_time = studentDetails.makeSleep(5);
console.log(sleeping_time);
