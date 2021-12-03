'use strict';

// Ejercicio # 2 ...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let tam = parseInt(prompt(`Cantidad de Números a Leer:`));
MaxNum(tam);

function MaxNum(_tam){
    let _numbers = [_tam];
    // let array = new Array(_tam).fill(null);
    
    for(var i=0; i<_tam; i++){
        let num = parseInt(prompt(`Ingrese el Número ${i+1}:`));
        _numbers[i] = num;
    }

    // Math.max(..._numbers);

    let max = 0;

    for(var i=0; i<_numbers.length; i++){
        if(_numbers[i] > max) max = _numbers[i];
    }

    console.group("------ Ejercicio # 2 ------");
        console.log(`%cEl número máximo es ${max}.`, _style);
    console.groupEnd();
}