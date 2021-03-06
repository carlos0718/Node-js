const colors = require('colors');

const fs = require('fs');

const {logica} = require('./logica')

const multiplicar = (base,limite,visualizar) => {

    console.log(`============= Tabla del ${base} =============`.blue);
    if(visualizar){
        console.log(resultado);
    }
    const resultado = logica(base,limite);

    
    const nombreArchivo = `tabla-del-${base}.txt`

    fs.writeFile(`tablas/${nombreArchivo}`, resultado,(err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado!`.rainbow);
    });
};

module.exports = {
    multiplicar : multiplicar
}