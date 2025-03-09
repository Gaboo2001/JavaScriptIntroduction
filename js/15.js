//array methods
const meses = ['enero','febrero','marzo','abril','mayo'];

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Tablet', precio: 1000},
    {nombre: 'Television', precio: 800},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'Teclado', precio: 200},
    {nombre: 'Celular', precio: 2500},
    {nombre: 'Bocinas', precio: 6500},
    {nombre: 'Laptop', precio: 5200}
];

//forEach
meses.forEach(function(mes) {
    if (mes == 'marzo') {
        console.log('Marzo si existe');
    }
});

//Includes
let resultado = meses.includes('marzo');
console.log(resultado);

//some ideal para arreglos de objetos
resultado1 = carrito.some(function(producto) {
    return producto.nombre == 'Teclado54'
});
console.log(resultado1);

//reduce. Toma todos los elemntos y los suma 
resultado2 = carrito.reduce(function(total,producto){
    return total + producto.precio
}, 0);
console.log(resultado2);

//Filter
resultado3 = carrito.filter(function(producto){
    return producto.precio > 5000
});
console.log(resultado3);

resultado4 = carrito.filter(function(producto){
    return producto.nombre !== 'Celular' //mUESTA todos los que son diferentes a 'celular'
});
console.log(resultado4);