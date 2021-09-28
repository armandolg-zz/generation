const edad = parseInt(prompt("Ingresa tu edad"));
let mensaje = "";

if (edad === 18) {
  mensaje = "Acaba de cumplir la mayoria de edad";
}

switch (edad) {
  case 18:
    mensaje = "Acaba de cunplir la mayora de edad";
    break;
  case 25:
    mensaje = "Ya eres un adulto";
    break;
  case 70:
    mensaje = "Ya eres de la tercera edad";
    break;
  default:
    mensaje = "Esta fuera de edad";
    break;
}

document.write(`<p>${mensaje}</p>`);
