//*Eventos Input
const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");
const inputNombre = document.querySelector("#nombre")
const inputPass = document.querySelector("#password")
inputNombre.addEventListener("input",(e)=>{
    heading.textContent= e.target.value
    // console.log("Escribiendo...");
})

inputPass.addEventListener("input",(e)=>{
    e.target.type = "text"
    setTimeout(() => {
        e.target.type = "password"
        }, 300);

})