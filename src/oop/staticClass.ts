class Counter {
  static counter: number = 0;
  increment(): number {
    return (Counter.counter = Counter.counter + 1);
  }
  decrement(): number {
    return (Counter.counter = Counter.counter - 1);
  }
}
const count = new Counter();
const count2 = new Counter();
console.log(count.increment());
console.log(count2.decrement());
