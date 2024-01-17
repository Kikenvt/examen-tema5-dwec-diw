/**
 * @author: Enrique Fernández - Campoamor Fernández
 * @github: 
 */

const formulario = document.querySelector('#formulario')
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const enviar = document.querySelector('#enviar')
const errores = document.querySelector('#errores')

const info = document.querySelector('#info')
const ruta = document.querySelector('#ruta')
const infoBtn = document.querySelector('#infoBtn')

let mensajesErrores = []

const validarFormulario = (e) =>{
    e.preventDefault()
    mensajesErrores = []

    nombre.value.trim().length === 0 && mensajesErrores.push('El nombre no puede ser un campo vacio')
    !/^[A-Z][a-z]{1,40}$/.test(nombre.value.trim()) && mensajesErrores.push('El nombre no contiene carácteres validos')

    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value.trim()) && mensajesErrores.push('Introduce una dirección de correo válida')

    mensaje.value.trim().length < 10 && mensajesErrores.push('El mensaje es demasiado corto')

    if(mensajesErrores.length === 0 && confirm('¿Estas seguro de enviar el formulario?')){
        formulario.submit()
    }else if(mensajesErrores.length > 0){
        errores.textContent = ""
        console.log(mensajesErrores)
        mensajesErrores.forEach(function (mensaje){
            const li = document.createElement('li')
            li.textContent = mensaje
            errores.appendChild(li)
        })
    }
}

const validarinfo = () =>{
    if(info.checked){
        alert('AAjajajajj')
    }else if(ruta.checked){
        alert('ohhhh')
    }
}

infoBtn.addEventListener('click', validarinfo)
formulario.addEventListener('submit', validarFormulario)