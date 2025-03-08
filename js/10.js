// Objetos 

const producto = {
    nombreproducto : "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true
}



// console.log(producto.precio); //Se accede al valor de precio 
// console.log(producto.nombreproducto); //Se accede al nombre del producto 

// //segunda forma de acceder a propiedades pero no es muy comun
// console.log(producto["nombreproducto"]);

//Agregando al objeto nuevas propiedades
producto.imagen = 'imagen.jpg';


//Eliminar propiedades
delete producto.disponible;
console.log(producto);
