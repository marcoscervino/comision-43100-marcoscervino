
let carro = JSON.parse(localStorage.getItem("carro")) || [];
let contenedorProds = document.getElementById('misProds');
let tablaBody = document.getElementById('tablabody');
const modalContainer = document.getElementById('modal-container');

//VER CARRO
const verCarro = document.getElementById("verCarro");
verCarro.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class= "modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    
    modalbutton.onclick = () =>{
        modalContainer.style.display = "none";
    };

    modalHeader.append(modalbutton);

    carro.forEach((product) =>{
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <h3>⚪ ${product.nombre} $${product.precio}</h3>
            <p></p>
            <button type="button" class="btn btn-danger">X</button>
        `;
        modalContainer.append(carritoContent);
        
    });

    const total = carro.reduce((acumulador, elemento,)=> acumulador + elemento.precio, 0)
    console.log(total);
    let totalCarro = document.createElement("div");
    totalCarro.className = "total-content"
    totalCarro.innerHTML = `<p id=totalAPagar> Total a pagar $: ${total}</p>
    `;
    modalContainer.append(totalCarro);
    //guardar carro en el local storage
    localStorage.setItem("carro", JSON.stringify(carro));

    let botonFinalizar = document.createElement("div")
        botonFinalizar.className = "finalizar-content";
        botonFinalizar.innerHTML = `
            <button type="button" id="finalizarCompra" class="btn btn-success">Finalizar Compra</button>
        `;
        modalContainer.append(botonFinalizar);

         //Finalizar la compra
    const finalizarCompra = document.getElementById("finalizarCompra");
    finalizarCompra.onclick = () =>{
        carro=[];
        totalCarro.innerHTML = `<p id=totalAPagar> Total a pagar $: 0</p>
        `;
        modalContainer.style.display = "none";
    }
});
// RENDERIZADO DE CARDS DE LOS OBJETOS

function renderizarProductos(listaProds){
    //vaciamos en contenedor para evitar duplicados
    //cargamos las cartas de los productos solicitados
    for(const prod of listaProds){
        contenedorProds.innerHTML+=`
            <div class="card mt-3 mb-3 ms-2 mx-2 border-dark text-center col-md-2" >
                <img class="card-img-top" src=${prod.foto} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${prod.nombre}</h5>
                    <h5>x${prod.tamaño}</h5>
                    <p class="card-text">$ ${prod.precio}</p>
                    <button id=${prod.id} class="btn btn-dark compra">Comprar</button>
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
      Swal.fire({
        title: 'Genial!',
        text: 'Agregaste ' + prodACarro.nombre + ' al carro!',
        imageUrl: prodACarro.foto,
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'Imagen del producto',
        confirmButtonColor: '#212529'
      })
    }
  });

//declaro la funcion para agregar productos al carro
  function AgregarACarro(producto) {
    carro.push(producto);
    console.table(carro);
    
    //calcular total del carro
    const total = carro.reduce((acumulador, elemento,)=> acumulador + elemento.precio, 0)
    console.log(total);

    //guardar carro en el local storage
    localStorage.setItem("carro", JSON.stringify(carro));

}

function cargarCarro(productos) {
    

    // Calcular total del carro
    const total = productos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
    //console.log(total);

    
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