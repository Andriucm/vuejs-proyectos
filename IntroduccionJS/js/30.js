const url = "https://jsonplaceholder.typicode.com/comments";

//* Fetch API

const consultarApi = () => {
  fetch(url) //* Recoge la dirección Json o texto
    .then((respuesta) => { 
      return respuesta.json();
    }) //* Convertimos el link en un archivo Json
    .then((resultado) => {
      console.log(resultado); //* Mostramos el archivo
    })
    .catch((error) => {
        console.log(error); //* Muestra error en el caso de que la función anterior falle
    })
    .finally(()=>{
        console.log("Todo listo"); //* Siempre se ejecuta Funcione o No
    })
};

consultarApi();
