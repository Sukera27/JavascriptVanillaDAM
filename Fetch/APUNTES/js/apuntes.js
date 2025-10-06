  
 //1. ¿Qué es fetch()?

//fetch() es una función  de JavaScript que permite hacer solicitud HTTP (como GET, POST, PUT, DELETE, etc.) a un servidor o archivo.
// una promesa que se resuelve con un objeto Response.

//2. ¿Cuál es la sintaxis de fetch()?
fetch('https://example.com/api')
  .then(response => response.json())  // convierte la respuesta a JSON
  .then(data => console.log(data))    // usa los datos
  .catch(error => console.error('Error:', error)); // maneja errores

//Ejemplo peticion GET  

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    console.log("Nombre:", data.name);
    console.log("Altura:", data.height);
    console.log("Imagen:", data.sprites.front_default);
  })
  .catch(error => console.error('Error:', error));
 
 
 // let btn = document.getElementById('btn');
 // let resultado = document.getElementById('resultado');
  
 // btn.addEventListener('click', () => {
   //   fetch('./data.json')
   //     .then(res => res.json())
   //     .then(data => {
    //      document.getElementById('resultado').textContent = JSON.stringify(data);
   //     })
   //     .catch(err => console.error(err));
  //  });


//Mostrar como una lista lo anterior

let btn1 = document.getElementById('btn');
let resultado1 = document.getElementById('resultado');

btn1.addEventListener('click', () => {
    fetch('./data.json')
      .then(res => res.json())
      .then(alumnos => {
        let ul = document.createElement('ul');
        for(alumno of alumnos){
            let li = document.createElement('li');
            li.textContent = `${alumno.nombre} ${alumno.apellido}`;
            ul.appendChild(li);
        }
        resultado1.innerHTML = '';
        resultado1.appendChild(ul);
      })
      .catch(err => console.error(err));
  });

//Ejemplo POST
  fetch('http://localhost:3000/alumnos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nombre: 'Luis',
    edad: 22,
    curso: 'HTML'
  })
})
  .then(res => res.json())
  .then(data => console.log('Alumno creado:', data))
  .catch(err => console.error(err));

//Ejemplo PUT

fetch('http://localhost:3000/alumnos/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    nombre: 'Luis',
    edad: 22,
    curso: 'HTML'
  })
})
  .then(res => res.json())
  .then(data => console.log('Alumno actualizado:', data))
  .catch(err => console.error(err));  

//Ejemplo DELETE
fetch('http://localhost:3000/alumnos/1', {
  method: 'DELETE'
})
  .then(res => res.json())
  .then(data => console.log('Alumno eliminado:', data))
  .catch(err => console.error(err));  
