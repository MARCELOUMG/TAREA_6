//DESARROLLO WEB
const desarrollo_web = {
    nombre: "Desarrollo",
    Estudiantes: [{
        nombre: 'Juan',
        nota: 10
    }, {
        nombre: 'Maria',
        nota: 30
    }, {
        nombre: 'Carlos',
        nota: 20
    }, {
        nombre: 'Karla',
        nota: 40
    }]
}

let estweb = desarrollo_web.Estudiantes[0];
let estweb1 = desarrollo_web.Estudiantes[1];
let estweb2 = desarrollo_web.Estudiantes[2];
let estweb3 = desarrollo_web.Estudiantes[3];

contenedor = document.getElementById('contenedor_1');

let html = `<ol> 
<li>Nombre: ${estweb.nombre}  Nota: ${estweb.nota}</li>
<li>Nombre: ${estweb1.nombre} Nota: ${estweb1.nota}</li>
<li>Nombre: ${estweb2.nombre} Nota: ${estweb2.nota}</li>
<li>Nombre: ${estweb3.nombre} Nota: ${estweb3.nota}</li> </ol>`;

console.log(html);

contenedor.innerHTML = html;
if (desarrollo_web.Estudiantes.nota == 10) {
    contenedor = document.getElementById('#contenedor_1').querySelectorAll("li");
    contenedor.set("style", "color:red");

} else if (desarrollo_web.Estudiantes.nota >= 11 && desarrollo_web.Estudiantes.nota <= 20) {
    contenedor = document.getElementById('#contenedor_1').querySelectorAll("li");
    contenedor.set("style", "color:green");
} else if (desarrollo_web.Estudiantes.nota >= 21) {
    contenedor = document.getElementById('#contenedor_1').querySelectorAll("li");
    contenedor.set("style", "color:blue");
}

const programacion_2 = {
    nombre: "Programacion2",
    Estudiantes: [{
        nombre: 'Lili',
        nota: 30
    }, {
        nombre: 'Cleo',
        nota: 40
    }, {
        nombre: 'Pedro',
        nota: 33
    }, {
        nombre: 'Marco',
        nota: 21
    }]
}

let estprog2 = programacion_2.Estudiantes[0];
let estprog2_1 = programacion_2.Estudiantes[1];
let estprog2_2 = programacion_2.Estudiantes[2];
let estprog2_3 = programacion_2.Estudiantes[3];

contenedor2 = document.querySelector('#contenedor_2');

let html2 = `<ul> 
<li>Nombre: ${estprog2.nombre} Nota: ${estprog2.nota}</li>
<li>Nombre: ${estprog2_1.nombre} Nota: ${estprog2_1.nota}</li>
<li>Nombre: ${estprog2_2.nombre} Nota: ${estprog2_2.nota}</li>
<li>Nombre: ${estprog2_3.nombre} Nota: ${estprog2_3.nota}</li> </ul>`;

console.log(html2);

contenedor2.innerHTML = html2;
let mult = document.getElementById("multiplicar");
let div = document.getElementById("dividir");
let sum = document.getElementById("sumar");
let res = document.getElementById("restar");

function operar() {
    let numeros = document.getElementById("numero").value;

    for (var i = 1; i <= 10; i++) {
        mult.innerHTML += `${numeros} * ${i} = ${numeros*i} <br />`
    }
    for (var i = 1; i <= 10; i++) {
        div.innerHTML += `${numeros} / ${i} = ${numeros/i} <br />`
    }
    for (var i = 1; i <= 10; i++) {
        sum.innerHTML += `${numeros} + ${i} = ${parseInt(numeros)+i} <br />`
    }
    for (var i = 1; i <= 10; i++) {
        res.innerHTML += `${numeros} - ${i} = ${numeros-i} <br />`
    }
}