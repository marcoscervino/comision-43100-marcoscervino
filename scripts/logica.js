
const carro = JSON.parse(localStorage.getItem("carro")) || [];
console.log(carro);
let contenedorProds = document.getElementById('misProds');
let tablaBody = document.getElementById('tablabody');
// RENDERIZADO DE CARDS DE LOS OBJETOS

function renderizarProductos(listaProds){
    //vaciamos en contenedor para evitar duplicados
    
    //cargamos las cartas de los productos solicitados
    for(const prod of listaProds){
        contenedorProds.innerHTML+=`
            <div class="card col-md-3">
                <img class="card-img-top" src=${prod.foto} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre} x${prod.tamaño}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button id=${prod.id} class="btn btn-primary compra">Comprar</button>
                </div>
            </div>
        `;
    }

}

renderizarProductos(cervezas);
renderizarProductos(gaseosas);
renderizarProductos(gines);
renderizarProductos(vodkas);
renderizarProductos(vinos);



// Agrega el evento click fuera del bucle de renderizarProductos
contenedorProds.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("compra")) {
      const prodId = parseInt(target.id);
      const prodACarro = [...cervezas, ...gaseosas, ...gines, ...vodkas, ...vinos].find(
        (producto) => producto.id === prodId
      );
      console.log(prodACarro);
      // Cargar productos a carro
      AgregarACarro(prodACarro);
    }
  });

//declaro la funcion ara agregar productos al carro
  function AgregarACarro(producto) {
    carro.push(producto);
    console.table(carro);
    tablaBody.innerHTML += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    //calcular total del carro
    const total = carro.reduce((acumulador, elemento,)=> acumulador + elemento.precio, 0)
    console.log(total);
    let totalCarro = document.getElementById("total");
    totalCarro.innerHTML = `Total a pagar $: ${total}`;
    //guardar carro en el local storage
    localStorage.setItem("carro", JSON.stringify(carro));

}

function cargarCarro(productos) {
    productos.forEach((producto) => {
        tablaBody.innerHTML += `
            <tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
            </tr>
        `;
    });

    // Calcular total del carro
    const total = productos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
    console.log(total);

    let totalCarro = document.getElementById("total");
    totalCarro.innerHTML = `Total a pagar $: ${total}`;
}

// Cargo los productos guardados en el storage al DOM
cargarCarro(carro);

// Filtrado por categoria

let filtroCervezas = document.getElementById("filtroCervezas");
let filtroGaseosas = document.getElementById("filtroGaseosas");
let filtroGines = document.getElementById("filtroGines");
let filtroVodkas = document.getElementById("filtroVodkas");
let filtroVinos = document.getElementById("filtroVinos");

filtroCervezas.onclick = () => {
    contenedorProds.innerHTML= "";
    renderizarProductos(cervezas)
};

filtroGaseosas.onclick = () => {
    contenedorProds.innerHTML= "";
    renderizarProductos(gaseosas)
};

filtroGines.onclick = () => {
    contenedorProds.innerHTML= "";
    renderizarProductos(gines)
};

filtroVodkas.onclick = () => {
    contenedorProds.innerHTML= "";
    renderizarProductos(vodkas)
};

filtroVinos.onclick = () => {
    contenedorProds.innerHTML= "";
    renderizarProductos(vinos)
};

//filtrado por barra de busqueda

let filtroNombre = document.getElementById("filtroNombre");
let botonBuscar = document.getElementById("botonNombre");

//combino todos los array en uno solo
const totalProds = cervezas.concat(gaseosas, gines, vodkas, vinos);


function filtrarNombres(nombre) {
    const filtrados = totalProds.filter((producto) => producto.nombre.includes(nombre));
    return filtrados;
}

botonBuscar.onclick = () => {
    let listaFiltrados = filtrarNombres(filtroNombre.value);
    contenedorProds.innerHTML= "";
    renderizarProductos(listaFiltrados);
    console.log(listaFiltrados);
};