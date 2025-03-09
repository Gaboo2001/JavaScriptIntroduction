// Objetos 
// "use strict"; //Correr JS en modo estricto
const producto = {
    nombreproducto : "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true
}
Object.freeze(producto); //Hace que ya no podramos agregar  ni eliminar propiedades al objeto

//Agregando al objeto nuevas propiedades
producto.imagen = 'imagen.jpg';
console.log(producto);



const producto1 = {
    nombreproducto1 : "Monitor",
    precio1: 300, 
    disponible1: true
}
Object.seal(producto1); //El .seal no permite eliminar ni agregar nuevas propiedades pero si modifica los propiedades existentes
producto1.precio1 = 'Nueo precio';
delete producto1.precio1;
console.log(producto1);


