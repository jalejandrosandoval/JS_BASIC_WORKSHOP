'use strict';

// Ejercicio # 1 ...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let _res = (prompt(`¿Quiere Huevo Frito? A. Si. B. No.`));
let _res1 = (prompt(`¿Quiere Sal? A. Si. B. No.`));

console.group("------ Ejercicio # 1 ------");
    switch(true){
        case _res == "A" && _res1 == "A":
            console.log(`%cFriendo el Huevo...`, _style);
            console.log(`%cHechandole sal al huevo...`, _style);
            console.log(`%cSirviendo en plato el huevo...`, _style);
            break;
        case _res == "A" && _res1 == "B":
            console.log(`%cFriendo el Huevo...`, _style);
            console.log(`%cSirviendo en plato el huevo...`, _style);
            break;
        case _res == "B" && _res1 == "A":
            console.log(`%cCocinando el Huevo...`, _style);
            console.log(`%cHechandole sal al huevo...`, _style);
            console.log(`%cSirviendo en plato el huevo...`, _style);
            break;
        case _res == "B" && _res1 == "B":
            console.log(`%cCocinando el Huevo...`, _style);
            console.log(`%cSirviendo en plato el huevo...`, _style);
            break;
        default:
            alert(`Opción No Permitida. Itente de nuevo!`);
            break;
    }
console.groupEnd();