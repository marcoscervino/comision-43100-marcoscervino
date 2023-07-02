//Declaro las class para cargar los objetos de los array

class cerveza{
    constructor(id, marca, nombre, tamaño, precio, foto) {
        this.id = id;
        this.marca   = marca;
        this.nombre  = nombre;
        this.tamaño = tamaño;
        this.precio  = precio;
        this.foto = foto;
    }
}

class gaseosa{
    constructor(id, marca, nombre, tamaño, precio, foto) {
        this.id = id;
        this.marca   = marca;
        this.nombre  = nombre;
        this.tamaño = tamaño;
        this.precio  = precio;
        this.foto = foto;
    }
}

class gin{
    constructor(id, marca, nombre, tamaño, precio, foto) {
        this.id = id;
        this.marca   = marca;
        this.nombre  = nombre;
        this.tamaño = tamaño;
        this.precio  = precio;
        this.foto = foto;
    }
}

class vodka{
    constructor(id, marca, nombre, tamaño, precio, foto) {
        this.id = id;
        this.marca   = marca;
        this.nombre  = nombre;
        this.tamaño = tamaño;
        this.precio  = precio;
        this.foto = foto;
    }
}

class vino{
    constructor(id, marca, nombre, tamaño, precio, foto) {
        this.id = id;
        this.marca   = marca;
        this.nombre  = nombre;
        this.tamaño = tamaño;
        this.precio  = precio;
        this.foto = foto;
    }
}



//Declaro un array de cervezas y cargo elementos
const cervezas = [];
cervezas.push(new cerveza (1, "Heineken","Heineken Rubia", "473ml", 360, "https://i.postimg.cc/qvnrw3Cs/heineken-x473-v2.png"));
cervezas.push(new cerveza (2, "Stella Artois","Stella Rubia", "473ml", 340, "https://i.postimg.cc/fbnzQKhq/cerveza-stella-artois-lata-473-ml1-ebf7da00967ac0788215684053276672-640-0.jpg"));
cervezas.push(new cerveza (3, "Stella Artois","Stella Blanche", "473ml", 350, "https://i.postimg.cc/9X8cQVh7/blanch-473-v2.png"));
cervezas.push(new cerveza (4, "Stella Artois","Stella Noire", "473ml", 345, "https://i.postimg.cc/TY5v2D0z/stella-noire-473.jpg"));



//Declaro un array de gaseosesas y cargo elementos
const gaseosas = [];
gaseosas.push(new gaseosa (5, "Schweppes","Schweppes Pomelo", "1500ml", 460, "https://i.postimg.cc/rmh2sGvk/schweppes-pomelo-15l.jpg"));
gaseosas.push(new gaseosa (6, "Schweppes","Schweppes Tonica", "1500ml", 430, "https://i.postimg.cc/mktfHzsF/schweppes-tonica-15l-v2.png"));
gaseosas.push(new gaseosa (7, "Coca Cola","Coca Cola Clasica", "1500ml", 510, "https://i.postimg.cc/sDMsB8j0/cocacola-15l-v2.png"));
gaseosas.push(new gaseosa (8, "Coca Cola","Coca Cola Zero", "1500ml", 490, "https://i.postimg.cc/prTxJcDr/cocazero-15l-v2.png"));




//Declaro un array de gin y cargo elementos
const gines = [];
gines.push(new gin (9, "Gordons","Gordons Clasic", "700ml", 2660, "https://i.postimg.cc/HsFHb2jW/gordonsgin-750ml-v2.png"));
gines.push(new gin (10, "Beefeater","Beefeater Clasic", "1000ml", 5040, "https://i.postimg.cc/DZ778w0q/beefeater-clasic-1-L.png"));
gines.push(new gin (11, "Beefeater","Beefeater Orange", "1000ml", 7040, "https://i.postimg.cc/W4G2NkNN/beefeater-orange-1l-v2.jpg"));
gines.push(new gin (12, "Brighton","Brighton Clasic", "1000ml", 2190, "https://i.postimg.cc/zvcNtwjj/brighton-700-v2.png"));





//Declaro un array de vodkas y cargo elementos
const vodkas = [];
vodkas.push(new vodka (13, "Smirnoff","Smirnoff Clasic", "700ml", 3560, "https://i.postimg.cc/8c98BppX/smirnoff-clasic-1l-v2.png"));
vodkas.push(new vodka (14, "Smirnoff","Smirnoff Apple", "700ml", 3950, "https://i.postimg.cc/52cdX2k6/smirnoff-green-1l-v2.png"));
vodkas.push(new vodka (15, "Absolut","Absolut Clasic", "750ml", 7500, "https://i.postimg.cc/7ZTHRRjT/absolut-clasico-vodka1-L.jpg"));
vodkas.push(new vodka (16, "Absolut","Absolut Raspberry", "750ml", 8200, "https://i.postimg.cc/tTDpPGn8/absolut-rasp1-L-v2.png"));




//Declaro un array de vinos y cargo elementos
const vinos = [];
vinos.push(new vino (17, "Luigi bosca","Luigi Bosca Malbec", "750ml", 5600, "https://i.postimg.cc/nzVtnSS2/luigibosca-malbec-750ml-v2.png"));
vinos.push(new vino (18, "Luigi bosca","Luigi Bosca Cabernet Sauvignon", "750ml", 4400, "https://i.postimg.cc/zfrrcGn9/luigibosca-cabernet-750ml-v2.png"));
vinos.push(new vino (19, "Nieto senetiner","Nieto Senetiner Malbec", "750ml", 3200, "https://i.postimg.cc/s24rdCm1/nietosenetiner-malbec-750ml-v2.png"));
vinos.push(new vino (20, "Trumpeter","Trumpeter Cabernet Franc", "750ml", 4500, "https://i.postimg.cc/N0Y3xPtt/trumpeter-malbec-750ml-v2.png"));