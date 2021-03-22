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

console.log(strLength)