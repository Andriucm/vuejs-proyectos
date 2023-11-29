//Manipulación del DOM

const heading = document.querySelector(".heading");

// heading.textContent = "Un Nuevo Heading"
// heading.classList.remove("text-4xl")

const inputNombre = document.querySelector("#nombre");
inputNombre.placeholder = "Valor por default";

const enlaces = document.querySelectorAll(".navegacion a");

enlaces.forEach((enlace) => (enlace.textContent = " Nuevo Texto"));
