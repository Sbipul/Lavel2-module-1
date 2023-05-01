type About = {
  name: string;
  age?: number;
  job: string;
};
const man: About = {
  name: "mithun",
  age: 27,
  job: "engineer",
};
const woman: About = {
  name: "sakila",
  job: "developer",
};
type CheckMarried = boolean;
const isMaried: CheckMarried = false;
const calculate = (
  num1: number,
  num2: number,
  operation: (x: number, y: number) => number
) => {
  return operation;
};
calculate(4, 5, (x, y) => x + y);

//type intersection
type Noob = {
  name: string;
  age: number;
};
type Mid = {
  gf: boolean;
};
type Pro =
  | Noob
  | (Mid & {
      job: string;
    });
const newDev: Pro = {
  name: "bipul",
  age: 28,
  gf: true,
  job: "yes",
};
function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));
