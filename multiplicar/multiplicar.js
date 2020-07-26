/** 
 * requires 
 * doc de node 
 * https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system 
 * 
 * */
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('========================'.green);
    console.log(`==== Tabla de ${base} ==`.green);
    console.log('========================'.green);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} =  ${i*base} `);
    }


}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base "${ base }" dada no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El límite "${ limite }" dado no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${i*base} \n`;
        }
        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) throw err;
            else
                resolve(`tabla-${base}.txt  con limite ${limite}`);
        });


    })
}



module.exports = {
    crearArchivo,
    listarTabla
}