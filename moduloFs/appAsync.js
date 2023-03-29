
const fs = require('fs');

//Leer un archivo 
console.log("Antes de leer el archivo");

fs.readFile('index.html', 'utf-8', (err, contenido)=>{
    if (err) {
        throw err; //corta la ejecucion de la función. 
        //console.log(err); muestra el error en consola sin cortar la ejecición.
    } else {
        console.log(contenido);
    }
    //console.log("Mensaje a mostrar luego del error.");
});
console.log("Despues de leer el archivo");

//Cambiar nombre a un archivo 
fs.rename('index.html', 'main.html', (err) => {
    if (err) {
        throw err;        
    }
    console.log("Despues de cambiar el nombre del archivo");
});
console.log("Despues de cambiar el nombre del archivo");

//Agregar contenido al final de un archivo 
fs.appendFile('main.html', '<p>Hola este es un append</p>', (err) => {
     if (err) {
         throw err;        
     }
     console.log('Archivo actualizado exitosamente');
 });
 console.log("Despues de agregar contenido al archivo");

//Reemplazar todo el contenido de un archivo 
fs.writeFile('main.html', 'Contenido nuevo', (err) => {
    if (err) {
        throw err;        
    }
    console.log('Contenido remplazado exitosamente');
});
console.log("Despues de reemplazar todo el contenido del archivo");

//Eliminar un archivo 
 fs.unlink('main.html', (err) => {
     if (err) {
         throw err;        
     }
     console.log('Archivo eliminado exitosamente');
 });
 console.log("Despues de eliminar el archivo");