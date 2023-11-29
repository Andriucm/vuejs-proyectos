//* Exportar funciones a otros proyectos
export function sumar(a, b) {
  return a + b;
}
export function restar(a, b) {
  return a - b;
}

//! Export default
const hola = "Hola mundo"
export default hola //* Solo puede haber un (export default por archivo)
//? Este método es la misma que la de arriba pero es util cuando hay muchas funciones
// export { sumar, restar };
