'use strict';

// Ejercicio # 2 ...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let CATa = 0.0, CATb = 0.0;

while (true) {
    CATa = parseInt(prompt(`Cateto A:`));
    CATb = parseInt(prompt(`Cateto B:`));
    if ((!isNaN(CATa) && CATa != null && CATa != "") || (!isNaN(CATb) && CATb != null && CATb != ""))  {
        break;
    } else {
        continue;
    }
}

let HIP = Math.sqrt(CATa) + Math.sqrt(CATb);

console.group("------ Ejercicio # 2 ------");
    console.log(`%cCateto A: ${CATa} - Cateto B: ${CATb}`, _style);
    console.log(`%cHipotenusa: ${HIP}`, _style);
console.groupEnd();