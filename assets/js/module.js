// ejercicio 1
// import{sumar} from "./matematicas.js"
// console.log(sumar(2,2))

// ejercicio 2
// import saludo from "./saludo.js"
// console.log(saludo())

// ejercicio 3
// let button = document.getElementById("button");

// button.addEventListener("click", () => {
//   console.log("has hecho clic");
// });

// ejercicio 4
// let parrafo = document.getElementById("parrafo")
// let button = document.getElementById("button")

// button.addEventListener("click",()=>{
//     parrafo.textContent="¡magia!"
// })

// ejercicio 5
// let input =document.getElementById("input")
// let button = document.getElementById("button")
// let parrafo = document.getElementById("parrafo")

// button.addEventListener("click",()=>{
//     parrafo.textContent=input.value
// })

// ejercicio 6
// let input =document.getElementById("input")
// let button = document.getElementById("button")

// button.addEventListener("click", ()=>{
//     input.value=""
// })

// ejercicio 7
// let input =document.getElementById("input__primero")
// let input2 =document.getElementById("input__segundo")


// button.addEventListener("click", ()=>{
// console.log(` ${Number(input.value) + Number(input2.value)}`)
// })

// ejercicio 8
import { sumar, restar, multiplicar, dividir } from "./calculadora.js";
// console.log(sumar(2,2))

let buttonSumar = document.getElementById("button__sumar");
let buttonRestar = document.getElementById("button__restar");
let buttonMultiplicar = document.getElementById("button__multiplicar");
let buttonDividir = document.getElementById("button__dividir");

let input =document.getElementById("input__primero")
let input2 =document.getElementById("input__segundo")


button__sumar.addEventListener("click", () => {
  sumar(Number(input.value), Number(input2.value))
});

button__restar.addEventListener("click", () => {
  restar(Number(input.value), Number(input2.value))
});

button__multiplicar.addEventListener("click", () => {
  multiplicar(Number(input.value), Number(input2.value))
});

button__dividir.addEventListener("click", () => {
  dividir(Number(input.value), Number(input2.value))
});
