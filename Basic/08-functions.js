
function saludar(){
    console.log('Hola');
}
saludar();

function saludar2(name){
    console.log('Hola ' + name);
}
saludar();
saludar2('Vedruna');

let nombre = 'Vedruna';

//Retornar
function saludar4  (nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar4('Pedro'));

//Funcion flecha
const saludar3 = (nombre) => console.log(`Hola${nombre}`);
