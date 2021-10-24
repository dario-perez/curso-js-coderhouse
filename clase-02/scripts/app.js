let user = prompt('Por favor, ingresa tu nombre de usuario.');
let balance = " ";

let userLogged = user;


if(userLogged.length >= 6) {
    balance = parseInt(prompt(`¡Bienvenido, ${userLogged}! Por favor, ingresa tu saldo disponible.`));
} else {
    alert('El nombre de usuario debe contener 6 caracteres o más.')
}


let precio1 = 5000;
let precio2 = 10000;
let precio3 = 25000;
let precio4 = 30000;
let precio5 = 20000;

if(balance >= 30000) {
    console.log('Puedes comprar cualquiera de nuestros productos.')
} else if(balance >= 25000) {
    console.log('Puedes comprar el producto 3 o de menor precio.')
} else if(balance >= 20000) {
    console.log('Puedes comprar el producto 5 o de menor precio.')
} else if(balance >= 10000) {
    console.log('Puedes comprar el producto 2 o de menor precio.')
} else if(balance >= 5000) {
    console.log('Puedes comprar el producto 1.')
} else {
    console.log('Saldo insuficiente. Realiza una recarga.')
};




