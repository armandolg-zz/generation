/* const frutas = ["Mango", "Sandia"];

for (var i = 0; i < frutas.length; i++) {
  document.write(frutas[i], "<br><br>");
} */

//

/* let num1 = parseInt(prompt("Ingresa el numero 1"));
let num2 = parseInt(prompt("Ingresa el numero 2"));
let num3 = parseInt(prompt("Ingresa el numero 3"));

console.log(num1);
console.log(num2);
console.log(num3);

if (num1 > num2 && num1 > num3) {
  console.log("El numero 1 es mayor", num1);
} else if (num2 > num1 && num2 > num3) {
  console.log("El numero 2 es mayor", num2);
} else {
  console.log("El numero 3 es mayor", num3);
} */

//

/* let edad = prompt("¿Cual es tu edad?");

if (edad >= 18 && edad <= 29) {
  document.write("Haz sido aceptado en el bootcamp de generation");
} else {
  document.write("No cumples con los requisitos del programa");
}
 */
//

/* function suma(num1, num2) {
  var resultado = num1 + num2;
  console.log(resultado);
}

suma(10, 5); */

//

var num1 = parseInt(prompt("Ingresa tu primer numero"));
var num2 = parseInt(prompt("Ingresa tu segundo numero"));
var operacion = prompt("Que operacion quieres hacer?");

function calculadora(num1, num2, operacion) {
  var suma_total = num1 + num2;
  var resta_total = num1 - num2;
  var multiplicacion_total = num1 * num2;
  var division_total = num1 / num2;

  if (operacion === "suma") {
    document.write("El resultado de tu suma es:", " ", suma_total);
  } else if (operacion === "restar") {
    document.write("El resultado de tu resta es:", " ", resta_total);
  } else if (operacion === "multiplicar") {
    document.write(
      "El resultado de tu multiplicacion es:",
      " ",
      multiplicacion_total
    );
  } else if (operacion === "dividir") {
    document.write("El resultado de tu division es:", " ", division_total);
  } else {
    document.write("El resultado de tu suma es:", " ", suma_total);
    document.write("El resultado de tu resta es:", " ", resta_total);
    document.write(
      "El resultado de tu multiplicacion es:",
      " ",
      multiplicacion_total
    );
    document.write("El resultado de tu division es:", " ", division_total);
  }
}

calculadora(num1, num2, operacion);
