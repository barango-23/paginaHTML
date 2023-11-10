//definiendo datos

//importar 
import{productos}from '../helpers/BaseDatos.js'
import { pintarProductos } from '../helpers/pintarProductos.js'

//llamado a la columna 
let fila=document.getElementById("fila")


//una clase tiene atributos y metodos 
//recomendacion not mini
//pintar productos de una tienda

pintarProductos(productos)


//funcion anonima = Es una funcion que no tienen nombre


//Escuchando clic en la fila contenedora de productos
fila.addEventListener("click",function(evento){
    //los objetos tienen atributos
    
    //objetos = {}
    
    let datosProductoSeleccionar = {}
    let tarjeta=evento.target.parentElement
    
    datosProductoSeleccionar.foto=tarjeta.querySelector("img").src
    datosProductoSeleccionar.nombre=tarjeta.querySelector("h3").textContent
    datosProductoSeleccionar.precio=tarjeta.querySelector("h5").textContent
    datosProductoSeleccionar.descripcion=tarjeta.querySelector("h2").textContent
    
    //usaremos la memoria dle pc para guardar esta info 
    localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionar))

    //console.log(datosProductoSeleccionar)

    window.location.href="../../src/views/ampliarinfo.html"
    function enviarFormulario(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
    
        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;
    
        // Validación básica
        if (!nombre || !email || !telefono || !mensaje) {
            alert('Por favor, complete todos los campos del formulario.');
            return;
        }
    
        // Puedes agregar más validaciones según tus necesidades (por ejemplo, validación de formato de correo electrónico)
    
        // Aquí puedes enviar los datos al servidor o realizar otras acciones con ellos
        alert('Formulario enviado con éxito:\n\nNombre: ' + nombre + '\nCorreo Electrónico: ' + email + '\nTeléfono: ' + telefono + '\nMensaje: ' + mensaje);
    
        // Puedes reiniciar el formulario después de enviarlo
        document.getElementById('formularioContacto').reset();
    }
    
    
})
