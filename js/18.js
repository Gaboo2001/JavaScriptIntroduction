//Forma 1
function sumar(numero1, numero2) { //numero1 y numero2 son parametros
    console.log(numero1+numero2);
}
sumar(10,10); //Argumentos o los valores reales
sumar(5,3);

//Forma 2
const sumar2 = function(n1,n2){
    console.log(n1,n2);
}
sumar2(6,9);


//fORMA DE COMO APLICAR ARGUMETOS POR DEFAULT
function sumar3(numero1 = 0, numero2=0) { //numero1 y numero2 son parametros
    console.log(numero1+numero2);
}
sumar3(10,10); //Argumentos o los valores reales
sumar3(5);
sumar3(9);