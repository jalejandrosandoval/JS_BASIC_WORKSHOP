'use strict';

/* Ejercicio # 4 ...
    Realizar un programa de procesos en el que se almacenen 3 
    números en 3 variables A, B y C. El diagrama debe decidir 
    cual es el mayor y cual es el menor
*/

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let A = parseInt(prompt(`Ingrese el Número 1:`));
let B = parseInt(prompt(`Ingrese el Número 2:`));
let C = parseInt(prompt(`Ingrese el Número 3:`));

MayorNumbers(A, B, C);

function MayorNumbers(_num1, _num2, _num3){

    let numbers = [_num1, _num2, _num3];
    console.group("------ Ejercicio # 4 ------");
        console.log(`%cEl número mayor es ${Math.max(...numbers)}.`, _style);
    console.groupEnd();
}