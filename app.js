

const argv = require('./Multiplicar/config/yargs').argv;
const {mult} = require('./Multiplicar/multiplicar');

let comando = argv._[0];



mult(argv.tabla,argv.limite).then(archivo=>{
    console.log(`archivo creado tabla del ${argv.tabla}`);
}).catch(err=>{
    console.log(err);
});

console.log(argv.limite);


