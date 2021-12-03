'use strict';

// Ejercicio # 5 ...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let _CantEmployees = 0, PaySheet = 0, _HourFixed = 0, _Salary = 0;;

while (true) {
    _CantEmployees = parseInt(prompt(`Cantidad de Obreros:`));
    _HourFixed = parseInt(prompt(`Hora Pautada:`));
    if (!isNaN(_CantEmployees) && _CantEmployees != null && _CantEmployees != "")  {
        break;
    } else {
        continue;
    }
}

let _EmployeesHours = new Array(_CantEmployees).fill(null);

for(var i=0; i<_CantEmployees; i++){
    _EmployeesHours[i] = parseInt(prompt(`Ingrese el Número de Horas del Empleado ${i+1}:`));
    _Salary = _EmployeesHours[i] * _HourFixed;
    PaySheet = PaySheet + _Salary;
}

console.group("------ Ejercicio # 5 ------");
    console.log(`%cCantidad de Obreros: ${_CantEmployees}`, _style);
    console.log(`%cHora Pautada: ${_HourFixed}`, _style);
    console.log(`%cNomina Mensual: $${PaySheet}`, _style);
console.groupEnd();