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
| Crear y añadir | ```js\nlet newdiv = document.createElement("div");\nnewdiv.innerText = "Esto es un div nuevo";\ndocument.body.appendChild(newdiv);``` |

---

## 🔹 Eventos
| Acción | Ejemplo |
|--------|---------|
| Escuchar evento (click) | ```nlet button = document.querySelector("#button");button.addEventListener("click", () => {  alert("Has pulsado el botón");});``` |

---

✅ **Tip:** Usa `console.log()` para inspeccionar nodos y probar en la consola del navegador.  


## 🚀 Requisitos

- Tener instalado [Node.js](https://nodejs.org/) (opcional para pruebas fuera del navegador).  
- Editor de código recomendado: [Visual Studio Code].  

---

## 📝 Uso de los Apuntes

Puedes clonar este repositorio en tu equipo:

```bash
git clone https://github.com/Sukera27/JavascriptVanillaDAM.git
