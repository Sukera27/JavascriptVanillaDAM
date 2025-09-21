
//for

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//do while
let j = 0;
do {
    console.log(j);
    j++;
} while (j  < 5);

console.log('----------------');
//bucle con condicional
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('Es 2');
    }
    console.log(i);
}

//Bucke con break
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('Es 2');
        break;
    }
    
}
//Bucle con continue
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
//Bucle iterando un array con bucle for each
let colors = ['red', 'green', 'blue'];
for (let color of colors) {
    console.log(color);
}