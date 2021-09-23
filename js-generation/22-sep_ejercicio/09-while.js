let num1 = parseInt(prompt("Ingresa un numero"));
const num_secreto = 23;

while (num1 !== num_secreto) {
  console.log("No advinistasre el numero");
  num1 = parseInt(prompt("Ingresa un numero"));
}

console.log("Felicidades, encontraste el numero secreto");
