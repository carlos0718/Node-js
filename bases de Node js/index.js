const argv = require('yargs')
            .option('b',{
                alias : 'base',
                type : 'number',
                demandOption : true,
                describe : 'Es la base de la tabala de multiplicar'
            })
            .option('l',{
                alias : 'limite',
                type : 'number',
                demandOption : false,
                default : 10,
                describe : 'Es el limte del multiplicador'
            })
            .option('v',{
                alias : 'visualizar',
                type : 'boolean',
                demandOption : true,
                default : false,
                describe : 'Muestra tabala de multiplicar en consola'
            })
            .check((argv,option) => {
                if (isNaN(argv.b)) {
                    throw new Error('La base tiene que ser un número.')
                }
                return true;
            })
            .help() 
            .version()

            .argv;

const { multiplicar } = require('./multiplicador');

multiplicar(argv.b,argv.l,argv.v);
