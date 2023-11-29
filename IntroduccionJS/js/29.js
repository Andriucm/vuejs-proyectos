//* ESM - EcmaScript Modules
//? Importar archivo con funciones globales
    //! Al crear el modulo de js (funciones.js) hay que especificar en el html que el script es de tipo modulo
import texto,{ sumar as suma, restar } from "./funciones.js";


console.log(suma(22,10));
console.log(restar(100,20));

console.log(texto);