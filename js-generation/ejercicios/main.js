/* Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo. */

var num1 = parseInt(prompt("Ingrese el numero 1"));
var num2 = parseInt(prompt("Ingrese el numero 2"));
var suma;
var resta;
var producto;
var division;

if ((num1) => num1) {
  var suma = num1 + num2;
  var resta = num1 - num2;
  document.write("Valor de suma: " + suma);
  document.write("Valor de resta: " + resta);
} else if (num1 <= num2) {
  var producto = num1 * num2;
  var division = num1 / num2;
  document.write("Valor de producto: " + producto);
  document.write("Valor de division: " + division);
}
