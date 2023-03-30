//--------PARA TRAER EL OBJETO DEL ARCHIVO CURSO.JSON--------
// const curso = require('./curso.json');

// console.log(curso);
//console.log(typeof curso);
//-- acceder a las propiedades del objeto --
// console.log("titulo:" + curso.titulo);
// console.log("temas: " + curso.temas);

//--------PARA CREAR EL OBJETO JAVASCRIPT --------

let infoCurso = {
    "titulo" : "Aprende Node.js",
    "numVistas" : 45642,
    "numLikes" :21123,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
};

//-----PASARLO A FORMATO JSON ----------------------
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

//----PASAR EL JSON A OBJETO JAVASCRIPT ------------
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);