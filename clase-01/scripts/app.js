let userName = prompt('Escribe tu nombre de usuario.');
let userAge = parseInt(prompt(`¡Bienvenido ${userName}! Por favor, ingresa tu edad.`));

let birthYear = new Date().getFullYear() - userAge;
alert(`Tu año de nacimiento es ${birthYear}.`);

if(userAge >= 18) {
    console.log('Eres mayor de edad.')
} else {
    console.log('Eres menor de edad.')
};




