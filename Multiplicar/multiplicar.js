const fs = require('fs');


let mult = async(tabla,limite) =>{

    if(!Number(tabla)){
        throw new Error(`${tabla} no es un numero`);
        return;
    }

let i = 1;
let data = '';
for(i;i<=limite;i++){
    data +=`${tabla*i}\n`
}

fs.writeFile(`Tablas/tabla del ${tabla}.txt`,data,(err)=>{
    if(err) throw err;
    
});
}

module.exports = {
    mult
}