//*Eventos Submit ALert // Crear elementos
const formulario = document.querySelector("#formulario");

//? Prevenir alerta duplicadas
const alertaPrevia = document.querySelector(".alerta")
alertaPrevia?.remove(); //* Comprobar con el opcional chaining si existe un elemento con esa clase

//? Generar alertas
const alerta = document.createElement("DIV");
alerta.textContent = "Todos los campos son obligatorios";
alerta.classList.add(
  "alerta",
  "bg-red-500",
  "text-white",
  "uppercase",
  "text-sm",
  "text-center",
  "p-2",
  "font-black"
);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const password = document.querySelector("#password").value;
  if (nombre === "" || password === "") {
    formulario.appendChild(alerta); //* Crear un elemento dentro de otro elemento
    setTimeout(() => {
        alerta.remove()
    }, 3000);
    return;
  }
});
