const saludar = () =>{
    console.log('Hola Mundo Node');
}

setTimeout(saludar,2000);
///
const getUsuarioById = (id,callback) => {

    const user = {
        id,
        nombre : 'Carlos'
    }
    setTimeout(()=>{
        callback(user);
    },1000);
}

const imprimirUsuario = ({nombre,id}) => {
    console.log(`Nombre: ${nombre.toUpperCase()} - Id: ${id}`);
}
getUsuarioById(10,imprimirUsuario);
///