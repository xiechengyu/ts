class Xiaojiejie {
  constructor(private _age: number) { };
  get age(): number {
    return this._age - 10
  };
  set age(age: number) {
    this._age = age + 3
  }
  static sayHi(){
    console.log("hi")
  }
}

const haha = new Xiaojiejie(28)
haha.age = 25
Xiaojiejie.sayHi()