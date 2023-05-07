class Human {
  constructor(public name: string, public profession: string) {
    this.name = name;
    this.profession = profession;
  }
  makeSleep(hour: number): string {
    return `this person sleep ${hour} hour`;
  }
}
// class Student extends Human {

// }
