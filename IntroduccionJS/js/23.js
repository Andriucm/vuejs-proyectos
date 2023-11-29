//Manipulación del DOM
    //*Seleccionar elementos

const heading = document.querySelector(".heading")
console.log(heading);

heading.textContent= "Nuevo Heading";
console.log(heading.textContent);
console.log(heading.innerHTML);
console.log(heading.tagName);
console.log(heading.classList);
console.log(heading.id);

const enlaces = document.querySelectorAll(".navegacion a")
console.log(enlaces);

