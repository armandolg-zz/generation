const num = parseInt(prompt("Ingrese un numero: "));
var numero;
var i = 0;

for (i = 0; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}
