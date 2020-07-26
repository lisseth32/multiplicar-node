const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en console la tabla de multiplicar', opts)
    .command('crear', 'Crea archivo con la tabla de multiplicar hasta el límite dado', opts)
    .help()
    .argv;


module.exports = {
    argv
}