
//JSON
let products = [{

    "id": {
    "brand": "Happy Socks",
    "price": 109.95,
    "description": "Panther, 1 par, 85 % cachemir, altura hasta la rodilla",
    "category": "largos",
    "image": "https://m.media-amazon.com/images/I/61OUwrv4dpL._AC_UL1000_.jpg",
    "color": "white" 
}}+
    {
        "id": 2,
        "brand": "Pantherella",
        "price": 109.95,
        "description": "Happy Socks Party Animal Singing Birthday Gift Box Calcetines para Mujer",
        "category": "hastaRodilla",
        "image": "https://m.media-amazon.com/images/I/81BvqZs1BlL._AC_UL1500_.jpg",
        "color": "grey" 
    }+
    {
        "id": 3,
        "brand": "Stance",
        "price": 109.95,
        "description": "Stance Hombres Calcetines The Fourth",
        "category": "largos",
        "image": "https://m.media-amazon.com/images/I/81J0mLhOnQL._AC_UL1500_.jpg",
        "color": "red" 
    }+
    {
        "id": 4,
        "brand": "Gallo",
        "price": 109.95,
        "description": "Gallo Calcetines largos vestir hombre rayas colores",
        "category": "largos",
        "image": "https://m.media-amazon.com/images/I/71iNKN5TZIL._AC_UL1500_.jpg",
        "color": "black" 
    }+
    {
        "id": 5,
        "brand": "K-BELL",
        "price": 109.95,
        "description": "K. Bell azul calcetines de mujer",
        "category": "largos",
        "image": "https://m.media-amazon.com/images/I/81JaehXDL+L._AC_UL1500_.jpg",
        "color": "blue" 
    }+
    {
        "id": 5,
        "brand": "Carter",
        "price": 109.95,
        "description": "Simple Joys by Carter's Calcetines Deportivos Bebé-Niños, Pack de 12",
        "category": "cortos",
        "image": "https://m.media-amazon.com/images/I/812AhQT8-yL._AC_UL1500_.jpg",
        "color": "mix" 
    }+
    {
        "id": 6,
        "brand": "PUMA",
        "price": 109.95,
        "description": "PUMA Calcetines de corte bajo para hombre, 8 unidades",
        "category": "cortos",
        "image": "https://m.media-amazon.com/images/I/81M9mOv4YJS._AC_SL1500_.jpg",
        "color": "black" 
    }+
    {
        "id": 7,
        "brand": "PUMA",
        "price": 109.95,
        "description": "PUMA Calcetines de corte bajo para hombre, 8 unidades",
        "category": "cortos",
        "image": "https://m.media-amazon.com/images/I/81M9mOv4YJS._AC_SL1500_.jpg",
        "color": "black" 
    }+
    {
        "id": 8,
        "brand": "Wilson",
        "price": 109.95,
        "description": "10 Piezas Tin para Hombre, Afelpado, Color Negro , Talla Única, 8792",
        "category": "cortos",
        "image": "https://m.media-amazon.com/images/I/51E5Uoqy16L._AC_SL1200_.jpg",
        "color": "black" 
    }+
    {
        "id": 9,
        "brand": "FruitLoom",
        "price": 109.95,
        "description": "Fruit of the Loom Calcetines de trabajo acolchados para hombre, 10 pares",
        "category": "cortos",
        "image": "https://m.media-amazon.com/images/I/917aNYmnaJL._AC_SL1500_.jpg",
        "color": "black" 
    }+
    {
        "id": 10,
        "brand": "Timberland",
        "price": 109.95,
        "description": "Timberland Paquete de 4 calcetines medio acolchados para hombre",
        "category": "cortos",
        "image": "https://m.media-amazon.com/images/I/81qsoQ9q8BL._AC_SL1500_.jpg",
        "color": "grey" 
    }

]
function addItem(products){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+products.image +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+products.brand+'</h5>\n' +
        '        <h6 class="card-title">'+products.category+'</h6>\n' +
        '        <p class="card-text">'+products.description+'</p>\n' +
        '        <p class="card-text">'+products.price+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}



addItem({'brand':'Happy Socks',
    'image':'https://m.media-amazon.com/images/I/61OUwrv4dpL._AC_UL1000_.jpg',
    'description':'Panther, 1 par, 85 % cachemir, altura hasta la rodilla',
    'price':'1120',
    'category':'Large'
});
addItem({'brand':'Pantherella',
    'image':'https://m.media-amazon.com/images/I/81BvqZs1BlL._AC_UL1500_.jpg',
    'description':'Happy Socks Party Animal Singing Birthday Gift Box Calcetines para Mujer',
    'price':'1120',
    'category':'Hasta la rodilla'
});
addItem({'brand':'Stance',
    'image':'https://m.media-amazon.com/images/I/81J0mLhOnQL._AC_UL1500_.jpg',
    'description':'Stance Hombres Calcetines The Fourth',
    'price':'1120',
    'category':'Hasta la rodilla'
});
addItem({'brand':'Gallo',
    'image':'https://m.media-amazon.com/images/I/71iNKN5TZIL._AC_UL1500_.jpg',
    'description':'Gallo Calcetines largos vestir hombre rayas colores',
    'price':'1120',
    'category':'Hasta la rodilla'
});
addItem({'brand':'K-BELL',
    'image':'https://m.media-amazon.com/images/I/81JaehXDL+L._AC_UL1500_.jpg',
    'description':'K. Bell azul calcetines de mujer',
    'price':'1120',
    'category':'largos'
});
addItem({'brand':'Carter',
    'image':'https://m.media-amazon.com/images/I/812AhQT8-yL._AC_UL1500_.jpg',
    'description':'Simple Joys by Carter Calcetines Deportivos Bebé-Niños, Pack de 12',
    'price':'1120',
    'category':'cortos'
});
addItem({'brand':'PUMA',
    'image':'https://m.media-amazon.com/images/I/81M9mOv4YJS._AC_SL1500_.jpg',
    'description':'PUMA Calcetines de corte bajo para hombre, 8 unidades',
    'price':'1120',
    'category':'cortos'
});
addItem({'brand':'PUMA',
    'image':'https://m.media-amazon.com/images/I/81M9mOv4YJS._AC_SL1500_.jpg',
    'description':'PUMA Calcetines de corte bajo para hombre, 8 unidades',
    'price':'1120',
    'category':'cortos'
});
addItem({'brand':'PUMA',
    'image':'https://m.media-amazon.com/images/I/81M9mOv4YJS._AC_SL1500_.jpg',
    'description':'PUMA Calcetines de corte bajo para hombre, 8 unidades',
    'price':'1120',
    'category':'cortos'
});
addItem({'brand':'PUMA',
    'image':'https://m.media-amazon.com/images/I/81M9mOv4YJS._AC_SL1500_.jpg',
    'description':'PUMA Calcetines de corte bajo para hombre, 8 unidades',
    'price':'1120',
    'category':'cortos'
});
addItem({'brand':'PUMA',
    'image':'https://m.media-amazon.com/images/I/81M9mOv4YJS._AC_SL1500_.jpg',
    'description':'PUMA Calcetines de corte bajo para hombre, 8 unidades',
    'price':'1120',
    'category':'cortos'
});
// for (let i = 0; i < JSON.parse(id); i++){
// addItem(`${brand} + ${image} + ${description} + ${price} + ${category} `
// )};

// let data = JSON.stringify(products);

// for (let key in data.id){
//     console.log(key, data.id[0]);
// }

