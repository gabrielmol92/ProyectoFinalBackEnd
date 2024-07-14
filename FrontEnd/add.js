document.addEventListener("DOMContentLoaded", function() {

 const formularioAgregar = document.querySelector('#formAdd')

 formularioAgregar.addEventListener('submit', async function(evento){
    evento.preventDefault();
    const nuevoProducto = {
        nombre:document.querySelector('#producto').value ,
        descripcion: document.querySelector('#descripcion').value ,
        precio:document.querySelector('#precio').value ,
        stock: document.querySelector('#stock').value ,
        image: document.querySelector('#imagen').value ,


    };
    
    try {
        await axios.post(`http://localhost:3030/productos/`,nuevoProducto)
        //limpiamos el formulario
        formularioAgregar.reset()
        //recargar la lista de posteos despues de crear uno nuevo
        alert('Se agrego correctamente el producto');
         window.location.href="index.html";
    } catch (error) {
        console.error("error al crear posteo :",error)
    }
    
    
    
    
    
    
    
    
    })

})