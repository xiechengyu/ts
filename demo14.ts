class Person {
  public readonly _name: string;
  constructor(public name: string) {
    this._name = name
  }
}

const person = new Person("haha")
person.name = "xie"
console.log(person._name)