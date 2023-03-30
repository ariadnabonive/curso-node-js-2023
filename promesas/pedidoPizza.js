//simulamos un resultado aleatorio para evaluarlo en la promesa
const estatusPedido = () => {
    return Math.random() < 0.8;
};

//definimos la promesa que evalua el estatus del pedido
const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('¡Pedido exitoso! Su pizza está en camino.')
        } else {
            reject('Ocurrio un error. Por favor intente nuevamente.')
        }
    }, 3000);
});

//----------------- primera opcion------------------
//funciones que utilizaremos cuando se resuelva o se rechace la promesa
// const manejarPedidoExitoso = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };

// const manejarPedidoRechazado = (mensajeDeError) => {
//     console.log(mensajeDeError);
// };

// //definimos cuales funciones utilizar para el reject y el resolve de la promesa
// opcion 1: miPedidoDePizza.then(manejarPedidoExitoso, manejarPedidoRechazado); 
// opcion 2: miPedidoDePizza.then(manejarPedidoExitoso).catch(manejarPedidoRechazado);

//----------------- segunda opcion (method chainning)------------------
miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    });