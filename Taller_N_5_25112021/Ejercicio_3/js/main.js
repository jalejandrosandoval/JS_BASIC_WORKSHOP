'use strict';

// Ejercicio # 3 ...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let _Radio = 0, _Height = 0;

while (true) {
    _Radio = parseInt(prompt(`Radio:`));
    _Height = parseInt(prompt(`Altura:`));
    if ((!isNaN(_Radio) && _Radio != null && _Radio != "") || (!isNaN(_Height) && _Height != null && _Height != ""))  {
        break;
    } else {
        continue;
    }
}

let _Vol = (Math.PI * Math.pow(_Radio, 2) * _Height);
let _LateralZone = (2 * Math.PI * _Radio * _Height);

console.group("------ Ejercicio # 3 ------");
    console.log(`%cRadio: ${_Radio} - Volumen: ${_Height}`, _style);
    console.log(`%cVolumen: ${_Vol}`, _style);
    console.log(`%cArea Lateral: ${_LateralZone}`, _style);
console.groupEnd();