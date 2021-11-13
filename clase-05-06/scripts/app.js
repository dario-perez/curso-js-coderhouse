
const btn = document.getElementById('btn');
const container = document.getElementById('container')
const stockContainer = document.getElementById('stock-container')
const stock = document.getElementById('instock');
btn.addEventListener('click', addItems);
btn.addEventListener('click', cartCheck);


let arr = [];
let input = "";


let inStock = products.map((product) => {
    //Div created
    let stockDiv = document.createElement('div');
    stockDiv.classList.add('stock-card');
    stockContainer.appendChild(stockDiv);

    //Pruduct name
    let productName = document.createElement('h4');
    productName.innerHTML = `Producto: ${product.name}`;
    stockDiv.appendChild(productName);

    //Product price
    let productPrice = document.createElement('p');
    productPrice.innerHTML = `Precio: $${product.price}`;
    stockDiv.appendChild(productPrice);

    //Product stock
    let productStock = document.createElement('p');
    productStock.innerHTML = `Stock: ${product.stock}`;
    stockDiv.appendChild(productStock);

    //addToCart button
    let addToCart = document.createElement('button');
    addToCart.innerHTML = 'Agregar a Carrito';
    addToCart.classList.add('btn')
    stockDiv.appendChild(addToCart);

    //Clg
    console.log(product)
})


//Solicita productos y los agrega al carrito.
function addItems() {
    arr = [];

    do {
        input = prompt('Por favor, ingresa los productos que deseas comprar.');
        arr.push(input);

    } while (input);

        arr.filter(Boolean).map((i) => {
            let item = document.createElement("li");
            item.innerHTML = i.charAt(0).toUpperCase() + i.slice(1);
            document.getElementById('container').appendChild(item);
            return console.log(`${i} se ha agregado al carrito.`);
        });
}


//Comprueba el estado del carrito y cuenta los productos.
function cartCheck() {
    if (arr.filter(Boolean).length) {
        document.getElementById('message').innerHTML = `El carrito contiene ${arr.length - 1} productos`
    }
}



