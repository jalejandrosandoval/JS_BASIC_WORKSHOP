'use strict';

// Ejercicio # 1 ...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let sum = 0;

console.group("------ Ejercicio # 1 ------");
    for(var i=0; i<10; i++){
        sum = sum + (i+1);
    }
    console.log(`%cLa Sumatoria de los primeros 10 números es ${sum}`, _style);
console.groupEnd();