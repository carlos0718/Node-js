const empleado = [
    {
        id : 1,
        nombre : 'Pepe'
    },
    {
        id : 2,
        nombre : 'Juan'
    },
    {
        id : 3,
        nombre : 'Max'
    }
]

const salario = [
    {
        id : 1,
        sueldo : 10000
    },
    {
        id : 2,
        sueldo : 20000
    },
    {
        id : 3,
        sueldo : 30000
    }
]

const getEmpleadoById = (id, callback) => {
    const empleados = empleado.find((e => e.id === id));

    if (empleados) {
        callback(null,empleados);//se pone null como primer parametro de la funcion
        return;
    }
    callback(new Error('El empleado no existe'));
}

const id = 1;

getEmpleadoById(id,(error,empleado)=>{
    if (error) {
        console.log('ERROR!!!....');
        console.log(error);
        return;
    }
    console.log(`El empleado: ${empleado.nombre}...`);
})