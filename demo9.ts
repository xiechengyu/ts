interface girl {
  name: string,
  age?: number,
  bust?: number,
  [propname: string]: any,
  say(): string
}

const gile: girl = {
  name: "111",
  sex: 222,
  say() {
    return "123"
  }
}

// class XiaoJieJie implements girl {
//   name = "刘英";
//   age = 18;
//   bust = 90;
//   say() {
//     return "欢迎光临 ，红浪漫洗浴！！";
//   }
// }


// interface Teacher extends girl {
//   teach(): string;
// }