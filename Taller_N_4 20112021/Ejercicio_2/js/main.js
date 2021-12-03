'use strict';

// Ejercicio # 2 ...

let _style = `font-family; color:#ffc107; 
            background:#162c40;
            padding: 3px;
            border-radius: 5px;
            font-weight: 700`;

let _cantCustomers = 0;

while (true) {
    _cantCustomers = parseInt(prompt(`Cantidad de Clientes`));
    if (!isNaN(_cantCustomers) && _cantCustomers != null && _cantCustomers != "") {
        break;
    } else {
        continue;
    }
}

let _customers = new Array(_cantCustomers).fill(null);
let _icecreams = [
    { NameIceCream: "Bonice", Price: 400 },
    { NameIceCream: "Palo de Helado de Agua", Price: 1000 },
    { NameIceCream: "Palo de Agua de Crema", Price: 2200 },
    { NameIceCream: "Bombon de Helado con Arequipe", Price: 1500 },
    { NameIceCream: "Bombon de Helado con Chispas de Chocolate", Price: 2500 },
    { NameIceCream: "Bombon de Helado con Fresas", Price: 2800 },
    { NameIceCream: "Medio Litro de Helado", Price: 2000 }
]

for (var i = 0; i < _cantCustomers; i++) {
    let _nameCustomer = prompt(`Nombre del Cliente ${i + 1}:`);
    let _dinerCustomer = parseInt(prompt(`Ingrese el dinero del Cliente ${i + 1}:`));

    _customers[i] = {
        _nameCustomer,
        _dinerCustomer
    }
}

let _purchases = new Array().fill(null);
let temp = []
let cont = 0;

for (var i = 0; i < _customers.length; i++) {
    for (var j = 0; j < _icecreams.length; j++) {
        if (_customers[i]._dinerCustomer >= _icecreams[j].Price) {
            // console.log(_customers[i], _icecreams[j]);
            temp[cont] = {
                IceCreamName: _icecreams[j].NameIceCream,
                Price: _icecreams[j].Price
            };
            cont++;
        }
    }
    _purchases[i] =
    {
        CustomerName: _customers[i]._nameCustomer,
        Icecreams: temp
    }
    temp = [];
}

console.group("------ Ejercicio # 2 ------");
console.log(`%cClientes:`, _style, Object.values(_customers));
console.log(`%cHelados:`, _style, Object.values(_icecreams));
console.log(`%cPosibles Compras:`, _style, Object.values(_purchases));

for (var i = 0; i < _customers.length; i++) {
    if (_purchases[i].Icecreams != '') {
        console.group(`%Factura # ${new Date().toISOString().slice(0, 19).replaceAll('-', '')}`);
        console.log(`%cNombre del Cliente: ${_customers[i]._nameCustomer}`, _style);
        console.log(`%cCompra:`, _style);
        console.log(_purchases[i].Icecreams);
        console.groupEnd();
    } else {
        console.warn(`El cliente ${_customers[i]._nameCustomer} no puede comprar un helado debido a que no tiene el dinero suficiente...`);
    }
}
console.groupEnd();