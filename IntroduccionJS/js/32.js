const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

//* Fetch API => Multiple consulta
//?Incorrecto
const consultarApi = async () => {

    const inicio = performance.now()

const respuesta = await fetch(url)
const resultado = await respuesta.json();
// console.log(resultado);

const respuesta2 = await fetch(url2)
const resultado2 = await respuesta2.json()
// console.log(resultado2)

const fin = performance.now()
console.log(`Resultado Primera Funcion: ${fin -inicio} ms`);

}
//?Correcto
const consultarApi2 = async () => {
    const inicio = performance.now()

   const [respuesta, respuesta2] = await Promise.all([
        fetch(url), fetch(url2)
    ])
    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()
    // console.log(resultado);
    // console.log(resultado2);
    const fin = performance.now()
    console.log(`Resultado Segunda Funcion: ${fin -inicio} ms`);

}
consultarApi()
consultarApi2()
