function ordenarProducto(producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando : ${producto} de la tienda.`);
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

//-----------------ENCANDENANDO PROMESAS----------------------

// ordenarProducto('taza') //se llama a la primera promesa que retorna una respuesta
//     .then(respuesta => {
//         console.log('Respuesta recibida');
//         console.log(respuesta);
//         return procesarPedido(respuesta); // retornamos la ejecucion de la segunda promesa 
//         //se ejecuta unicamente si la primera se cumple correctamente
//     })
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada);
//     })
//     .catch(err => {
//         console.log(err);
//     });

//--------------ASYNC Y AWAIT------------------
// El codigo se va a ejecutar linea por linea ya que la ejecución va a esperar que los procesos
// internos se ejecuten para pasar a leer el proximo sin importar el tiempo de ejecución.

async function realizarPedido(producto) {
    try {
        const respuesta = await ordenarProducto(producto);
        console.log('Respuesta recibida');
        const respuestaProcesada = await procesarPedido(respuesta);
        console.log(respuestaProcesada);
    } catch (error) {
        console.log(error);
    }
}

realizarPedido('taza');

// las funciones asíncronas retornan promesas