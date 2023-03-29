//MODULO CONSOLE

console.log('Hola mundo!');

console.warn('Ocurrio un error..');

console.error('Ocurrio un error grave');

//console.error(new Error('Ocurrio un error detallado'));

//MODULO OS
const os = require('os');

console.log(os.type());

console.log(os.homedir());

console.log(os.uptime()); //nro de seg que han transcurrido desde que se incicio el sistema operativo

console.log(os.userInfo()); 

//MODULO PROCESS : provee informacion sobre el proceso que se esta ejecutando

//MODULO TIMERS: se utilizan para ejecutar código luego de un cierto periodo de tiempo