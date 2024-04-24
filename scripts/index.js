const contenedorPelis = document.getElementById('misPelis');
let carrito = [];
function renderizarPeliculas(listPeliculas) {
    console.log(peliculas)
    for (const peli of listPeliculas) {
        contenedorPelis.innerHTML += `
        <div class="card" style="width: 18rem; text-align:center; margin:0 auto;">
        <img class="card-img-top" src=${peli.poster} alt=${peli.title}>
        <div class="card-body margin:10px">
        <h4 class="card-title">${peli.title}</h4>
          <h5 class="card-text">Rating ${peli.rating}</h5>
          <button class="btn btn-primary compra" id=${peli.id}>Alquilar</button>
        </div>
      </div>
        `
    }
}
renderizarPeliculas(peliculas);
function buscarPelicula(peliculas) {
    let peliculaBuscada = document.getElementById("busqueda").value.toLowerCase();
    console.log(peliculaBuscada);
    const contenedorBusqueda = document.getElementById('peliBusc');
    contenedorBusqueda.innerHTML = ``
    if (peliculaBuscada !== '') {
        const peliculasEncontradas = peliculas.filter(pelicula => pelicula.title.toLowerCase().includes(peliculaBuscada));

        if (peliculasEncontradas.length === 0) {
            console.log("No se encontró ninguna película con ese título.");
            contenedorBusqueda.classList.add('d-none');
        } else {
            contenedorBusqueda.innerHTML = peliculasEncontradas.map(peli => `
                <div class="card" style="width: 18rem; text-align:center; margin:0 auto;">
                    <img class="card-img-top" src=${peli.poster} alt=${peli.title}>
                    <div class="card-body margin:10px">
                        <h4 class="card-title">${peli.title}</h4>
                        <h5 class="card-text">Rating ${peli.rating}</h5>
                        <button class="btn btn-primary compra" id=${peli.id}>Alquilar</button>
                    </div>
                </div>
            `).join('');

            contenedorBusqueda.classList.remove('d-none');
        }
    } else {
        alert('Debes ingresar una película')
        contenedorBusqueda.classList.add('d-none');
    }
}
const botonesCompra = document.getElementsByClassName('compra');
const tablaBody = document.getElementById('tablabody');
for (const boton of botonesCompra) {
    boton.addEventListener('click', () => {
        console.log('Hiciste click en el boton cuyo id es: ' + boton.id);
        const peliACarrito = peliculas.find(pelicula => pelicula.id == boton.id);
        console.log(peliACarrito);
        agregarACarrito(peliACarrito);
    })
}
function agregarACarrito(peli) {
<<<<<<< HEAD
    carrito.push(peli);
    console.table(carrito);
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].price;
=======
    let carritoEnStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    let indiceExistente = carritoEnStorage.findIndex(item => item.id === peli.id);
    if (indiceExistente !== -1) {
        carritoEnStorage[indiceExistente].cantidad += 1;
    } else {
        peli.cantidad = 1;
        carritoEnStorage.push(peli);
    }
    localStorage.setItem('carrito', JSON.stringify(carritoEnStorage));
    console.table(carritoEnStorage);
    let total = 0;
    for (let i = 0; i < carritoEnStorage.length; i++) {
        total += carritoEnStorage[i].price * carritoEnStorage[i].cantidad;
>>>>>>> Updates
    }
    document.getElementById('total').textContent = `Total a pagar $: ${total}`;
    tablaBody.innerHTML += `
        <tr>
            <td>${peli.id}</td>
            <td>${peli.title}</td>
            <td>${peli.price}</td>
        </tr>
    `;
}
const pagarTotalBtn = document.getElementById('pagar-total');
pagarTotalBtn.addEventListener('click', function() {
    let carritoEnStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carritoEnStorage.length === 0) {
        Swal.fire({
            icon: "error",
            title: "No hay artículos en el carrito",
            text: "Por favor, agrega al menos un artículo antes de proceder con el pago",
        });
        return;
    }
    let total = 0;
    for (let i = 0; i < carritoEnStorage.length; i++) {
        total += carritoEnStorage[i].price * carritoEnStorage[i].cantidad;
    }
    let mensaje = `Total a pagar: $${total}\n\nArtículos:\n`;
    for (let i = 0; i < carritoEnStorage.length; i++) {
        mensaje += `${carritoEnStorage[i].title} - $${carritoEnStorage[i].price}\n`;
    }
    Swal.fire({
        title: "Gracias por tu compra",
        text: mensaje,
        icon: "success"
    });
    localStorage.removeItem('carrito');
    tablaBody.innerHTML = '';
    document.getElementById('total').textContent = 'Total a pagar $: 0';
});
>>>>>>> Updates
document.getElementById("boton").addEventListener("click", function () {
    buscarPelicula(peliculas);
});