
//Operadores Aritemeticos
// +, -, *, /, %, ++, --

let a=2;
let b=3;
//Suma  
console.log(a+b);
//Resta
console.log(a-b);
//Multiplicación
console.log(a*b);
//División
console.log(a/b);
//Módulo - resto de la división
console.log(a%b);
//Incremento
a++;
console.log(a);
//Decremento
b--;
console.log(b);

//Operadores de asignación
let variable=5;
variable+=2;
console.log(variable);


//Operadores de comparación
// ==, ===, !=, !==, >, <, >=, <=

let c=5;
let d="5";
console.log(c==d);//true debido a que con dos iguales se compara el valor y no el tipo
console.log(c===d);//false debido a que con tres iguales se compara el valor y el tipo
console.log(c!=d);//false c es igual a d por que se compara el valor y no el tipo
console.log(c!==d);//true c es distinto a d si comparamos el valor y el tipo
console.log(c>d);
console.log(c<d);
console.log(c>=d);
console.log(c<=d);
console.log(undefined==null);//true debido a que con dos iguales se compara el valor y no el tipo
console.log(undefined===null);//false debido a que con tres iguales se compara el valor y el tipo


//Operadores lógicos
// &&, ||, !
console.log('--Operadores lógicos--');
console.log(5>10 && 15>20);//false
console.log(5<10 || 15>20);//true
console.log(!(5>10 || 15>20));//true por que niega el resultado anterior

//Operador ternario
let edad=18;
// ? si es verdadero : si es falso
let mensaje=edad>=18? "Eres mayor de edad":"Eres menor de edad";
console.log(mensaje);

