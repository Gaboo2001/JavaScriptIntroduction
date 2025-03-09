//Arreglos O Arrays

const numeros =[10,20,30,40,50] //Cuanto tiene corchetes es un arreglo
console.table(numeros);

const meses = new Array('enero','febrero','marzo','abril','mayo'); //Esto es un constructor de un arreglo pero no es muy comun utilizarla
console.table(meses);

const arreglo = ["Hola", 10, true, "si", null, {nombre : "Gabo", trabajo : "Programador"}, [1,2,3]];
console.log(arreglo);

//Acedder a los elemntos de un arreglo
console.log(numeros[4]); // ACCEDE AL 50
console.log(numeros[200]); //No exite

//Conocer la extencion de un arreglo
console.log(meses.length);

//recorrer arreglo
numeros.forEach (function(numeros)
{
    console.log(numeros)

})

//Agregar elementos a un arreglo 

const ejemploArreglo1 =[10,20,30,40,50] 
ejemploArreglo1[5] = 60;


//forma 2
ejemploArreglo1.push(100,66,32); //agrega al final del arreglo 
ejemploArreglo1.unshift(-55,-58); //agrega al principio del arreglo
console.table(ejemploArreglo1);

//Eliminar elemeentos 
const ejemploMeses = ['enero','febrero','marzo','abril','mayo'];
ejemploMeses.pop(); //Elimina wl segundo elemento
ejemploMeses.shift(); //Elimna el primer elemento
console.table(ejemploMeses);

//Eleminar valor especificos
const ejemploMeses1 = ['enero','febrero','marzo','abril','mayo'];
ejemploMeses1.splice(2,1); //El primer valor es la posicion y el segundo es apartir de ahi cuantos se van a elimniar
console.table(ejemploMeses1);


//Rest Operator o Spread Operator

const ejemploMeses2 = ['enero','febrero','marzo','abril','mayo'];
const nuevoArreglo = [...ejemploMeses2, 'Junio'];
// const nuevoArreglo = [...'Junio',ejemploMeses2 ]; //tambien se pueden agregar al principio
console.table(nuevoArreglo);
