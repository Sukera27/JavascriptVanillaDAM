
let firstName ='Rafa'
let lastName = 'Mancina'
console.log(firstName + ' ' + lastName);

//Concatenación
let fullName = firstName + ' ' + lastName
console.log(fullName);

//Longitud
console.log(fullName.length);

//Acceso a caracteres
// Acceso por índice en este caso al primero 
console.log(fullName[0]);
//Al último
console.log(fullName[fullName.length - 1]);

//Metodos propios de los String
//Transformar en mayúsculas
console.log(fullName.toUpperCase());
//Transformar en minúsculas
console.log(fullName.toLowerCase());
//Convertir en array luego invertir orden y volver a string
console.log(fullName.split('').reverse().join(''));
//Indice de un caracter de un string
console.log(fullName.indexOf('M'));
//Remplazar
console.log(fullName.replace('Rafa', 'Vedruna'));
//Incluir
console.log(fullName.includes('Vedruna'));

//Plantillas literales
console.log(`Mi nombre es ${firstName} ${lastName}`);

