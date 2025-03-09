//Otra forma de crer funciones 
//Arrow Functios


const sumar2 = (n1, n2) => console.log( n1 + n2);
sumar2(5, 10);


const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)

aprendiendo('JavaScript');



// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// forEach
meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

let resultado;


// Some ideal para arreglo de objetos
resultado = carrito.some( producto => producto.nombre === 'Celular');

// Reduce
resultado = carrito.reduce( (total, producto) =>  total + producto.precio, 0);

// Filter
resultado = carrito.filter( producto => producto.precio > 400);
resultado = carrito.filter( producto =>  producto.nombre !== 'Celular');

console.log(resultado);

//Esta sintaxis para las funciones es mejor ya que es mar corta, NOTA: Cuando se tiene un solo parametro no es 
//necesario el parentesis, solo se pone cuando son 2 o mas. El return tambien se quita 