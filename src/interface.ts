interface HumanInterface {
  name: string;
  age: number;
}
interface ExtendeHuman extends HumanInterface {
  married: boolean;
  job: string;
}
const human: ExtendeHuman = {
  name: "Bipul chandro roy",
  age: 27,
  married: false,
  job: "yes",
};
