const producto = {
    nombreproducto : "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true
}
const medidas= {
    peso : '1kg',
    medidas : '1m'
}

const nuevoProducto = {...producto, ...medidas}; //Uniendo dos objetos sin modificar nada con el operador Spread Operator

console.log(producto);
console.log(nuevoProducto);