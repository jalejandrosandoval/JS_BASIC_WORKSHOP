'use strict';

// Operadores Condicionales IF - Else...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let _age = parseInt(prompt(`Ingrese la edad:`));

console.group("Operadores Condicionales Switch Case...");
    switch(true){
        case _age >= 18:
            console.log(`%cEs mayor de Edad`, _style);
            break;
        default:
            console.log(`%cLa edad ingresada no cumple con los parámetros..`, _style);
            break;
    }
console.groupEnd();