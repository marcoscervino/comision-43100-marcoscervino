alert("Bienvenido a la mejor tienda de tecnologia.\n \nTech Store");
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

let tienda = prompt("Para ingresar a la tienda, digite S")
console.log(tienda.toLowerCase())
// Se crea una variable para acumular el total de la compra
let total = 0;
// Funcion para sumar el total de los productos seleccionados
function SumaTotal(subtotal){
    total = total + subtotal;
    alert("El total en el carro de compras es $"+total);}

while(tienda == "s"){
    alert("Seleccione el producto que desea agregar al carro de compras")
    let prod = prompt("1 - Monitor Samsung 27' 75hz $80000 \n2 - Monitor Samsung 24' 144hz $85000 \n3 - Auriculares Logitech G633 $12500 \n4 - Auriculares Hyperx Cloud Flight $11000 \n5 - Mouse Logitech G203 $14500 \n6 - Mouse Razer DeathAdder $ 18000 \n7 - Teclado Logitech G G213 Prodigy $22500 \n8 - Teclado HyperX Alloy $35000")
    //declaro switch para los productos seleccionados
    switch(prod){
        case "1":
            alert("Seleccionaste Monitor Samsung 27' 75hz");
            SumaTotal(80000);
            break;

        case "2":
            alert("Seleccionaste Monitor Samsung 24' 144hz");
            SumaTotal(85000);
        break;

        case "3":
            alert("Seleccionaste Auriculares Logitech G633");
            SumaTotal(12500);
        break;

        case "4":
            alert("Seleccionaste Auriculares Hyperx Cloud Flight");
            SumaTotal(11000);
        break;

        case "5":
            alert("Seleccionaste Mouse Logitech G203");
            SumaTotal(14500);
        break;

        case "6":
            alert("Seleccionaste Mouse Razer DeathAdder");
            SumaTotal(18000);
        break

        case "7":
            alert("Seleccionaste Teclado Logitech G G213 Prodigy");
            SumaTotal(22500);
        break

        case "8":
            alert("Seleccionaste Teclado HyperX Alloy");
            SumaTotal(35000);
        break

        default:
            alert("Codigo incorrecto");
            break;
    }
    tienda = prompt("Para comprar otro producto, digite S")
}   

alert("El total de tu compra es $"+total);