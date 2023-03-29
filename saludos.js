function saludar(nombre) {
    return `Hola, ${nombre}`;
}

function holaMundo() {
    return "¡Hola Mundo!"
}

module.exports = {
    saludar: saludar,
    holaMundo: holaMundo
};

//exportar una sola funcion
//module.exports.saludar = saludar;
//module.exports.holaMundo = holaMundo;