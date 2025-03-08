// Objetos 

const producto = {
    nombreproducto : "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true
}

//Forma anterior 
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;
// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring
const {precio , nombreproducto} = producto;

console.log(precio);
console.log(nombreproducto);


