# JavascriptVanillaDAM

# 📘 Apuntes de JavaScript Básico

Este repositorio contiene una recopilación de **apuntes y ejemplos prácticos de JavaScript** pensados para los alumnos de **2º de DAM** en la asignatura de **Microservicios**.  
El objetivo es proporcionar una base sólida en el lenguaje para comprender mejor el desarrollo backend y frontend, así como su uso en entornos de microservicios.

---

## 📂 Contenido

Los apuntes están organizados en diferentes bloques temáticos:

1. **Sintaxis Básica**
   - Variables (`var`, `let`, `const`)
   - Tipos de datos
   - Operadores

2. **Control de Flujo**
   - Condicionales
   - Bucles (`for`, `while`)
   - Manejo de errores (`try...catch`)

3. **Funciones**
   - Declaración y expresión
   - Funciones flecha
   - Parámetros y valores por defecto
   - Ámbito y closures

4. **Objetos y Arrays**
   - Creación y manipulación
   - Métodos más comunes (`map`, `filter`, `reduce`)

---

## 🎯 Objetivos de Aprendizaje

- Comprender la sintaxis y fundamentos de **JavaScript**.  
- Aplicar conceptos del lenguaje a ejemplos sencillos.  

---

# 📑 JavaScript DOM 

## 🔹 Selección de elementos
| Método | Ejemplo | Descripción |
|--------|---------|-------------|
| `getElementById` | `document.getElementById("title")` | Selecciona por **ID** |
| `querySelector` | `document.querySelector(".main-div")` | Selecciona el **primer** elemento que coincida con el selector CSS |
| `querySelectorAll` | `document.querySelectorAll("ul.lista > li")` | Selecciona **todos** los elementos que coincidan (NodeList iterable) |

---

## 🔹 Modificación de elementos
| Acción | Ejemplo | Descripción |
|--------|---------|-------------|
| Cambiar texto | `title.innerText = "Nuevo texto";` | Reemplaza el contenido textual |
| Insertar HTML | `title.innerHTML = "<em>Texto con etiquetas</em>";` | Inserta HTML dentro del elemento |
| Cambiar atributo | `image.setAttribute("src", "img/js2.png");` | Modifica un atributo del elemento |
| Cambiar estilos | `mainDiv.style.backgroundColor = "#ffcc00";` | Cambia el estilo con CSS inline |
| Añadir clase | `image.classList.add("imgclass");` | Añade una clase al elemento |

---

## 🔹 Crear y eliminar elementos
| Acción | Ejemplo |
|--------|---------|
| Eliminar elemento | ```let olddiv = document.querySelector(".old-div");document.body.removeChild(olddiv);``` |
| Crear y añadir | ```let newdiv = document.createElement("div"); newdiv.innerText = "Esto es un div nuevo";document.body.appendChild(newdiv);``` |

---

## 🔹 Eventos
| Acción | Ejemplo |
|--------|---------|
| Escuchar evento (click) | ```let button = document.querySelector("#button");button.addEventListener("click", () => {  alert("Has pulsado el botón");});``` |

---

✅ **Tip:** Usa `console.log()` para inspeccionar nodos y probar en la consola del navegador.  


# 🧭 FETCH en JavaScript

## 📘 ¿Qué es `fetch()`?

`fetch()` es una función nativa de JavaScript que permite hacer **peticiones HTTP** (GET, POST, PUT, DELETE, etc.) para comunicarse con **APIs** o **archivos** externos.

Devuelve una **promesa** que se resuelve con un objeto `Response`.

---

## 🧩 Estructura básica

```js
fetch('https://example.com/api')
  .then(response => response.json()) // convierte la respuesta a JSON
  .then(data => console.log(data))   // usa los datos
  .catch(error => console.error('Error:', error)); // maneja errores
```

### 🔍 Explicación:
- `fetch(url)` → realiza la solicitud.  
- `.then(response => response.json())` → convierte la respuesta a un objeto JavaScript.  
- `.then(data => …)` → manipulas los datos.  
- `.catch(error => …)` → maneja errores (por ejemplo, si no hay conexión).

---

## ⚙️ Métodos básicos de `fetch()`

### 🟢 1. **GET** – Leer datos

```js
fetch('http://localhost:3000/alumnos')
  .then(res => res.json())
  .then(data => console.log('Alumnos:', data))
  .catch(err => console.error(err));
```

📘 **Usos:** obtener información (por ejemplo, lista de usuarios o productos).

---

### 🟡 2. **POST** – Crear datos

```js
fetch('http://localhost:3000/alumnos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre: 'Luis',
    edad: 22,
    curso: 'HTML'
  })
})
  .then(res => res.json())
  .then(data => console.log('Alumno creado:', data))
  .catch(err => console.error(err));
```

📘 **Usos:** enviar nuevos datos al servidor (crear un registro).

---

### 🟠 3. **PUT** – Reemplazar datos

```js
fetch('http://localhost:3000/alumnos/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    nombre: 'Ana María',
    edad: 21,
    curso: 'React'
  })
})
  .then(res => res.json())
  .then(data => console.log('Alumno actualizado (PUT):', data))
  .catch(err => console.error(err));
```

📘 **Usos:** reemplaza completamente un recurso existente.


---

### 🔴 5. **DELETE** – Eliminar datos

```js
fetch('http://localhost:3000/alumnos/1', {
  method: 'DELETE'
})
  .then(() => console.log('Alumno eliminado'))
  .catch(err => console.error(err));
```

📘 **Usos:** eliminar un recurso del servidor.

---

## ✅ Resumen rápido

| Método | Acción            | Usa `body` | Efecto |
|:-------|:------------------|:-----------|:--------|
| **GET** | Leer datos        | ❌ | Obtiene información |
| **POST** | Crear datos       | ✅ | Agrega un nuevo registro |
| **PUT** | Reemplazar datos  | ✅ | Modifica completamente un registro |
| **DELETE** | Eliminar datos  | ❌ | Borra un registro |


## 🚀 Requisitos

- Tener instalado [Node.js](https://nodejs.org/) (opcional para pruebas fuera del navegador).  
- Editor de código recomendado: [Visual Studio Code].  

---

## 📝 Uso de los Apuntes

Puedes clonar este repositorio en tu equipo:

```bash
git clone https://github.com/Sukera27/JavascriptVanillaDAM.git
