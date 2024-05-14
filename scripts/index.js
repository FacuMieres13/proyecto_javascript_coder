const contenedorPelis = document.getElementById('misPelis');
var script = document.createElement('script');
script.src = 'peliculas.js';
document.head.appendChild(script);
let carrito = [];
let peliculas = [];

// Funciones auxiliares
function renderizarPeliculas(listPeliculas) {
    console.log(listPeliculas);
    contenedorPelis.innerHTML = '';
    for (const peli of listPeliculas) {
        contenedorPelis.innerHTML += `
        <div class="card" style="width: 18rem; text-align:center; margin:0 auto;">
        <img class="card-img-top" src=${peli.poster} alt=${peli.title}>
        <div class="card-body margin:10px">
        <h4 class="card-title">${peli.title}</h4>
        <h5 class="card-text">$ ${peli.price}</h5>
          <button onClick=alquilarPelicula(${peli.id}) class="btn btn-primary compra" id=${peli.id}>Alquilar</button>
        </div>
      </div>
        `
    }
}

function buscarPelicula(peliculas) {
    let peliculaBuscada = document.getElementById("busqueda").value.toLowerCase();
    console.log(peliculaBuscada);
    if (peliculaBuscada !== '') {
        const peliculasEncontradas = peliculas.filter(pelicula => pelicula.title.toLowerCase().includes(peliculaBuscada));

        if (peliculasEncontradas.length === 0) {
            Swal.fire({
                icon: "question",
                title: "No pudimos encontrar tu película",
                text: "No se encontró ninguna película con ese título.",
            });
            console.log("No se encontró ninguna película con ese título.");
        } else {
            // contenedorBusqueda.innerHTML = peliculasEncontradas.map(peli => `
            //     <div class="card" style="width: 18rem; text-align:center; margin:0 auto;">
            //         <img class="card-img-top" src=${peli.poster} alt=${peli.title}>
            //         <div class="card-body margin:10px">
            //             <h4 class="card-title">${peli.title}</h4>
            //             <h5 class="card-text">$ ${peli.price}</h5>
            //             <button class="btn btn-primary compra" id=${peli.id}>Alquilar</button>
            //         </div>
            //     </div>
            // `).join('');
            renderizarPeliculas(peliculasEncontradas);
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Debes ingresar una película",
            text: "Por favor, asegurate de seleccionar una película antes de buscar.",
        });
        contenedorBusqueda.classList.add('d-none');
    }
}

function agregarACarrito(peli, tablaBody) {
    let carritoEnStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    let indiceExistente = carritoEnStorage.findIndex(item => item.id === peli.id);
    if (indiceExistente !== -1) {
        carritoEnStorage[indiceExistente].cantidad += 1;
    } else {
        peli.cantidad = 1;
        carritoEnStorage.push(peli);
    }
    localStorage.setItem('carrito', JSON.stringify(carritoEnStorage));
    cargarCarritoActual(tablaBody);
}

function pagarTotal(tablaBody){
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
}

function eliminarPelicula(idPelicula) {
    let carritoEnStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    let indice = carritoEnStorage.findIndex(item => item.id === idPelicula);
    if (indice !== -1) {
        if(carritoEnStorage[indice].cantidad > 1){
            carritoEnStorage[indice].cantidad -= 1;
        }else{
            carritoEnStorage.splice(indice, 1);
        }
        localStorage.setItem('carrito',JSON.stringify(carritoEnStorage));
        cargarCarritoActual();
    }
}

function cargarCarritoActual() {
    const tablaBody = document.getElementById('tablabody');
    let carritoEnStorage = JSON.parse(localStorage.getItem('carrito')) || [];
    console.table(carritoEnStorage);
    let total = 0;
    tablaBody.innerHTML = '';
    for (let i = 0; i < carritoEnStorage.length; i++) {
        const peli = carritoEnStorage[i];
        total += peli.price * peli.cantidad;
        tablaBody.innerHTML += `
            <tr>
                <td class="text-row">${peli.id}</td>
                <td class="text-row">${peli.title}</td>
                <td class="text-row">${peli.price}</td>
                <td class="text-row">${peli.cantidad}</td>
                <td class="text-row">
                    <button onClick=eliminarPelicula(${peli.id}) class="btn-danger eliminar-pelicula">Eliminar</button>
                </td>
            </tr>
        `;
    }
    document.getElementById('total').textContent = `Total a pagar $: ${total}`;
}

function alquilarPelicula(peliculaId){
    console.log('Hiciste click en el boton cuyo id es: ' + peliculaId);
    const peliACarrito = peliculas.find(pelicula => pelicula.id == peliculaId);
    console.log(peliACarrito);
    agregarACarrito(peliACarrito);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Añadiste ${peliACarrito.title} al carrito`,
        showConfirmButton: false,
        timer: 1500
    });

}

function showLoader() {
    document.getElementById("loading-page").style.display = "block";
    document.getElementById("container").style.display = "none"
}

function showPageContent() {
    document.getElementById("loading-page").style.display = "none";
    document.getElementById("container").style.display = "initial";
    main();
}

function main() {
    let carritoStorage = localStorage.getItem('carrito')
    console.log('carritoStorage',carritoStorage)
    peliculas = window.peliculas;
    renderizarPeliculas(peliculas);

    const tablaBody = document.getElementById('tablabody');
    cargarCarritoActual();
   
    const pagarTotalBtn = document.getElementById('pagar-total');
    pagarTotalBtn.addEventListener('click', function() {
        pagarTotal(tablaBody);
    });
    document.getElementById("boton").addEventListener("click", function () {
        buscarPelicula(peliculas);
    });
}

showLoader();

// setTimeout(showPageContent, 5000); // 30 segundos = 30000 milisegundos
