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
    ,
    {
        id : 4,
        nombre : 'Carlos'
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
    },

]

const getEmpleadoById = (id, callback) => {
    const empleados = empleado.find((e => e.id === id));

    if (empleados) {
        callback(null,empleados);//se pone null como primer parametro de la funcion
        return;
    }
    callback(`El empleado con ${id} no existe`);
}

const getSueldoById = (id,callback)=>{
    const pago = salario.find((s)=> s.id === id)

    if(pago){
        callback(null,pago);
        return;
    }
    callback(`el sueldo con id ${id} no existe`);
}

const id = 5;

getEmpleadoById(id,(error,empleado)=>{
    if (error) {
        console.log('ERROR!!!....');
        console.log(error);
        return;
    }
/*     console.log(`El empleado: ${empleado.nombre}...`); */
    getSueldoById(id,(error, pago)=>{
        if(error){
            console.log('ERROR!!!!');
            console.log(error);
            return;
        }
        console.log(`El empleado ${empleado.nombre} tiene un sueldo de ${pago.sueldo}`);
    })
})
