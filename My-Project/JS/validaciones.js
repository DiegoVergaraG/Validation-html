console.log('Validaciones');

const inputNacimiento = document.querySelector('#birth');

 export function valida (input){
    const tipoInput = input.dataset.tipo;    //referencia a data-tipo de html
    if (
        validadores[tipoInput]){
            validadores[tipoInput](input)
        }
        console.log(input.parentElement);
        //Este if tiene como funcion verificar el validity
        if (input.validity.valid){
            input.parentElement.classList.remove("input-container--invalid");
            input.parentElement.querySelector(".input-message-error").innerHTML = " ";
        } else {
            input.parentElement.classList.add("input-container--invalid");
            input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoInput, input);
        }
}

const tipoErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensajesError = {
    nombre: {
        valueMissing:"Este campo no puede estar vacio"
    },
    email: {
        valueMissing:"Este campo no puede estar vacio",
        typeMismatch:"El correo no es valido"
    },
    password: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"Entre 6 a 12 caracteres 1 mayuscula, 1 minuscula, sin caracteres especiales"
    },
    nacimiento: {
        valueMissing:"Este campo no puede estar vacio",
        customError:"Debes tener al menos 18 años de edad"
    },
    numero: {
        valueMissing: "Este campo  no puede estar vacío",
        patternMismatch: "El formato requerido es xxxxxxxxxxxx 10 numeros" 
    },
    direccion: {
        valueMissing: "Este campo  no puede estar vacío",
        patternMismatch: "La direccion debe contener entre 10 a 40 caracterees." 
    },
    ciudad: {
        valueMissing: "Este campo  no puede estar vacío",
        patternMismatch: "El numero debe contener entre 10 a 40 caracterees." 
    },
    región: {
        valueMissing: "Este campo  no puede estar vacío",
        patternMismatch: "La región debe contener entre 5 a 40 caracterees." 
    }
}

const validadores = {
    nacimiento : input => validarNacimiento (input),
};

function mostrarMensajeError(tipoDeInput, input){
    let mensaje = "";
    tipoErrores.forEach((error) =>{
        if(input.validity[error]) {
            console.log(error);
            console.log(input.validity[error]);
            console.log(mensajeDeError[tipoDeInput][error]);
            mensaje = mensajesError [tipoDeInput][error];
        }
     });        
    return mensaje;

/*inputNacimiento.addEventListener('blur' , (evento) => {
    validarNacimiento(evento.target);
})*/

function validarNacimiento(input){
    const fecha = new Date (nput.value);
    mayorEdad(fechaCliente);
    let mensaje = '';
    if(!mayorEdad(fechaCliente)){
        mensaje = 'Debes tener al menos 18 años de edad';
    }
    input.setCustomValidity(mensaje);
}

function mayorEdad (fecha){
    const fechaActual = new Date();
    const diferenciaFecha = new Date (
        fecha.getUTCFullYear()+18, 
        fecha.getUTCMonth(),
        fecha.getUTCDate()
        );
    return diferenciaFechas <= fechaActual;
}