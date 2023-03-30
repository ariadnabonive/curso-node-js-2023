const EventEmitter = require('events');

const emisorProductos = new EventEmitter();

//funcion manejadora de eventos (Event Handlers)
emisorProductos.on('compra', (total) => {
    console.log(`Se realizó una compra por $${total}.`);
});

//Emitimos el evento compra
emisorProductos.emit('compra', 500);
emisorProductos.emit('compra', 300);
