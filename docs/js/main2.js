'use strict';

//1 Calculo del Area de un Cuadrado.
const $exer1Form = document.getElementById("exer1");
const alertPlaceholder1 = document.getElementById('liveAlertPlaceholder1');
$exer1Form.addEventListener('submit', (e) => {
    e.preventDefault();
});
const alert1 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
    ].join('');
    alertPlaceholder1.append(wrapper);
}
function areaCuadrado() {
    const numero1 = parseInt($exer1Form.num1.value);
    if (numero1.length == 0 || /^\s+$/.test(numero1) || isNaN(numero1)) {
        alert1("El valor ingresado debe ser un número o esta en blanco")
    } else {
        const resultado = numero1 * numero1;
        alert1("El Area del Cuadrado es: " + resultado + " cm2");
    }
}

//2 Calculo del Area de un Triangulo Equilatero.
const $exer2Form = document.getElementById("exer2");
const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2');
$exer2Form.addEventListener('submit', (e) => {
    e.preventDefault();
});
const alert2 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
    ].join('');
    alertPlaceholder2.append(wrapper);
}
function areaTriangulo() {
    const numero1 = parseInt($exer2Form.num1.value);
    if (numero1.length == 0 || /^\s+$/.test(numero1) || isNaN(numero1)) {
        alert2("El valor ingresado debe ser un número o esta en blanco")
    } else {
        const resultado = (numero1 * numero1 * 1.73) / 4;
        alert2("El Area del Triangulo es: " + resultado + " cm2");
    }
}

//3 Convertir Fahrenheit a Celsius ó Convertir Celsius a Fahrenheit.
const $exer3Form = document.getElementById("exer3");
const alertPlaceholder3 = document.getElementById('liveAlertPlaceholder3');
$exer3Form.addEventListener('submit', (e) => {
    e.preventDefault();
});
const alert3 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
    ].join('');
    alertPlaceholder3.append(wrapper);
}
function convCelsius() {
    const numero1 = parseInt($exer3Form.num1.value);
    if (numero1.length == 0 || /^\s+$/.test(numero1) || isNaN(numero1)) {
        alert3("El valor ingresado debe ser un número o esta en blanco")
    } else {
        const resultado = (numero1 - 32) * (5 / 9);
        alert3(numero1 + "°F equivalen a: " + resultado + "°C");
    }
}
function convFahrenheit() {
    const numero2 = parseInt($exer3Form.num2.value);
    if (numero2.length == 0 || /^\s+$/.test(numero2) || isNaN(numero2)) {
        alert3("El valor ingresado debe ser un número o esta en blanco")
    } else {
        const resultado = (numero2 * (9 / 5)) + 32;
        alert3(numero2 + "°C equivalen a: " + resultado + "°F");
    }
}

//4 Contar vocales en un String.
const $exer4Form = document.getElementById("exer4");
const alertPlaceholder4 = document.getElementById('liveAlertPlaceholder4');
$exer4Form.addEventListener('submit', (e) => {
    e.preventDefault();
});
const alert4 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
    ].join('');
    alertPlaceholder4.append(wrapper);
}
function contarVocal() {
    const palabra1 = ($exer4Form.palabra1.value);
    if (palabra1 == "") {
        alert4("Debe ingresar un valor String")
    } else {
        const vocales = "aáeéiíoóuú";
        let cantidadVocales = 0;
        for (const letra of palabra1) {
            if (vocales.includes(letra.toLowerCase())) {
                cantidadVocales++;
            }
        }
        alert4("La cantidad de Vocales en el String son: " + cantidadVocales);
    }
}

//5 Determionar si es Palindromo.
const $exer5Form = document.getElementById("exer5");
const alertPlaceholder5 = document.getElementById('liveAlertPlaceholder5');
$exer5Form.addEventListener('submit', (e) => {
    e.preventDefault();
});
const alert5 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
    ].join('');
    alertPlaceholder5.append(wrapper);
}
function palindromo() {
    const palabra1 = ($exer5Form.palabra1.value);
    if (palabra1 == "") {
        alert5("Debe ingresar un valor String")
    } else {
        var palabra2 = palabra1.toLowerCase().replace(/\s/g, "");
        var palabra1Reverse = palabra2.split("").reverse().toString();
        for (var i = 0; i < ((palabra1Reverse.length) - 1); i++) {
            palabra1Reverse = palabra1Reverse.replace(",", "");
        };
        if (palabra2 == palabra1Reverse) {
            alert5("El String SI es un Palindromo");
        }
        else {
            alert5("El String NO es un Palindromo");
        }
    }
}

//6 Imprimir lista Fizz Buzz
const $exer6Form = document.getElementById("exer6");
const alertPlaceholder6 = document.getElementById('liveAlertPlaceholder6');
$exer6Form.addEventListener('submit', (e) => {
    e.preventDefault();
    fizzBuzz();
});
const alert6 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-info alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
    ].join('');
    alertPlaceholder6.append(wrapper);
}
function fizzBuzz() {
    let lista = []
    for (let i = 1; lista.length < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            lista.push("FizzBuzz")
        } else if (i % 3 === 0) {
            lista.push("Fizz")
        } else if (i % 5 === 0) {
            lista.push("Buzz")
        } else {
            lista.push(i)
        }
    }
    alert6(lista);
}

//7 Pedir dos String y cocatenar en uno.
const $exer7Form = document.getElementById("exer7");
const alertPlaceholder7 = document.getElementById('liveAlertPlaceholder7');
$exer7Form.addEventListener('click', (e) => {
    e.preventDefault();
});
const alert7 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
    ].join('');
    alertPlaceholder7.append(wrapper);
}
function concatenar() {
    const arreg1 = $exer7Form.arreg1.value;
    const arreg2 = $exer7Form.arreg2.value;
    if (arreg1.length == 0 || arreg2.length == 0) {
        alert7("El valor ingresado debe ser un número o esta en blanco")
    } else {
        alert7(arreg1 + ", " + arreg2);
    }
}

//8 Retorna un arreglo desde 1 hasta n.
const $exer8Form = document.getElementById("exer8");
const alertPlaceholder8 = document.getElementById('liveAlertPlaceholder8');
$exer8Form.addEventListener('submit', (e) => {
    e.preventDefault();
});
const alert8 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
    ].join('');
    alertPlaceholder8.append(wrapper);
}
function arreglar() {
    const numero1 = parseInt($exer8Form.numero1.value);
    if (numero1.length == 0 || /^\s+$/.test(numero1) || isNaN(numero1)) {
        alert8("El valor ingresado debe ser un número o esta en blanco")
    } else {
        var arregloN = [];
        for (let i = 0; i <= numero1; i++) {
            if (i > 0) {
                arregloN.push(i);
            }
        }
        alert8(arregloN);
    }
}