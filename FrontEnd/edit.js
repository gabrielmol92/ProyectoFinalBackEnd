

document.addEventListener("DOMContentLoaded", ()=>{

    const formularioEditar = document.querySelector("#formEdit")
    //Obtener los parametros dela URL
    const ParametrosURL = new URLSearchParams(window.location.search)
    //Obtener ID del post
    const IdProducto = ParametrosURL.get ("id")
    
    // funcion para obtener el producto por su id
    
    const fecthProductos = async (id) =>{
        try {
            const respuesta = await axios.get(`http://localhost:3030/productos/${id}`)
            const producto = respuesta.data
            // asignar los valores obtenidos
            document.querySelector('#producto').value = producto.nombre;
            document.querySelector('#descripcion').value = producto.descripcion;
            document.querySelector('#precio').value = producto.precio;
            document.querySelector('#stock').value = producto.stock;
            document.querySelector('#imagen').value = producto.image;
            
        } catch (error) {
            console.error('Error al obtener el post:', error);
        }
    }
     
        if (IdProducto){
            fecthProductos(IdProducto)
        }
    
        
    // funcion para actualizar el posteo
    formularioEditar.addEventListener('submit',async function (event){
    event.preventDefault()
    const productoActualizado = {
        nombre:document.querySelector('#producto').value ,
        descripcion: document.querySelector('#descripcion').value ,
        precio:document.querySelector('#precio').value ,
        stock: document.querySelector('#stock').value ,
        image: document.querySelector('#imagen').value ,
    }
    
    try {
        await axios.put(`http://localhost:3030/productos/${IdProducto}`,productoActualizado)
        alert ("Producto Actualizado correctamente")
        //redirigimos a la pagina principal despues de actualizar
        window.location.href="index.html"
    } catch (error) {
        console.error('Error al actualizar producto:', error);
    }
    
    })
    
    
    })