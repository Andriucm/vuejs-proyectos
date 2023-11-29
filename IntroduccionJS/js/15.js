//Arrow Function

const sumar = (a = 0, b = 0) => {
  console.log(a + b);
};
const tecnologias = ["Vue.js", "JavaScript", "Node.js", "HTML", "CSS"];

//ForEach
const forEach = tecnologias.forEach((tech) => console.log(tech));
//map
const map = tecnologias.map((tech) => tech);
const filter = tecnologias.filter((tech) => tech !== "HTML");


console.log(map);
console.log(filter);
// sumar(2,3);
// sumar(2);
// sumar();
// sumar(225,432);
