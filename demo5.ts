function getTotal(own: number, two: number): number {
  return own + two
}

const a = getTotal(1, 2)

function sayHello(): void {
  // console.log("hello world");
}

let list: number[] = [1, 2, 3]
let list1: Array<string> = ['1', "2"]

type addtype = { a?: number, b?: number }
function add({ a = 4, b = 2 }: addtype): number {
  return a + b
}

console.log(add({}));
