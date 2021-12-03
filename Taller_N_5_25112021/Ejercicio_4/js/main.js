'use strict';

// Ejercicio # 4 ...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let _CantNum = parseInt(prompt("Cantidad de Números a Ingresar:"));
let _Nums = new Array(_CantNum).fill(null);

for(var i=0; i<_CantNum; i++){
    _Nums[i] = parseInt(prompt(`Ingrese el Número ${i+1}:`));
}

console.group("------ Ejercicio # 4 ------");
    console.log(`%cNúmeros Ingreasados:`, _style, Object.values(_Nums));
    console.log(`%cOrden de los Números:`, _style, Object.values(
        _Nums.sort(function (a, b){
            return a - b;
        })
    ));
console.groupEnd();