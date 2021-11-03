
const btn = document.getElementById('btn');
btn.addEventListener('click', addItems);
btn.addEventListener('click', cartCheck);


let arr = [];
let input = "";


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






















