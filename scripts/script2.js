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

const resumenCervezas = cervezas.map((elem) => {
    return {
        nombre: elem.nombre,
        tamaño: elem.tamaño,
        precio: elem.precio
    }
})
console.table(resumenCervezas)

const resumenGaseosas = gaseosas.map((elem) => {
    return {
        nombre: elem.nombre,
        tamaño: elem.tamaño,
        precio: elem.precio
    }
})
console.table(resumenGaseosas)

const resumenGines = gines.map((elem) => {
    return {
        nombre: elem.nombre,
        tamaño: elem.tamaño,
        precio: elem.precio
    }
})
console.table(resumenGines)

const resumenVodkas = vodkas.map((elem) => {
    return {
        nombre: elem.nombre,
        tamaño: elem.tamaño,
        precio: elem.precio
    }
})
console.table(resumenVodkas)

const resumenVinos = vinos.map((elem) => {
    return {
        nombre: elem.nombre,
        tamaño: elem.tamaño,
        precio: elem.precio
    }
})
console.table(resumenVinos)

