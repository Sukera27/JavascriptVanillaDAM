
//if ,else


let edad = 30;
if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

//else if


if (edad >= 18) {
    console.log('Eres mayor de edad');
} else if (edad >= 12) {
    console.log('Eres adolescente');
} else {
    console.log('Eres menor de edad');
}

//Operador ternario

let mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(mensaje);

//Switch
let color = 'azul';
switch (color) {
    case 'rojo':
        console.log('El color es rojo');
        break;
    case 'azul':
        console.log('El color es azul');
        break;
    default:
        console.log('El color no es rojo ni azul');
        break;
}