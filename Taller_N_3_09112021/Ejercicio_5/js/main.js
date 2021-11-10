'use strict';

/* Ejercicio # 5 ...
    Realizar un programa que permita escribir los 100 primeros pares.
*/

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;
console.group("------ Ejercicio # 5 ------");
    let cont = 1;
    for(var i=0; i<200; i=i+2){
        console.log(`%cEl número ${cont++} par es ${i}.`, _style);       
    }
console.groupEnd();