//Array Methods
const tecnologias = ["Vue.js", "JavaScript", "Node.js", "HTML", "CSS","Git"];
const numbers = [10,20,30]
//Includes //*Busca en el array
let results= tecnologias.includes('Git')
//findIndex //*Busca el indice de un elemento en un Array
 results= tecnologias.findIndex(tech=> tech=== "Git")
//Some //*Busca un elemento que cumpla con una condición
 results= numbers.some(numero=> numero>25)
//find //*Busca un elemento
 results= numbers.find(numero=> numero===10)
//Every //*Busca que todos elemento cumplan con una condición
 results= numbers.every(numero=> numero>5)
 //Reduce //*Suma todos los elementos del array con un numero por default
 results= numbers.reduce((total,numero)=> numero+total, 0)
 //filter //*Filtra el array bajo una condición
 results= tecnologias.filter((tech)=> tech !== "Vue.js")
console.log(results);