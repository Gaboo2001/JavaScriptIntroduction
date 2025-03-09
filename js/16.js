//Declaracion de Función 
function sumar() {
    console.log(10+10);
}
sumar();

//Expresion de la función
const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();

//IIFE //Tambien sivre para proteger funciones y que no salgan de este mismo archivo
(function() {
    console.log('Esto es una función');
})();


//Tambien se puuede usar esta sinataxis y tambien funciona aqui primero se llama la funcion y depues se declara 
sumar();
function sumar() {
    console.log(10+10);
}


