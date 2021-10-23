'use strict';

var _data = prompt("Ingresar un número:");
if(_data === '' || _data === null)
    alert("Ingrese un número válido...");
else
    console.log(`Número Ingresado: ${_data}`);