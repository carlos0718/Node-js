const empleado = [
  {
    id: 1,
    nombre: "Pepe",
  },
  {
    id: 2,
    nombre: "Juan",
  },
  {
    id: 3,
    nombre: "Max",
  },
  {
    id: 4,
    nombre: "Carlos",
  }
];

const salario = [
  {
    id: 1,
    sueldo: 10000,
  },
  {
    id: 2,
    sueldo: 20000,
  },
  {
    id: 3,
    sueldo: 30000,
  },
];

const getEmpleadoById = async (id) => {
    try {
        const empleados = empleado.find((e) => e.id === id);
      
        if (empleados) {
          return empleados;
        }
        throw new Error(`El empleado con id ${id} no existe`);
    } catch (error) {
        
        throw error;
    }
};

const getSueldoById = async (id) =>{
    try {
        const sueldo = salario.find((e) => e.id === id)
        if (sueldo) {
            return sueldo;
        }
        throw new Error (`El sueldo con id ${id} no existe`);
    } catch (error) {
        throw error;
    }
}
const id = 5; 

const getDatosCompletosEmpleados = async (id) => {

    try {
      const empleado = await getEmpleadoById(id);
      const sueldo = await getSueldoById(id);
      return{
        id,
        nombre : empleado.nombre,
        sueldo : sueldo.sueldo
      }
    } catch (error) {
      throw error;
    }
    
}
getDatosCompletosEmpleados(id)
  .then(data => console.log(`el empleado con id ${data.id} es ${data.nombre} y tiene un sueldo de ${data.sueldo}`))
  .catch(err => console.log(err.message));



