function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando una: ${producto}.`);
        setTimeout(()=> {
            if (producto === 'taza') {
                resolve ('Ordenando una taza con el logo de la tienda...')
            }else{
            reject('Este producto no está disponible.')
        }
    
        }, 2000);
    });
}

function procesarPedido(respuesta) {
    return new Promise((resolve, reject) => {
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por su compra. ¡Disfruta tu producto!')
        }, 4000);
    });
}


ordenarProducto('taza') //se llama a la primera promesa que retorna una respuesta
    .then(respuesta => {
        console.log('Respuesta recibida');
        console.log(respuesta);
        return procesarPedido(respuesta); // retornamos la ejecucion de la segunda promesa 
        //se ejecuta unicamente si la primera se cumple correctamente
    })
    .then(respuestaProcesada => {
        console.log(respuestaProcesada);
    })
    .catch(err => {
        console.log(err);
    });