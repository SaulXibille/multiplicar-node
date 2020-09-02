const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => console.log(err));
        console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido'.red);

}

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log('Limite', argv.limite);