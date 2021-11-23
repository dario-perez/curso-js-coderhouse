//_________________________________________________________________variables


const btn = document.getElementById('btn');
const btnRemove = document.getElementById('btn-remove');
const container = document.getElementById('container');
const productsContainer = document.getElementById('products-container');
const stockContainer = document.getElementById('stock-container');
const stock = document.getElementById('instock');
const errorDiv = document.getElementById('error');
const productForm = document.getElementById('product-form');
const productInput = document.getElementById('product-input')

let productArr = [];
let inCartProducts = [];





//_________________________________________________________________events


btn.addEventListener('click', cartCheck);





//_________________________________________________________________functions


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


//Add products to cart.
function addItems() {
    const productValue = productInput.value.trim();
    productForm.reset();
    
    productArr = []
    productArr.push(productValue);

    if (productValue === '') {
        //Show error
        errorDiv.classList.remove('hidden-error')
        setTimeout(() => {
            errorDiv.classList.add('hidden-error')
        }, 2000);
    } else if (productValue) {
        //added to cart
        productArr.map((i) => {
            let item = document.createElement('div');
            item.innerHTML = i.charAt(0).toUpperCase() + i.slice(1);
            item.classList.add('item-div');
            productsContainer.appendChild(item);
            inCartProducts.push(i)

            return console.log(`${i} se ha agregado al carrito.`);
        });
    }

    
    //Store data in localStore
    for (let i = 0; i < inCartProducts.length; i++) {
        localStorage.setItem(`Producto ${i}`, inCartProducts[i]);
    }
}


//Remove all products from cart
function removeItems() {
    while(productsContainer.firstChild) {
        productsContainer.removeChild(productsContainer.firstChild);
    }
}


//Check the state of cart and count the products.
function cartCheck() {
    if (inCartProducts.filter(Boolean).length) {
        document.getElementById('message').innerHTML = `El carrito contiene ${inCartProducts.length} productos`
    }
}




