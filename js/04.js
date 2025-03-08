//String o Cadenas de Texto

const producto = "Monitor de 20 pulgadas";  //Tipo String
const producto2 = String('Monitor 30 pulgadas'); //Tipo String
const producto3 = new String('Monitor 50 pulgadas'); //Tipo objeto

console.log(producto)
console.log(producto2)
console.log(producto3)

//Sintaxis mas utilizada 

const producto4 = "Monitor de 20 pulgadas";
console.log(producto4)

//Metodos para los strings
 const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
 
 //length es para saber cuantos caracteres hay 
 console.log(tweet.length);

 //indexOf Buscar una palabra en especifico 
 console.log(tweet.indexOf('curso')); //Si es "-1" quiere decir que no encontro la cadena de texto

 //includes retorna true o false si se encontro o no la palabra
 console.log(tweet.includes('Tablet'));
 console.log(tweet.includes('Web'));

