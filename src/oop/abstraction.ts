interface IVehicle {
  name: string;
  model: string;
}
// const vehicla: IVehicle = {
//   name: "BMW",
//   model: "500",
// };
// interface Car {
//   stopCar(): void;
//   move(): void;
//   startCar(): void;
// }
// class MyCar implements Car {
//   constructor(
//     public name: string,
//     public model: number,
//     public brand: string
//   ) {}
//   stopCar(): void {
//     console.log("stop");
//   }
//   move(): void {
//     console.log("move");
//   }
//   startCar(): void {
//     console.log("start");
//   }
//   test() {
//     console.log("test");
//   }
// }

// const car = new MyCar("Toyota", 500, "corola");
interface Car {
  stopCar(): void;
  move(): void;
  startCar(): void;
}
abstract class MyCar implements Car {
  constructor(
    public name: string,
    public model: number,
    public brand: string
  ) {}
  abstract stopCar(): void;
  abstract move(): void;
  startCar(): void {
    console.log("start");
  }
  test() {
    console.log("test");
  }
}
class NewCar extends MyCar {
  move(): void {
    console.log("move");
  }
  stopCar(): void {
    console.log("Move");
  }
}
