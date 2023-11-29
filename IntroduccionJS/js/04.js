//Objetos
const producto = {
  nombre: "tablet",
  precio: 300,
  disponible: true,
};
// console.log(typeof producto);
// console.table(producto);
// console.log(producto.nombre);
// console.log(producto.precio);
// console.log(producto.disponible);

//Destructuring
const { nombre, precio, disponible } = producto;
// console.log(nombre);
// console.log(disponible);
// console.log(precio);

//Object literal
const autenticado = true;
const usuario = "Andrei";
const nuevoObjeto = { autenticado, user: usuario };
console.log(nuevoObjeto);
