/**
 * @author: Enrique Fernández - Campoamor Fernández
 * @github: 
 */

//Definimos las variables para el formulario
const formulario = document.querySelector('#formulario')
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const enviar = document.querySelector('#enviar')
const errores = document.querySelector('#errores')

//Definimos las variables para el botón "info"
const info = document.querySelector('#info')
const ruta = document.querySelector('#ruta')
const infoBtn = document.querySelector('#infoBtn')

//Declaramos el array para los mensajes de error
let mensajesErrores = []

//Funciones

const validarFormulario = (e) =>{
    e.preventDefault()
    mensajesErrores = []
    //Revisamos que el nombre no puede estar vacío, no empezar por una letra mayúscula o contener número
    nombre.value.trim().length === 0 && mensajesErrores.push('El nombre no puede ser un campo vacio')
    !/^[A-Z][a-z]{1,40}$/.test(nombre.value.trim()) && mensajesErrores.push('Un nombre propio comienza siempre por una letra mayúscula y no contiene números')
    
    //Revisamos que el email tenga estructura correcta
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value.trim()) && mensajesErrores.push('Introduce una dirección de correo válida')

    // Revisamos que el mensaje no pueda ser vacio o menor a 10 carácteres
    mensaje.value.trim().length < 10 && mensajesErrores.push('El mensaje es demasiado corto')

    //Si no hay errores en el array se envia el formulario
    if(mensajesErrores.length === 0 && confirm('¿Estas seguro de enviar el formulario?')){
        formulario.submit()
        //Si hay mensajes de error se muestan el la lista
    }else if(mensajesErrores.length > 0){
        errores.textContent = ""
        
        mensajesErrores.forEach(function (mensaje){
            const li = document.createElement('li')
            li.textContent = mensaje
            errores.appendChild(li)
        })
    }
}
// Función para validar el boton de info
const validarInfo = () =>{
    if(info.checked){
        alert('AAjajajajj')
    }else if(ruta.checked){
        alert('ohhhh')
    }
}

infoBtn.addEventListener('click', validarInfo)
formulario.addEventListener('submit', validarFormulario)