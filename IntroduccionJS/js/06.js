//Destructuring de 2 o más objetos
const producto = {
  nombre: "tablet",
  precio: 300,
  disponible: true,
};
const cliente = {
  nombre: "Andrei",
  premium: true,
};
const { nombre: nombreProducto } = producto;
const { nombre: nombreCliente } = cliente;
console.log(nombreProducto);
console.log(nombreCliente);
