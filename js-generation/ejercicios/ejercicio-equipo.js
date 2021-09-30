const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
const $info = document.querySelector("#info");

fetch(url)
  .then((response) => response.json())
  .then((datos) => {
    for (let i = 0; i < datos.lenght; i++) {
      let nuevoElemento = document.createElement("div");
      let mensaje = `<div class="card" style="width: 18rem;">
        <img src="${datos[i].url}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${datos[i].title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>`;
      nuevoElemento.innerHTML = mensaje;
      $info.appendChild(nuevoElemento);
    }
  })
  .catch((err) => console.log(err));
