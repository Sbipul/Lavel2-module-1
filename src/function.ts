function add(num1: number, num2: number): number {
  return num1 + num2;
}
const result = add(5, 8);
const addNum = (num1: number, num2: number): number => num1 + num2;
console.log(result, addNum);
const arrNum: number[] = [1, 4, 5, 8, 6, 8];
arrNum.map((item: number) => item * item);
const person: {
  name: string;
  balance: number;
  addMoney(tk: number): number;
  console(tk: number): void;
} = {
  name: "Bipul Chandro Roy",
  balance: 5,
  addMoney(tk: number) {
    return this.balance + tk;
  },
  console(tk: number) {
    console.log(this.balance + tk);
  },
};
