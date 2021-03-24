class Person {
  constructor(public name: string) {
  }

}
// const person = new Person("xcy")
// console.log(person)
class Teacher extends Person {
  constructor(public age: number) {
    super("xcy")
  }
}

const teacher = new Teacher(18)
console.log(teacher.name)
console.log(teacher.age)