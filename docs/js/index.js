'use strict';
const $form=document.getElementById('form');
const $legend=document.getElementsByTagName("legend")[0];
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');


const formulario={ 
    user:null,
    pass:null
};


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

$form.user.addEventListener('input', (e) =>{
    formulario.user=e.target.value;
});

$form.pass.addEventListener('input', (e) =>{
    formulario.pass=e.target.value;
});

$form.addEventListener('submit',(e)=>{
    e.preventDefault();

if (verFormulario () === true) {
    verUser(formulario);
    } else {
    alert('*Todos los campos son obligatorios.', 'danger');
    }
});

function verFormulario() {
if (formulario.user && formulario.pass)
    return true;
    else return false;
}

function verUser(obj){
try{
    const permitido={
    user:"bit20",
    pass:2023,
};
    if(obj.user===permitido.user && 
    parseInt(obj.pass)===permitido.pass){
    window.open("./menu.html","_self"); 
    }else{
    alert('¡Acceso denegado! revise su información', 'warning');
    } main
    }catch(error){
    console.log('Se produjo un error, en la función verificación de usuario', error);
    }
}