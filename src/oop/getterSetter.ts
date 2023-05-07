class Idcard {
  readonly name: string;
  private _id: number;
  address: string;
  private _nationality: boolean;
  mark: number;
  constructor(
    name: string,
    _id: number,
    address: string,
    _nationality: boolean,
    mark: number
  ) {
    this.name = name;
    this._id = _id;
    this.address = address;
    this._nationality = _nationality;
    this.mark = mark;
  }
  set updateNationality(newNation: boolean) {
    this._nationality = newNation;
  }
  get nationality(): boolean {
    return this._nationality;
  }
  getDetails() {
    console.log(
      `my name is ${this.name} and my id is ${this._id} and i live in ${this.address} and my nationality is ${this._nationality}`
    );
  }
  addMark(marks: number): number {
    return this.mark + marks;
  }
}

const myid = new Idcard("Bipul chandro roy", 2301028001, "Dhaka", true, 50);
console.log(myid.addMark(5));
myid.updateNationality = false;
myid.getDetails();
