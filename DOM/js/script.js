// DOM solo existe desde el contexto del navegador


//---Selecion de de elementos
//Aqui llamamos a un elemento por su id con la funcion getElementById
let title = document.getElementById('title');
console.log(title);

// Acceder al elemento no por el id si no por el atributo name - el selector coincide con la clase de css
let title2 = document.querySelector(".main-div");
console.log(title2); 

//Para una lista de elementos podriamos usar querySelectorAll
let title3 = document.querySelectorAll("ul.lista > li");
console.log(title3);

//---Modicar elementos
title.innerText = "Manipulando el DOM en Vedruna"; // modificamos el contenido del texto
title.innerHTML ="<em>Manipulando el DOM en Vedruna por los alumnos de DAM</em>"; //incluimos etiquetas html dentro del texto

