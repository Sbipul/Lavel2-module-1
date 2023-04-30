const names: string[] = ["bipul", "mithun", "rabbi"];
const couple: [string, number] = ["Bipul", 2301028001];
const user: {
  readonly name: string;
  roll: number;
  gf: boolean;
  wife?: boolean;
} = {
  name: "Bipul",
  roll: 2301028001,
  gf: true,
  wife: false,
};
const arr: number[] = [4, 5, 8];
const newArray = arr.map((item: number) => item * item);
