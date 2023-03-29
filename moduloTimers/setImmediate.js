function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

console.log("Antes de setInmmediate()");

setImmediate(mostrarTema, "Node.js");

console.log("Despues de setInmmediate()");

//Se ejecuta inmediatamente despues del código síncrono.