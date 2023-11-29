//Operador de comparación - (condición) ? si se cumple : si no se cumple
//Operadores Ternarios
const disponible = 1000;
const total = 500;
const tarjeta = true;

disponible > total || tarjeta
  ? console.log("Si puedes pagar con saldo o tarjeta")
  : console.log("No puedes pagar");
