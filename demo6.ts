enum Color { Red = 123, Green = 3, Blue = 6 }
let colorName: string = Color[6];

// console.log(Color);  // 显示'Green'因为上面代码里它的值是2

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;

const numberarr: number[] = [1, 2, 3]
const stringarr: Array<string> = ["1", "s"]
const undefinedarr: Array<undefined> = [undefined, undefined]
const numberstringarr: (number | string)[] = [1, 2, "ss"]
const undefinenulldarr: Array<number | string> = [1, 2, "ss"]
type lady = { name: string, age: number }//类型别名
const ladys: lady = { name: "12", age: 22 }
console.log(strLength)