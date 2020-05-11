
let calculadora = new CalcController();

calculadora.displayCalc = "12";

console.log(calculadora.displayCalc);


let data = new Date();
calculadora.dataAtual = data.toDateString("pt-BR")
console.log(calculadora.dataAtual);
