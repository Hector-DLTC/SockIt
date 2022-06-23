//JSON
let products = JSON.parse(localStorage.getItem("jsonStr"));
console.log(products);
//addItem
function addItem(products){
    console.log(products);
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+products.image +'" class="card-img-top" alt="image" style="max-height: 200px; max-width: 150px; align-content:center;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+products.product+'</h5>\n' +
        // '        <h6 class="card-title">'+products.category+'</h6>\n' +
        '        <p class="card-text">'+products.description+'</p>\n' +
        '        <p class="card-text">'+products.price+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}
//iteracion de funcion addItem
for(let data of products.Items){
    addItem(data)
}