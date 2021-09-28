/* Colocar una lista en el documento HTML,
    
colocar un boton que diga agregar elemento.
   
Cada ves que le den clic al boton debe agregar un elemento a la lista. */

function addItem() {
  var li = document.createElement("LI");
  var input = document.getElementById("add");
  li.innerHTML = input.value;
  input.value = "";
  document.getElementById("lista").appendChild(li);
}
