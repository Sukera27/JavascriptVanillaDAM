
let person = {
    name: 'Rafael',
    age: 31,
    isHuman: true
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isHuman);

let  person2 = {
    name: 'Rafael',
    age: 31,
    isHuman: true
}
console.log(person2);

//No son iguales aunque sus valores sean iguales ya que cada uno es un objeto distinto 
//y tiene distitos espacios en memoria y por lo tanto no son iguales
console.log(person==person2);