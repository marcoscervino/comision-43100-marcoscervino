let cervezas;
let gaseosas;
let gines;
let vodkas;
let vinos;
obtenerJsonCervezas();
obtenerJsonGaseosas();
obtenerJsonGines();
obtenerJsonVodkas();
obtenerJsonVinos();

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

    carro.forEach((product, index) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content row";
        carritoContent.innerHTML = `
        <div class="col-1"><img class="imgCarro=" src="${product.foto}"></div>
          <p class="col-5">◽${product.nombre}</p>
          <div class="col-1"> <p>$${product.precio}</p> </div>
          <div class="col-1"><button type="button" class="btnEliminar btn btn-danger" data-index="${index}">X</button></div>
        `;
        modalContainer.append(carritoContent);
      
        const btnEliminar = carritoContent.querySelector(".btnEliminar");
        btnEliminar.onclick = (event) => {
          const productIndex = parseInt(event.target.dataset.index);
          carritoContent.remove(); // Elimina el contenido del carrito en la interfaz
          carro.splice(productIndex, 1); // Elimina el producto del array del carro
        
          const total = carro.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);
          totalCarro.innerHTML = `<p id="totalAPagar">Total a pagar $: ${total}</p>`;
        };
      });

    const total = carro.reduce((acumulador, elemento,)=> acumulador + elemento.precio, 0)
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
        Swal.fire({
            title: '¿Deseas finalizar tu compra?',
            text: "Una vez finalizada, recibiras tu pedido dentro de las proximas 48hs",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#d33',
            confirmButtonColor: '#198754',
            confirmButtonText: 'Comprar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Genial!',
                'Enviaremos tu pedido lo antes posible.',
                'success'
              )
              carro=[];
                totalCarro.innerHTML = `<p id=totalAPagar> Total a pagar $: 0</p>
                `;
                modalContainer.style.display = "none";
            }
          })


        
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



// Agrega el evento click fuera del bucle de renderizarProductos
contenedorProds.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("compra")) {
      const prodId = parseInt(target.id);
      const prodACarro = [...cervezas, ...gaseosas, ...gines, ...vodkas, ...vinos].find(
        (producto) => producto.id === prodId
      );
      prodACarro.contador += 1
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
    
    //calcular total del carro
    const total = carro.reduce((acumulador, elemento,)=> acumulador + elemento.precio, 0)

    //guardar carro en el local storage
    localStorage.setItem("carro", JSON.stringify(carro));

}

function cargarCarro(productos) {
    

    // Calcular total del carro
    const total = productos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);

    
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


let totalProds = [];

if (cervezas) {
  totalProds = totalProds.concat(cervezas);
}

if (gaseosas) {
  totalProds = totalProds.concat(gaseosas);
}

if (gines) {
  totalProds = totalProds.concat(gines);
}

if (vodkas) {
  totalProds = totalProds.concat(vodkas);
}

if (vinos) {
  totalProds = totalProds.concat(vinos);
}


function filtrarNombres(nombre) {
    const filtrados = totalProds.filter((producto) => producto.nombre.toLowerCase().includes(nombre.toLowerCase()) );
    return filtrados;
}

botonBuscar.onclick = () => {
    event.preventDefault();

    let listaFiltrados = filtrarNombres(filtroNombre.value);
    contenedorProds.innerHTML= "";
    renderizarProductos(listaFiltrados);
    console.log(listaFiltrados);
};


async function obtenerJsonCervezas(){
  const URLCERVEZAS = "./scripts/cervezas.json"; 
  const respuesta = await fetch(URLCERVEZAS);
  const data =  await respuesta.json();
  console.log(data);
  cervezas = data;
  renderizarProductos(cervezas);
}

async function obtenerJsonGaseosas(){
  const URLGASEOSAS = './scripts/gaseosas.json'
  const respuesta = await fetch(URLGASEOSAS);
  const data =  await respuesta.json();
  console.log(data);
  gaseosas = data;
  renderizarProductos(gaseosas);
}

async function obtenerJsonGines(){
  const URLGINES = './scripts/gines.json';
  const respuesta = await fetch(URLGINES);
  const data =  await respuesta.json();
  console.log(data);
  gines = data;
  renderizarProductos(gines);
}

async function obtenerJsonVodkas(){
  const URLVODKAS = './scripts/vodkas.json';
  const respuesta = await fetch(URLVODKAS);
  const data =  await respuesta.json();
  console.log(data);
  vodkas = data;
  renderizarProductos(vodkas);
}

async function obtenerJsonVinos(){
  const URLVINOS = './scripts/vinos.json';
  const respuesta = await fetch(URLVINOS);
  const data =  await respuesta.json();
  console.log(data);
  vinos = data;
  renderizarProductos(vinos);
}



