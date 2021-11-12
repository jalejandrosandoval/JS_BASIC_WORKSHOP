'use strict';

/* Ejercicio # 7 ...
    Dados dos números enteros positivos N y D, se dice que D es un divisor 
    de N si el resto de dividir N entre D es 0. Se dice que un número N es perfecto 
    si la suma de sus divisores (excluido el propio N) es N. Por ejemplo 28 es 
    perfecto, pues sus divisores (excluido elv28) son: 1, 2, 4, 7 y 14 y su suma es 
    1+2+4+7+14=28. Hacer un organigrama que dado un número N nos diga si es o no perfecto.
*/

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;
            
let N = parseInt(prompt(`Ingrese el Número a verificar:`));
let contSum = 0;

for(var D=0; D<N; D++)
{
    if(N % D == 0)
        contSum += D;
}

console.group("------ Ejercicio # 7 ------");
    (contSum == N) ? console.log(`%cEl número ${N} es perfecto.`, _style) :
        console.log(`%cEl número ${N} no es perfecto.`, _style);
console.groupEnd();