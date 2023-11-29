// como unir 2 objetos o más
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true,
  };
  const cliente = {
    nombre: "Andrei",
    premium: true,
  };

//   const nuevoObjeto= Object.assign(cliente, producto)

const nuevoObjeto= {
    producto,
    cliente,
}
  console.log(nuevoObjeto);