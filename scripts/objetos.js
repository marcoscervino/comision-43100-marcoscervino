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
cervezas.push(new cerveza (1, "Heineken","Heineken Rubia", "473ml", 360, "https://ardiaprod.vtexassets.com/arquivos/ids/231095/Cerveza-Heineken-Lata-473-ml-_1.jpg?v=638026467435200000"));
cervezas.push(new cerveza (2, "Stella Artois","Stella Rubia", "473ml", 340, "https://rojoynegro.com.ar/pedidos/wp-content/uploads/2020/07/cerveza-stella-artois-lata-473-ml1-ebf7da00967ac0788215684053276672-640-0.jpg"));
cervezas.push(new cerveza (3, "Stella Artois","Stella Blanche", "473ml", 350, "https://d1on8qs0xdu5jz.cloudfront.net/webapp/images/productos/b/0000022000/22743.jpg"));
cervezas.push(new cerveza (4, "Stella Artois","Stella Noire", "473ml", 345, "https://d2r9epyceweg5n.cloudfront.net/stores/001/147/470/products/cerveza-negra-stella-artois-noire1-39ff01a226ac96ef4f16324002445347-640-0.jpg"));



//Declaro un array de gaseosesas y cargo elementos
const gaseosas = [];
gaseosas.push(new gaseosa (5, "Schweppes","Schweppes Pomelo", "1500ml", 460, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/144/141/products/whatsapp-image-2021-08-25-at-11-12-461-a04696eaceadd78ccc16299008628662-640-0.jpeg"));
gaseosas.push(new gaseosa (6, "Schweppes","Schweppes Tonica", "1500ml", 430, "https://roldanonline.com.ar/wp-content/uploads/2020/07/7790895006715.jpg"));
gaseosas.push(new gaseosa (7, "Coca Cola","Coca Cola Clasica", "1500ml", 510, "https://d2izjnmtylvtfh.cloudfront.net/21880626-thickbox_default/gaseosa-coca-cola-original-175-litros.jpg"));
gaseosas.push(new gaseosa (8, "Coca Cola","Coca Cola Zero", "1500ml", 490, "https://lanegradistribuidora.com/wp-content/uploads/2021/07/04_Coca-Cola-Zero-1.5l.png"));




//Declaro un array de gin y cargo elementos
const gines = [];
gines.push(new gin (9, "Gordons","Gordons clasic", "700ml", 2660, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/gordons1-a1ad30e9e88b3c185a16045862807447-640-0.webp"));
gines.push(new gin (10, "Beefeater","Beefeater clasic", "1000ml", 5040, "https://d3ugyf2ht6aenh.cloudfront.net/stores/871/106/products/beefeater1-15a2f0d14da29dbd9615360952304664-640-0.png"));
gines.push(new gin (11, "Beefeater","Beefeater Orange", "1000ml", 7040, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/beefeater-orange-ok1-de1bcc83ad833d40eb16419178934670-640-0.webp"));
gines.push(new gin (12, "Brighton","Brighton Clasic", "1000ml", 2190, "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/b/5/9/b595fb48c31d63ce3a5c1e92dba6a89a"));





//Declaro un array de vodkas y cargo elementos
const vodkas = [];
vodkas.push(new vodka (13, "Smirnoff","Smirnoff Clasic", "700ml", 3560, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/smirnoff1-be20bf666fc07d8cfb16189266503679-640-0.webp"));
vodkas.push(new vodka (14, "Smirnoff","Smirnoff Apple", "700ml", 3950, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/smirnoff-green1-3a6ba08104995a27e416189293228968-640-0.webp"));
vodkas.push(new vodka (15, "Absolut","Absolut clasic", "750ml", 7500, "https://d2r9epyceweg5n.cloudfront.net/stores/001/571/448/products/absolut-clasico-vodka1-e9520d90c751438b4c16208546647606-640-0.jpg"));
vodkas.push(new vodka (16, "Absolut","Absolut raspberry", "750ml", 8200, "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/absolut-rasp1-1dc72fe23114b0e1e416189287138305-640-0.webp"));




//Declaro un array de vinos y cargo elementos
const vinos = [];
vinos.push(new vino (17, "Luigi bosca","Luigi Bosca Malbec", "750ml", 4500, "https://walmartcr.vtexassets.com/arquivos/ids/161818/VINO-TINT-LUIGI-BOSCA-MALBEC-750-ML-VINO-TINT-LUIGI-BOSCA-MALBEC-750-ML-3-26453.jpg?v=637535382667470000"));
vinos.push(new vino (18, "Luigi bosca","Luigi Bosca Cabernet Sauvignon", "750ml", 4400, "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53475_default_big.jpeg"));
vinos.push(new vino (19, "Nieto senetiner","Nieto Senetiner Malbec", "750ml", 3200, "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62397_default_big.jpeg"));
vinos.push(new vino (20, "Trumpeter","Trumpeter Cabernet Franc", "750ml", 4500, "https://www.espaciovino.com.ar/media/default/0001/63/thumb_62976_default_big.jpeg"));