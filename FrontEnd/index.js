

document.addEventListener("DOMContentLoaded", function() {

const productCard = document.querySelector('#contedor-prod');    
const addButton = document.querySelector('#btnAgregar');

addButton.addEventListener('click', () =>
    window.location.href= `add.html`
  )

const fetchProductos = async ()=> {
    try {
        const respuesta = await axios.get (`http://localhost:3030/productos`);
        console.log(respuesta.data);
        const productos = respuesta.data;

productCard.innerHTML ="";

productos.forEach(producto => {

const card = document.createElement('div');
card.classList.add('card', 'col-4', 'me-4', 'mb-4', 'shadow-lg', 'bg-white');
card.style.width = '325px';
productCard.appendChild(card);    

//Imagen
const img = document.createElement('img');
//const source = producto.images;
console.log(producto.image);
img.className = 'card-img-top';
img.src = producto.image;
img.alt = 'Card image';
card.appendChild(img);

//Cuerpo de la Card
const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
card.appendChild(cardBody);  

// Título 
const cardTitle = document.createElement('h4');
cardTitle.classList.add('card-title');
cardBody.appendChild(cardTitle);

// Descripción
const cardText = document.createElement('p');
cardText.classList.add('card-text');
cardBody.appendChild(cardText);

// Stock
const stockText = document.createElement('p');
stockText.classList.add('card-text');
cardBody.appendChild(stockText);

// Precio
const priceText = document.createElement('p');
priceText.classList.add('text-muted');
cardBody.appendChild(priceText);


// Footer 
const cardFooter = document.createElement('div');
cardFooter.classList.add('card-footer', 'm-0', 'w-100');
card.appendChild(cardFooter);



// Botones
const cardButtons = document.createElement('div');
const botonEliminar = document.createElement('button');
botonEliminar.type = 'submit';
botonEliminar.className ='btn btn-danger';
botonEliminar.textContent = 'Eliminar';
botonEliminar.addEventListener('click', () =>
 borrarProducto(producto.id));

const botonEditar = document.createElement('button');
botonEditar.type = 'submit';
botonEditar.className ='btn btn-primary ms-3';
botonEditar.textContent = 'Editar';
botonEditar.addEventListener('click', () =>
  window.location.href= `edit.html?id=${producto.id}`
)
cardButtons.appendChild(botonEliminar);
cardButtons.appendChild(botonEditar);
cardFooter.appendChild(cardButtons);


// Contenido de las Cards

cardTitle.textContent = producto.nombre;
cardText.textContent = producto.descripcion;
priceText.textContent = '$' + producto.precio;
stockText.textContent = 'Stock: ' + producto.stock; 

})

} catch (error) {
    console.error("Error al cargar Productos:",error)
}
}

const borrarProducto = async (id)=>{
    try {
        await axios.delete (`http://localhost:3030/productos/${id}`);
        alert("Se elimino correctamente el producto");
        fetchProductos()
    } catch (error) {
        console.error("Error al borrar producto :",error)
    }
    }



fetchProductos();
})