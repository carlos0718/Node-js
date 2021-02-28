const personajes = {
    nombre : 'Pepe',
    apellido : 'Argento',
    profesion : 'Zapatero',
    getDescripcion(){
        return `${this.nombre} ${this.apellido} es ${this.profesion}`
    }
}

/* console.log(personajes.getDescripcion());  */

/* const {nombre, apellido, profesion} = personajes;
console.log(nombre, apellido, profesion); */

//funcion destructuracion
const imprimirPersonaje = ({nombre, apellido, profesion})=>{
    console.log(nombre, apellido, profesion);
}
imprimirPersonaje(personajes);

const actores = ['Pepe','Moni','koki'];

/* const p1 = actores[0]
const p2 = actores[1]
const p3 = actores[2] */

const [p1,p2,p3] = actores;

console.log(p1,p2,p3);