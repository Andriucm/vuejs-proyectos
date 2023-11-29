//*Eventos Click
const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

heading.addEventListener("dblclick", () => {
  //   const numero = 2;
  //   if ((numero === 10)) {
  //     heading.textContent = " mi numero es 10";
  //   } else {
  //     heading.textContent = " mi numero es diferente";
  //   }
  heading.textContent = " Nuevo heading al dar Click";
});
enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    // console.log('diste click');
    // enlace.textContent = "nuevo nombre";
  });
});
