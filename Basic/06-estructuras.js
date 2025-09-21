
//Arrays

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//incluir elemento al final
numbers.push(6);
console.log(numbers);
//incluir elemento al inicio
numbers.unshift(0);
console.log(numbers);
//eliminar ultimo elemento
numbers.pop();
console.log(numbers);
//eliminar primer elemento
numbers.shift();
console.log(numbers);


let colors = ['red', 'green', 'blue'];
console.log(colors);
colors[1] = 'yellow';//Introducción de un elemento en la posición 1
console.log(colors);

//Set

let colorsSet = new Set(['red', 'green', 'blue']);
console.log(colorsSet);
//Añadir un elemento
colorsSet.add('yellow');
console.log(colorsSet);
//Eliminar un elemento
colorsSet.delete('red');
console.log(colorsSet);

//Map

let colorsMap = new Map([
    ['red', '#FF0000'],
    ['green', '#00FF00'],
    ['blue', '#0000FF']
]);
console.log(colorsMap);

//Añadir un elemento
colorsMap.set('yellow', '#FFFF00');
console.log(colorsMap);
//Eliminar un elemento
colorsMap.delete('red');
console.log(colorsMap);