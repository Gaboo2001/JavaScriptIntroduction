//This 
const reservacion = {
    nombre: 'Gabriel',
    apellido: 'Hernandez',
    total: 500,
    pagado: false,
    informacion: function () { 
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}


reservacion.informacion();


//Esto no se tiee que hacer 
const reservacion2 = {
    nombre: 'Gabriel',
    apellido: 'Hernandez',
    total: 500,
    pagado: false,
    informacion:  () => { //METODO ARROW (Flecha) para funcion 
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}
//No se tuene que hace eso porque ahi no va encontrar al parametro en este caso el nombre por lo tanto va a dar error
//Porque ña funcion arroe va buscar el objeto pero fuera del objeto entonces tendria que estar definido aafuera del objetp