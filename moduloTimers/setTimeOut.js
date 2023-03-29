function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

setTimeout(mostrarTema, 3000, "Python");

function sumar(a,b) {
    console.log(a+b);
}

setTimeout(sumar, 2000, 10,5);