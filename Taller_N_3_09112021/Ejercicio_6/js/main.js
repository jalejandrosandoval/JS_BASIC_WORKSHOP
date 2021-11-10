'use strict';

/* Ejercicio # 6 ...
    Realizar un programa que lea N números, calcule y escriba 
    la suma de los pares y el producto de los impares.
*/

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let tam = parseInt(prompt(`Cantidad de Números a Leer:`));
Calculate(tam); 

function Calculate(_tam){

    let contSum = 0, contProd = 1;
    let _numbers = new Array(_tam).fill(null);
    
    for(var i=0; i<_tam; i++){
        let num = parseInt(prompt(`Ingrese el Número ${i+1}:`));
        _numbers[i] = num;
    }

    for(var i=0; i<_tam; i++){
        if(_numbers[i] % 2 === 0)
            contSum = contSum + _numbers[i];
        else
            contProd = contProd * _numbers[i];
    }

    console.group("------ Ejercicio # 6 ------");
        console.log(`%cEl producto de la suma de los pares es ${contSum} y el producto de los impares es ${contProd}.`, _style);
    console.groupEnd();       

}