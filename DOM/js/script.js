// DOM solo existe desde el contexto del navegador




//---Selecion de de elementos
//Aqui llamamos a un elemento por su id con la funcion getElementById
let title = document.getElementById('title');
console.log(title);

// Acceder al elemento no por el id si no por el atributo name - el selector coincide con la clase de css
let mainDiv = document.querySelector(".main-div");
console.log(mainDiv); 

//Para una lista de elementos podriamos usar querySelectorAll
//let title3 = document.querySelectorAll("ul.lista > li");
console.log(title3);

//---Modicar elementos
title.innerText = "Manipulando el DOM en Vedruna"; // modificamos el contenido del texto
title.innerHTML ="<em>Manipulando el DOM en Vedruna por los alumnos de DAM</em>"; //incluimos etiquetas html dentro del texto

//let image = document.querySelector("img");// solo tenemos una imagen
image.setAttribute("src", "img/js2.png"); //setear el atributo src que indicamos en la  ruta de la imagen
image.classList.add("imgclass"); // anadimos la clase imgclass
mainDiv.style.backgroundColor = "#ffcc00";

//Eliminar elementos
let olddiv = document.querySelector(".old-div");
document.body.removeChild(olddiv);

//Añadir elementos
let newdiv = document.createElement("div");//primero creamos el elemento que queremos agregar
newdiv.innerText = "Esto es un div nuevo";//le incluimos texto
document.body.appendChild(newdiv);//lo añadimos al body
newdiv.style.backgroundColor = "#00ccff";//le añadimos un color


//---Eventos
let button = document.querySelector("#button");
button.addEventListener("click", () => { //evento click con un callback a una funcion asincrona 
    alert("Has pulsado el boton");
    console.log("Has pulsado el boton");
})

// Ejercicio 1 : Crear un input text y un boton que añada un item a la lista
let input = document.querySelector("#itemInput");
let ul = document.querySelector("#dynamicList");
let addButton = document.querySelector("#addButton");

addButton.addEventListener("click", () => {
let li = document.createElement("li");
li.innerText = input.value;
if(input.value.trim() == "") { //si no usara trim podria meter espacios en blancos y no cumpliria mi validacion 
    alert("No puedes añadir un item vacio");
    console.log("No puedes añadir un item vacio");
}else{
ul.appendChild(li);
input.value = "";
}
})



//Ejercicio 2 : Filtrar la lista (filtra por texto, no por letra)
let filterInput = document.querySelector("#filterInput");
const itemlist = document.querySelector(".lista");


filterInput.addEventListener("input", () => {
  let filtro = filterInput.value.toLowerCase();
  let items = itemlist.getElementsByTagName("li");

  for (let item of items) {
    if (item.innerText.toLowerCase().includes(filtro)) {
      item.style.display = "block";  
    } else {
      item.style.display = "none";
    }
  }
});


