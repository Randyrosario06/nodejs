const argv = require("yargs").command('listar','imprimir en consola',{
    tabla:{
        demand: true,
        alias: 't'
    },
    limite:{
        alias:'l',
        default:10
    }
})
.argv;

module.exports ={
    argv
}