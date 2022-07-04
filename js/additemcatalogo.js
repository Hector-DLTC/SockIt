function addItem(products){
    console.log(products);
    const itemHTML = 
        '<div class="card" style="width: 100%; min-width:150px; margin:0px; border:solid thin;">\n' +
        '    <img src="'+products.img +'" class="card-img-top" alt="image" style="height:200px;max-width: 100%;vertical-align: middle;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+products.product+'</h5>\n' +
        // '        <h6 class="card-title">'+products.category+'</h6>\n' +
        '        <p class="card-text" style="overflow: auto; max-height: 50%;">'+products.description+'</p>\n' +
        '        <p class="card-text"style=" text-align: right;" > $'+products.price+'</p>\n' +
        '        <div><a href="#" class="btn btn-primary" style="position: absolute;top: 86%;">Añadir</a></div>\n' +
        '    </div>\n' +
        '</div>\n' ;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
addItem({'product':'Calcetas QATAR WHITE',
    'img':'./img/img-catalogo/qatar01.png',
    'description':'Calcetas oficiales de la selección mexicana QATAR 2022.',
    'price':'350'
});

addItem({'product':'Calcetas QATAR PINK',
    'img':'./img/img-catalogo/qatar02.png',
    'description':'Calcetas oficiales de la selección mexicana QATAR 2022.',
    'price':'250'
});

addItem({'product':'Calcetas QATAR RED',
    'img':'./img/img-catalogo/qatar03.png',
    'description':'Calcetas oficiales de la selección mexicana QATAR 2022.',
    'price':'250'
});

addItem({'product':'Mut-toe',
    'img':'./img/img-catalogo/mute-toe cover-cubrededos.jpg',
    'description':'Calcetines  cubre dedos.',
    'price':'125'
});

addItem({'product':'Ped-Tobilleros',
    'img':'./img/img-catalogo/ped-tobilleros-low cut.jpg',
    'description':'Calcetines tobilleros Low Cut.',
    'price':'150'
});

addItem({'product':'Calcetín a la rodilla ',
    'img':'./img/img-catalogo/knee high-altos.jpg',
    'description':'Calcetín a la rodilla altos',
    'price':'190'
});

addItem({'product':'Calcetines de animales  |PERROS|',
    'img':'./img/img-catalogo/animales01.png',
    'description':'Calcetines con forma de perritos.',
    'price':'250'
});

addItem({'product':'Calcetines de animales |VARIOS| |NUEVOS|',
    'img':'./img/img-catalogo/animales02.png',
    'description':'Calcetines con forma de animales.',
    'price':'250'
});

addItem({'product':'Calcetines de animales |GATOS|',
    'img':'./img/img-catalogo/animales03.png',
    'description':'Calcetines con forma de gatitos.',
    'price':'250'
});

addItem({'product':'Calcetines de animales |VARIOS|',
    'img':'./img/img-catalogo/animales04.png',
    'description':'Calcetines con forma de animales.',
    'price':'250'
});
