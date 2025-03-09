const puntaje = 1000;

if (puntaje ===1000) {
    console.log('El puntaje es igual');
} else {
    console.log('El no es igual');
}

const puntaje1 = 100;

if (puntaje !==1000) {
    console.log('El puntaje es diferente a 1000');
} else {
    console.log('Es igual');
}

const efectivo = 1000;
const carrito = 1800;

if (efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}

const rol = 'EDIFF';

if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'EDITOR') {
    console.log('Eres editor puedes entrar pero no puedes hacer mucho');
} else {
    console.log('No tienes acceso');
}