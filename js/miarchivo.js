const multiplicacion = (a, b) => a * b;
const porciento = x => x * 0.01;
const division = (a, b) => a / b;
const suma = (a, b) => a + b;

let sueldo = parseInt(prompt("Indique cuál es su sueldo"));
let ahorro = parseInt(prompt("indique cuánto ahorra al mes"));
let extra = parseInt(prompt("Si tiene algún ingreso extra destinado a ahorros en el año indique la suma. Caso contrario ponga 0."))
let objetivo = prompt("Qué bien desea alcanzar con sus ahorros?");
let valorBien = parseInt(prompt("Cuál es el valor del bien que desea alcanzar con sus ahorros?"));

let ahorroPorcentaje = division((multiplicacion(ahorro, 100)), sueldo);
let ahorroAnual = suma((multiplicacion(ahorro, 12)), extra);
let mesesDeAhorro = division(valorBien, sueldo);
let ahorroReal = division(valorBien, ahorro);
let sueldoAños = division(mesesDeAhorro, 12);
let ahorroAños = division(ahorroReal, 12);
let tiempoTotal = division(valorBien, ahorroAnual);
let tiempoPlus = division(valorBien, multiplicacion(ahorroAnual, 1.1));


switch (true) {
    case (ahorroPorcentaje <= 5):
        console.log("Su porcentaje de ahorro es bajo.");
        break;
    case ((ahorroPorcentaje > 5) && (ahorroPorcentaje <= 10)):
        console.log("Su porcentaje de ahorro podría ser más elevado.");
        break;
    case ((ahorroPorcentaje > 10) && (ahorroPorcentaje <= 20)):
        console.log("Su porcentaje de ahorro es considerable.");
        break;
    case ((ahorroPorcentaje > 20) && (ahorroPorcentaje <= 50)):
        console.log("Su porcentaje de ahorro es elevado.");
        break;
    case (ahorroPorcentaje > 50):
        console.log("Usted tiene una gran capacidad de ahorro.");
        break;
    default:
        console.log("Usted no ahorra o ingresó un dato incorrecto.");
        break;
}

console.log("Su porcentaje de ahorro mensual es del " + ahorroPorcentaje + "%.");
console.log("Su ahorro anual es de $" + ahorroAnual + ".");
console.log("Si destinara todo su sueldo a comprar su " + objetivo + " tardaría " + mesesDeAhorro + " meses o " + sueldoAños + " años para comprar lo que desea.");
console.log("Si destinara solo su ahorro mensual a comprar su " + objetivo + " tardaría " + ahorroReal + " meses o " + ahorroAños + " años para comprar lo que desea.");
console.log("Si destinara su ahorro mensual más sus ingresos extra anuales a comprar su " + objetivo + " tardaría " + tiempoTotal + " años para comprar lo que desea.");
console.log("Si consiguiera ahorrar un 10 % adicional de su ahorro mensual más sus ingresos extra anuales a comprar su " + objetivo + " tardaría " + tiempoPlus + " años para comprar lo que desea.");
