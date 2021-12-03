'use strict';

// Ejercicio # 3 ...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let num1 = parseInt(prompt(`Ingrese el Número 1:`));
let num2 = parseInt(prompt(`Ingrese el Número 2:`));

sumNum(num1, num2);

function sumNum(_num1, _num2){
    var res = num1 + num2;
    console.group("------ Ejercicio # 3 ------");
        console.log(`%cEl resultado es ${res}.`, _style);
    console.groupEnd();
}