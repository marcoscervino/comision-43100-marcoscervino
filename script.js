//ACESSO A LA TIENDA

alert("Bienvenido a la mejor tienda de bebidas.\n \nBest Bar");
//Declaro variables para el acceso
let usuario;
let password;
let acceso = false;

//Consulta modo de acceder: Usuario // Invitado
let ingreso = prompt("Si desea ingresar con su usuario, digite S\nSi desea navegar como anonimo, digite A");
//Acceso como invitado
while(((ingreso == 'a' || ingreso == 'A') && acceso == false)) {
    acceso = true;
    alert("Bienvenido invitado")
}
//Acesso con usuario predeterminado
while(((ingreso == 's' || ingreso == 'S') && acceso == false)) {
    usuario = prompt("Ingrese su nombre de usuario");
    password = prompt("Ingrese su constraseña");
    if (usuario == "marcos" && password == 123456) {
        alert("Acceso permitido.\nBienvenido usuario "+usuario)
        acceso = true;
    }
    else{
        alert("Acceso incorrecto, intente nuevamente")
    }   
}

let tienda = prompt("Para ingresar a la tienda, digite S").toLowerCase();
console.log(tienda.toLowerCase())
// Se crea una variable para acumular el total de la compra
let total = 0;
// Funcion para sumar el total de los productos seleccionados
function SumaTotal(subtotal){
    total = total + subtotal;
    alert("El total en el carro de compras es $"+total);}


//Declaro las class para cargar los objetos de los array

class cerveza{
    constructor(id, marca, nombre, tamaño, precio) {
        this.id = id;
        this.marca   = marca;
        this.nombre  = nombre;
        this.tamaño = tamaño;
        this.precio  = precio;
    }
}

class gaseosa{
    constructor(id, marca, nombre, tamaño, precio) {
        this.id = id;
        this.marca   = marca;
        this.nombre  = nombre;
        this.tamaño = tamaño;
        this.precio  = precio;
    }
}

class gin{
    constructor(id, marca, nombre, tamaño, precio) {
        this.id = id;
        this.marca   = marca;
        this.nombre  = nombre;
        this.tamaño = tamaño;
        this.precio  = precio;
    }
}

class vodka{
    constructor(id, marca, nombre, tamaño, precio) {
        this.id = id;
        this.marca   = marca;
        this.nombre  = nombre;
        this.tamaño = tamaño;
        this.precio  = precio;
    }
}

class vino{
    constructor(id, marca, nombre, tamaño, precio) {
        this.id = id;
        this.marca   = marca;
        this.nombre  = nombre;
        this.tamaño = tamaño;
        this.precio  = precio;
    }
}



//Declaro un array de cervezas y cargo elementos
const cervezas = [];
cervezas.push(new cerveza (1, "Heineken","Heineken Rubia", "473ml", 360));
cervezas.push(new cerveza (2, "Stella Artois","Stella Rubia", "473ml", 340));
cervezas.push(new cerveza (3, "Stella Artois","Stella Blanche", "473ml", 350));
cervezas.push(new cerveza (4, "Stella Artois","Stella Noire", "473ml", 345));



//Declaro un array de gaseosesas y cargo elementos
const gaseosas = [];
gaseosas.push(new gaseosa (1, "Schweppes","Schweppes pomelo", "1000ml", 460));
gaseosas.push(new gaseosa (2, "Schweppes","Schweppes tonica", "1000ml", 430));
gaseosas.push(new gaseosa (3, "Coca Cola","Coca Cola Clasica", "1500ml", 510));
gaseosas.push(new gaseosa (4, "Coca Cola","Coca Cola Zero", "1500ml", 490));




//Declaro un array de gin y cargo elementos
const gines = [];
gines.push(new gin (1, "Gordons","Gordons clasic", "750ml", 2660));
gines.push(new gin (2, "Beefeater","Beefeater clasic", "1000ml", 5040));
gines.push(new gin (3, "Beefeater","Beefeater orange", "1000ml", 7040));
gines.push(new gin (4, "Brighton","Brighton Clasic", "1000ml", 2190));





//Declaro un array de vodkas y cargo elementos
const vodkas = [];
vodkas.push(new vodka (1, "Smirnoff","Smirnoff clasic", "1000ml", 3560));
vodkas.push(new vodka (2, "Smirnoff","Smirnoff Apple", "1000ml", 3950));
vodkas.push(new vodka (3, "Absolut","Absolut clasic", "1000ml", 7500));
vodkas.push(new vodka (4, "Absolut","Absolut raspberry", "1000ml", 8200));




//Declaro un array de vinos y cargo elementos
const vinos = [];
vinos.push(new vino (1, "Luigi bosca","Luigi bosca malbec", "750ml", 4500));
vinos.push(new vino (2, "Luigi bosca","Luigi bosca cabernet sauvignon", "750ml", 4400));
vinos.push(new vino (3, "Nieto senetiner","Nieto senetiner malbec", "750ml", 3200));
vinos.push(new vino (4, "Nieto senetiner","Nieto senetiner cabernet franc", "750ml", 3500));

//Declaro un filtrado para mostrar los elementos por prompt
const concatenacionCervezas = cervezas.map((cerveza, indice) => `${indice + 1} - ${cerveza.nombre} x${cerveza.tamaño} $ ${cerveza.precio}`).join('\n');

const concatenacionGaseosas = gaseosas.map((gaseosa, indice) => `${indice + 1} - ${gaseosa.nombre} x${gaseosa.tamaño} $ ${gaseosa.precio}`).join('\n');

const concatenacionGines = gines.map((gin, indice) => `${indice + 1} - ${gin.nombre} x${gin.tamaño} $ ${gin.precio}`).join('\n');

const concatenacionVodkas = vodkas.map((vodka, indice) => `${indice + 1} - ${vodka.nombre} x${vodka.tamaño} $ ${vodka.precio}`).join('\n');

const concatenacionVinos = vinos.map((vino, indice) => `${indice + 1} - ${vino.nombre} x${vino.tamaño} $ ${vino.precio}`).join('\n');


while(tienda == "s"){
    alert("Seleccione la categoria de producto que desea comprar")
    let prod = prompt("1 - Cervezas \n2 - Gaseosas \n3 - Gines \n4 - Vodkas \n5 - Vinos")

//declaro switch para elegir la categoria
switch(prod){
    case "1":
        alert("Seleccionaste Cervezas");
        console.table(cervezas);
        let selectCervezas = prompt(concatenacionCervezas)
        //Declaro un switch para seleccionar el producto
        switch(selectCervezas){
            case "1":
                alert("Seleccionaste Heineken Rubia x473ml $360");
                SumaTotal(360);
                break;

            case "2":
                alert("Seleccionaste Stella Rubia x473ml $340");
                SumaTotal(340);
                break;

            case "3":
                alert("Seleccionaste Stella Blanche x473ml $350");
                SumaTotal(350);
                break;

            case "4":
                alert("Seleccionaste Stella Noire x473ml $345");
                SumaTotal(345);
                break;
            
            default:
                alert("Codigo incorrecto");
                break;
            }
        break;

    case "2":
        alert("Seleccionaste Gaseosas");
        console.table(gaseosas);
        let selectGaseosas = prompt(concatenacionGaseosas)
        //Declaro un switch para seleccionar el producto
        switch(selectGaseosas){
            case "1":
                alert("Seleccionaste Schweppes pomelo x1000ml $460");
                SumaTotal(460);
                break;

            case "2":
                alert("Seleccionaste Schweppes tonica x1000ml $430");
                SumaTotal(340);
                break;

            case "3":
                alert("Seleccionaste Coca Cola Clasica x1500ml $510");
                SumaTotal(510);
                break;

            case "4":
                alert("Seleccionaste Coca Cola Zero x1500ml $490");
                SumaTotal(490);
                break;

            default:
                alert("Codigo incorrecto");
                break;
            }
    break;

    case "3":
        alert("Seleccionaste Gines");
        console.table(gines);
        let selectGines = prompt(concatenacionGines)
        //Declaro un switch para seleccionar el producto
        switch(selectGines){
            case "1":
                alert("Seleccionaste Gordons clasic x750ml $2660");
                SumaTotal(2660);
                break;

            case "2":
                alert("Seleccionaste Beefeater clasic x1000ml $5040");
                SumaTotal(5040);
                break;

            case "3":
                alert("Seleccionaste Beefeater orange x1000ml $7040");
                SumaTotal(7040);
                break;

            case "4":
                alert("Seleccionaste Brighton Clasic x1000ml $2190");
                SumaTotal(2190);
                break;

            default:
                alert("Codigo incorrecto");
                break;
            }
    break;

    case "4":
        alert("Seleccionaste Vodkas");
        console.table(vodkas);
        let selectVodkas = prompt(concatenacionVodkas)
        //Declaro un switch para seleccionar el producto
        switch(selectVodkas){
            case "1":
                alert("Seleccionaste Smirnoff clasic x1000ml $3560");
                SumaTotal(3560);
                break;

            case "2":
                alert("Seleccionaste Smirnoff Apple x1000ml $3950");
                SumaTotal(3950);
                break;

            case "3":
                alert("Seleccionaste Absolut clasic x1000ml $7500");
                SumaTotal(7500);
                break;

            case "4":
                alert("Seleccionaste Absolut raspberry x1000ml $8200");
                SumaTotal(8200);
                break;

            default:
                alert("Codigo incorrecto");
                break;
            }
    break;

    case "5":
        alert("Seleccionaste Vinos");
        console.table(vinos);
        let selectVinos = prompt(concatenacionVinos)
        //Declaro un switch para seleccionar el producto
        switch(selectVinos){
            case "1":
                alert("Seleccionaste Luigi bosca malbec x750ml $4500");
                SumaTotal(4500);
                break;

            case "2":
                alert("Seleccionaste Luigi bosca cabernet sauvignon x750ml $4400");
                SumaTotal(4400);
                break;

            case "3":
                alert("Seleccionaste Nieto senetiner malbec x750ml $3200");
                SumaTotal(3200);
                break;

            case "4":
                alert("Seleccionaste Nieto senetiner cabernet franc x750ml $3500");
                SumaTotal(3500);
                break;

            default:
                alert("Codigo incorrecto");
                break;
            }
    break;

    default:
        alert("Seleccionaste Codigo incorrecto");
        break;
}
tienda = prompt("Para comprar otro producto, digite S")
}   
if (tienda != "s"){
    alert("Gracias por tu compra 😎");
}