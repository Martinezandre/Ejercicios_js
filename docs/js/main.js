'use strict';

//1 Pedir nombre al usuario y saludarlo.
const $exer1Form = document.getElementById('exer1');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
$exer1Form.addEventListener('submit', (e) => {
    e.preventDefault();
    if($exer1Form.name.value.length==0 || /^\s+$/.test($exer1Form.name.value) ){
        alert("Campo vacio! ", 'success');
    }else{
    alert(`Hola, ${$exer1Form.name.value}!`, 'success');
}        
});
const alert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `<div>${message}</div>`,
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
    ].join('');
        alertPlaceholder.append(wrapper);
};

//2 Pedir edad al usuario y responder si es o no es mayor de edad.
const $exer2Form=document.getElementById("exer2");
const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2');
$exer2Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    verEdad();    
});
function verEdad(){
    const edad=$exer2Form.edad.value;
    if(edad.length==0 || /^\s+$/.test(edad) ){
        alert1("Campo vacio");
    }
    else if(edad>=18){
        alert1('Usted es mayor de edad','success' );
    }
    else {
        alert1("Usted no es mayor de edad");
    }
}
const alert1 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-warning alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');  
    alertPlaceholder2.append(wrapper);
  };
  
  //3 Pedir un número, mostrar la suma total de numeros pares desde 1 hasta n.  
  const $exer3Form=document.getElementById("exer3");
const alertPlaceholder3 = document.getElementById('liveAlertPlaceholder3');
$exer3Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  pares();
});
const alert2 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-info alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');  
    alertPlaceholder3.append(wrapper);
  }
function pares(){
  const numero1=parseInt($exer3Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert3("El valor ingresado debe ser un número o esta en blanco")
  }else{
    let i=0;
    let resultado=0;
    for (let i = 0; i<=numero1 ; i++) {
      if (i % 2 ===0) {
          resultado=resultado+i;          
      }
      }
      alert2("La suma total de los número pares es : "+ resultado);
  }
}
  
  //4 Pedir un número, mostrar el doble de n.
  const $exer4Form=document.getElementById("exer4");
  const alertPlaceholder4 = document.getElementById('liveAlertPlaceholder4');
  $exer4Form.addEventListener('submit', (e) =>{
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
      alertPlaceholder4.append(wrapper);
    }
  function doble(){
    const numero1=parseInt($exer4Form.num1.value);
    if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
      alert3("El valor ingresado debe ser un número o esta en blanco")
    }else{
      const resultado= numero1*2;
      alert3("El doble del número ingresado es : " +resultado);
    }
}  
  
  //5 Pedir un número, mostrar el triple de n.
  const $exer5Form=document.getElementById("exer5");
  const alertPlaceholder5 = document.getElementById('liveAlertPlaceholder5');
  $exer5Form.addEventListener('submit', (e) =>{
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
      alertPlaceholder5.append(wrapper);
    }
  function triple(){
    const numero1=parseInt($exer5Form.num1.value);
    if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
      alert4("El valor ingresado debe ser un número o esta en blanco")
    }else{
      const resultado= numero1*3;
      alert4("El triple del número ingresado es : " +resultado);
    }
  } 
  
  //6 Pedir un número, mostrar la mitad de n.
  const $exer6Form=document.getElementById("exer6");
  const alertPlaceholder6 = document.getElementById('liveAlertPlaceholder6');
  $exer6Form.addEventListener('submit', (e) =>{
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
      alertPlaceholder6.append(wrapper);
    }
  function mitad(){
    const numero1=parseInt($exer6Form.num1.value);
    if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
      alert5("El valor ingresado debe ser un número o esta en blanco")
    }else if(numero1===0){
      alert5("El valor ingresado debe ser distinto de CERO")
    }else{
      const resultado= numero1/2;
      alert5("La mitad del número ingresado es : " +resultado);
    }
  } 
  
  //7 Pedir un número, mostrar la tercera parte de n.
  const $exer7Form=document.getElementById("exer7");
  const alertPlaceholder7 = document.getElementById('liveAlertPlaceholder7');
  $exer7Form.addEventListener('submit', (e) =>{
    e.preventDefault();    
  });
  const alert6 = (message, type) => {
    const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('');    
      alertPlaceholder7.append(wrapper);
    }
  function tercio(){
    const numero1=parseInt($exer7Form.num1.value);
    if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
      alert6("El valor ingresado debe ser un número o esta en blanco")
    }else if(numero1===0){
      alert6("El valor ingresado debe ser distinto de CERO")
    }else{
      const resultado= numero1/3;
      alert6("La tercera parte del número ingresado es : " +resultado);
    }
  } 
  
  //8 Pedir un número, mostrar el cuadrado de n.
  const $exer8Form=document.getElementById("exer8");
  const alertPlaceholder8 = document.getElementById('liveAlertPlaceholder8');
  $exer8Form.addEventListener('submit', (e) =>{
    e.preventDefault();    
  });
  const alert7 = (message, type) => {
    const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('');    
      alertPlaceholder8.append(wrapper);
    }
  function cuadrado(){
    const numero1=parseInt($exer8Form.num1.value);
    if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
      alert7("El valor ingresado debe ser un número o esta en blanco")
    }else if(numero1===0){
      alert7("El valor ingresado debe ser distinto de CERO")
    }else{
      const resultado= numero1*numero1;
      alert7("La cuadrado del número ingresado es : " +resultado);
    }
  } 
  
  //9 Pedir un número, mostrar n reducido en 5.
  const $exer9Form=document.getElementById("exer9");
  const alertPlaceholder9 = document.getElementById('liveAlertPlaceholder9');
  $exer9Form.addEventListener('submit', (e) =>{
    e.preventDefault();    
  })
  const alert8 = (message, type) => {
    const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('');    
      alertPlaceholder9.append(wrapper);
    }
  function menosCinco(){
    const numero1=parseInt($exer9Form.num1.value);
    if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
      alert8("El valor ingresado debe ser un número o esta en blanco")
    }else{
      const resultado= numero1-5;
      alert8("El número ingresado reducido en CINCO es: " +resultado);
    }
  } 
  
  //10 Pedir un número, mostrar el doble de n más 4.
  const $exer10Form=document.getElementById("exer10");
  const alertPlaceholder10 = document.getElementById('liveAlertPlaceholder10');
  $exer10Form.addEventListener('submit', (e) =>{
    e.preventDefault();    
  })
  const alert9 = (message, type) => {
    const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('');    
      alertPlaceholder10.append(wrapper);
    }
  function dobleMasCuatro(){
    const numero1=parseInt($exer10Form.num1.value);
    if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
      alert9("El valor ingresado debe ser un número o esta en blanco")
    }else{
      const resultado= (numero1*2)+4;
      alert9("El deble del número ingresado más CUATRO es: " +resultado);
    }
  } 
  
  //11 Pedir un número, mostrar si es positivo, negativo o si es cero.
  const $exer11Form=document.getElementById("exer11");
  const alertPlaceholder11 = document.getElementById('liveAlertPlaceholder11');
  $exer11Form.addEventListener('submit', (e) =>{
    e.preventDefault();    
  });
  const alert10 = (message, type) => {
    const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-secondary alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('');    
      alertPlaceholder11.append(wrapper);
    }
  function positivoNegativoCero(){
    const numero1=parseInt($exer11Form.num1.value);
    if(numero1===0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
      alert10("El valor ingresado es igual a CERO")
    }else if(numero1<0){
      alert10("El valor ingresado es Negativo")
    }else{
      alert10("El valor ingresado es Positivo");
    }
  } 
  
  //12 Pedir un número, mostrar si es par, impar o si es cero.
  const $exer12Form=document.getElementById("exer12");
  const alertPlaceholder12 = document.getElementById('liveAlertPlaceholder12');  
  $exer12Form.addEventListener('submit', (e) =>{
    e.preventDefault();
    parImparCero();
  });  
  const alert11 = (message, type) => {
    const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-info alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('');    
      alertPlaceholder12.append(wrapper);
    }
    function parImparCero(){
      const numero1=parseInt($exer12Form.num1.value);
        if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
          alert11("El valor ingresado debe ser un número o esta en blanco")
        }else if(numero1===0 ){
          alert11("El número ingresado es CERO")
        }else if(numero1 % 2 === 0){
          alert11("El número ingresado es Par");
        }else{
          alert11("El número ingresado es Impar");
        }
      }
  
  //13 Pedir un número, mostrar si es un número primo o no.
  const $exer13Form=document.getElementById("exer13");
  const alertPlaceholder13 = document.getElementById('liveAlertPlaceholder13');
  $exer13Form.addEventListener('submit', (e) =>{
    e.preventDefault();
    primo();
  });
  const alert12 = (message, type) => {
    const wrapper = document.createElement('div');
      wrapper.innerHTML = [
        `<div class="alert alert-warning alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>',
      ].join('');  
      alertPlaceholder13.append(wrapper);
    }
  function primo(){
    const numero1=parseInt($exer13Form.num1.value);
    if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
      alert12("El valor ingresado debe ser un número o esta en blanco")
    }else if(numero1<2){
      alert12("Ingrese un número mayor a UNO");
      return;
    }else{
      let contador=0;
      for(let i=1; i<=numero1; i++){
        if(numero1 % i ===0){
          contador++;
        }
      }
      if(contador===2){
        alert12("El número ingresado es Primo");
      }else{
        alert12("El número ingresado no es Primo");
      }
    }
  }
  
  //14 Pedir dos números, mostrar la suma.
  const $exer14Form=document.getElementById("exer14");
  const alertPlaceholder14 = document.getElementById('liveAlertPlaceholder14');
  $exer14Form.addEventListener('click', (e) =>{
    e.preventDefault(); 
  });
  const alert13 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
    alertPlaceholder14.append(wrapper);
  }
  function suma(){
    const num1=$exer14Form.num1.value;
    const num2=$exer14Form.num2.value;
    if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
        || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
          alert13("El valor ingresado debe ser un número o esta en blanco")
    }else {
      const resultado=parseFloat(num1)+parseFloat(num2);
      alert13("El resultado de la SUMA es: " + resultado);
    }
  }
  
  //15 Pedir dos números, mostrar la resta.
  const $exer15Form=document.getElementById("exer15");
  const alertPlaceholder15 = document.getElementById('liveAlertPlaceholder15');
  $exer15Form.addEventListener('click', (e) =>{
    e.preventDefault(); 
  });
  const alert14 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
    alertPlaceholder15.append(wrapper);
  }
  function resta(){
    const num1=$exer15Form.num1.value;
    const num2=$exer15Form.num2.value;
    if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
        || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
          alert14("El valor ingresado debe ser un número o esta en blanco")
    }else {
      const resultado=parseFloat(num1)-parseFloat(num2);
      alert14("El resultado de la RESTA es: " + resultado);
    }
  }
  
  //16 Pedir dos números, mostrar la multiplicación.
  const $exer16Form=document.getElementById("exer16");
  const alertPlaceholder16 = document.getElementById('liveAlertPlaceholder16');
  $exer16Form.addEventListener('click', (e) =>{
    e.preventDefault(); 
  });
  const alert15 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
    alertPlaceholder16.append(wrapper);
  }
  function multiplicacion(){
    const num1=$exer16Form.num1.value;
    const num2=$exer16Form.num2.value;
    if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
        || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
          alert15("El valor ingresado debe ser un número o esta en blanco")
    }else {
      const resultado=parseFloat(num1)*parseFloat(num2);
      alert15("El resultado de la MULTIPLICACIÓN es: " + resultado);
    }
  }
  
  //17 Pedir dos números, mostrar la división.
  const $exer17Form=document.getElementById("exer17");
  const alertPlaceholder17 = document.getElementById('liveAlertPlaceholder17');
  $exer17Form.addEventListener('click', (e) =>{
    e.preventDefault(); 
  });
  const alert16 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
    alertPlaceholder17.append(wrapper);
  }
  function division(){
    const num1=$exer17Form.num1.value;
    const num2=$exer17Form.num2.value;
    if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
        || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
          alert16("El valor ingresado debe ser un número o esta en blanco")
    }else {
      const resultado=parseFloat(num1)/parseFloat(num2);
      alert16("El resultado de la DIVISION es: " + resultado);
    }
  }
  
  //18 Pedir dos números, mostrar el resto de la división.
  const $exer18Form=document.getElementById("exer18");
  const alertPlaceholder18 = document.getElementById('liveAlertPlaceholder18');
  $exer18Form.addEventListener('click', (e) =>{
    e.preventDefault(); 
  });
  const alert17 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
    alertPlaceholder18.append(wrapper);
  }
  function resto(){
    const num1=$exer18Form.num1.value;
    const num2=$exer18Form.num2.value;
    if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
        || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
          alert17("El valor ingresado debe ser un número o esta en blanco")
    }else {
      const resultado=parseFloat(num1)% parseFloat(num2);
      alert17("El RESTO de la DIVISION es: " + resultado);
    }
  }
  
  //19 Pedir dos números, mostrar si el primer número es divisible por el segundo.
  const $exer19Form=document.getElementById("exer19");
  const alertPlaceholder19 = document.getElementById('liveAlertPlaceholder19');
  $exer19Form.addEventListener('click', (e) =>{
    e.preventDefault(); 
  });
  const alert18 = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-dark alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');
    alertPlaceholder19.append(wrapper);
  }
  function divisible(){
    const num1=$exer19Form.num1.value;
    const num2=$exer19Form.num2.value;
    if(num1.length==0 || /^\s+$/.test(num1)|| isNaN(num1)
        || num2.length==0 || /^\s+$/.test(num1)|| isNaN(num2)){
          alert18("El valor ingresado debe ser un número o esta en blanco")
    }else if(parseFloat(num1) % parseFloat(num2) === 0){
      alert18("El primer número SI es divisible por el segundo número");
    }else{
      alert18("El primer número NO es divisible por el segundo número");
    }
  }

  //20 Pedir un número, mostrar los numeros pares desde 1 hasta n.  
  const $exer20Form=document.getElementById("exer20");
const alertPlaceholder20 = document.getElementById('liveAlertPlaceholder20');
$exer20Form.addEventListener('submit', (e) =>{
  e.preventDefault();
  pares();
});
const alert19 = (message, type) => {
  const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="alert alert-info alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>',
    ].join('');  
    alertPlaceholder20.append(wrapper);
  }
function listaPares(){
  const numero1=parseInt($exer20Form.num1.value);
  if(numero1.length==0 || /^\s+$/.test(numero1)|| isNaN(numero1)){
    alert19("El valor ingresado debe ser un número o esta en blanco")
  }else{
    let i=0;
    let resultado=0;
    let pares = '';
    for (let i = 0; i<=numero1 ; i++) {
      if (i % 2 === 0) {
          pares += i + ', ';         
      }
      }
    alert19("La lista de los número pares es : "+ pares);
  }
}