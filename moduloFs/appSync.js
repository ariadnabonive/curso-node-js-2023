
const fs = require('fs');

//Leer un archivo 
console.log("Antes de leer el archivo");

const archivo =  fs.readFileSync('index.html', 'utf-8');

console.log(archivo);

console.log("Despues de leer el archivo");

//Cambiar nombre a un archivo 
fs.renameSync('index.html', 'main.html');

console.log("Despues de cambiar el nombre del archivo");

//Agregar contenido al final de un archivo 
fs.appendFileSync('main.html', '<p>Hola este es un append</p>');

console.log("Despues de agregar contenido al archivo");

//Reemplazar todo el contenido de un archivo 
fs.writeFileSync('main.html', 'Contenido nuevo');

console.log("Despues de reemplazar todo el contenido del archivo");

//Eliminar un archivo 
 fs.unlinkSync('main.html');

 console.log("Despues de eliminar el archivo");