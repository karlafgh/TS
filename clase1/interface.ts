// esto es para crear una estructura de datos. NO para asignarle valores
interface IAlumno{
    nombre:string,
    apellido:string,
    edad:number,
    id:string,
}

//inicializo
let alumno2:IAlumno;

//para asignarle el valor obligatoriamente debe ser con ":"
alumno2 = {nombre:"Katherine",apellido:"Gómez", edad:4,id:"v-50540135"};

// aqui le cambié el nombre que ya se habia asignado
alumno2.nombre = "Karla";

//muestro con una funcion un objeto IAlumno obligatoriamente
function imprimir(x:IAlumno) {
    console.log("Nombre del alumno #1: "+ alumno2.nombre);
    console.log("Apellido del alumno #1: "+ alumno2.apellido);
    console.log("Edad del alumno #1: "+ alumno2.edad);
    console.log("Cédula del alumno #1: "+ alumno2.id);
}

imprimir(alumno2)