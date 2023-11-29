//Destructuring de Arrays
const tecnologias = ["Vue.js", "JavaScript", 'Node.js',"HTML","CSS"];

//*Destructuring - versión corta
const [vuejs,js, ,html,css]= tecnologias; //* Al ser el primero coge la primera posición del Array

//*Destructuring - versión larga

// const vuejs =tecnologias[0]; 
// const js =tecnologias[1];

console.log(vuejs);
console.log(js);
console.log(html);
// console.log(node);
console.log(css);
