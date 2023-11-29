const url = "https://jsonplaceholder.typicode.com/comments";

//* Fetch API => Async Await
const consultarApi = async () => {
  //! async antes de la función para definir que es asíncrona
  try {
    const respuesta = await fetch(url); //* Recoge la dirección Json o texto
    const resultado = await respuesta.json(); //* Una vez tengo un resultado
    console.log(resultado); //* Lo imprimo en pantalla
  } catch (error) {
    console.log(error);
    //? La opción de abajo son opcional
  } finally {
    console.log("Todo listo"); //* Siempre se ejecuta Funcione o No
  }
};

consultarApi();
