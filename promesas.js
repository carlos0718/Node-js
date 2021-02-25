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
    },
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
    }
]

const getEmpleadoById = (id) => {

    return new Promise((resolve, reject)=>{

        const empleados = empleado.find((e => e.id === id));
    
        if (empleados) {
            resolve(empleados);//se pone null como primer parametro de la funcion
            return;
        }
        reject(`El empleado con id ${id} no existe`)
    });
}

const getSueldoById = (id) => {
    
    return new Promise((resolve, reject)=>{
        
        const sueldo = salario.find((e => e.id === id));
        
        if (sueldo) {
            resolve(sueldo);//se pone null como primer parametro de la funcion
            return;
        }
        reject(`El sueldo con id ${id} no existe`)
    });
}

const id = 4;
let nombre;

getEmpleadoById(id)
    .then(empleado=>{
        nombre = empleado.nombre;
        return getSueldoById(id);
    })
    .then(sueldo => {
        console.log(`El empleado ${nombre} tiene un sueldo de ${sueldo.sueldo}`);
    })
    .catch(err=> console.log(err))

    
