// se llaman las constantes o variables a usar.
const misNombres = document.getElementById("nombres");
const miCorreo = document.getElementById("correo");
const miAsunto = document.getElementById("asunto");
const miObservaciones = document.getElementById("observaciones");

const errorNombres = document.getElementById("error_nombres");
const errorCorreo = document.getElementById("error_correo");
const errorAsunto = document.getElementById("error_asunto");
const errorObservacion = document.getElementById("error_observaciones");
const errorVacios = document.getElementById("error_vacios");
const mensajeExito = document.getElementById("mensaje_exito");

const iconoOkNombres = document.getElementById("icono_ok_nombres");
const iconoOkCorreo = document.getElementById("icono_ok_correo");
const iconoOkAsunto = document.getElementById("icono_ok_asunto");
const iconoOkObservaciones = document.getElementById("icono_ok_observaciones");

const iconoErrorNombres = document.getElementById("icono_error_nombres");
const iconoErrorCorreo = document.getElementById("icono_error_correo");
const iconoErrorAsunto = document.getElementById("icono_error_asunto");
const iconoErrorObservaciones = document.getElementById("icono_error_observaciones");



//validar si las cajas de texto estan vacias
function validar(event) {
    event.preventDefault();
      if ((misNombres.value === "") 
        // || (miCorreo.value === "")
        // || (miAsunto.value === "")
        // || (miObservaciones.value === "")
    ){
            iconoErrorNombres.style.display = "block";
               errorVacios.classList.add("block");
        } else {
            iconoOkNombres.style.display = "block";
        mensajeExito.classList.add("block")
        errorVacios.classList.remove("block");
        // return;
      }

    


    //  //Se llaman las funciones validadoras
        //  validarNombres(misNombres);
         validarCorreo(miCorreo);
         validarAsunto(miAsunto);
         validarObservaciones(miObservaciones);
}


//  Validar nombres maximo 60 caracteres
//    function validarNombres() {
//        const nombresRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,10})$/g; // almacenamos la expresion regular en una constante
//        if (nombresRegex.test(misNombres.value)) { //.test ejecuta la ocurrencia o comparacion entre la expresion regular y la cadena de texto.
//            errorNombres.classList.remove("block"); // llama la constante errorNombre y con .classList.remove quita el estilo css bloque.
//            iconoOkNombres.style.display = "block";
        
//          //   return true;
//        }  
//        else {
//            errorNombres.classList.remove("block");
//            mensajeExito.classList.remove("block");
          
//          //   return false;
//        }
//    }

//valida el correo
 function validarCorreo() {
     const correoRegex = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
     if (correoRegex.test(miCorreo.value)) {
         // alert("Correo valido");
         errorCorreo.classList.remove("block");
         iconoOkCorreo.style.display = "block";
         // return true;
     } else {
         // alert("Correo Invalido");
         errorCorreo.classList.add("block");
         mensajeExito.classList.remove("block");
         errorCorreo.style.display = "block";
         iconoErrorCorreo.style.display = "block";
         // return false;
     } 
    }
//validar usuario maximo 25 caracteres
 function validarAsunto() {
     const usuarioRegex = /^([a-zA-Z0-9_-]{0,10})$/g;
     if (usuarioRegex.test(miAsunto.value)) {
         // alert("Usuario valido");
         errorAsunto.classList.remove("block");
         iconoOkAsunto.style.display = "block";
         // return true;
     } else {
         // alert("sobrepasa los cantidad de caracteres permitidos para usuario");
        //  errorAsunto.classList.add("block");
         // return false;
         iconoOkAsunto.style.display = "none";
         mensajeExito.classList.remove("block");
         errorAsunto.style.display = "block";
     }
 }
//validar observaciones maximo 200 caracteres
 function validarObservaciones() {
     const observacionesRegex = /^([a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s ]{0,20})$/g;
     if (observacionesRegex.test(miObservaciones.value)) {
         errorObservacion.classList.remove("block");
         iconoOkObservaciones.style.display = "block";
         // return false;
     } else {
         errorObservacion.classList.add("block");
         // alert("sobrepasa los cantidad de caracteres permitidos para observaciones");
         // return true;
         iconoErrorObservaciones.style.display = "block";
         mensajeExito.classList.remove("block");
         iconoErrorObservaciones.style.display = "block";
         errorObservacion.style.display ="block";
     }
 }