'use strict';

// Ejercicio # 1 ...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let num1 = parseInt(prompt(`Ingrese el Número 1:`));
let num2 = parseInt(prompt(`Ingrese el Número 2:`));

console.group("------ Ejercicio # 1 ------");
    num1 > num2 ? console.log(`%cEl número mayor es ${num1}.`, _style) : 
        num1 == num2 ? console.log(`%cEl número ${num1} es igual al número ${num2}...`, _style) :
        console.log(`%cEl número mayor es ${num2}.`, _style);
console.groupEnd();