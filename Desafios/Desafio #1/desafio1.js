var salarioFinal;
var bono;
var numeroIngresado;
var stringIngresado;
// obj 2
function calcularSalario(salarioBase, cantAnios, nroHijos) {
    if (cantAnios === void 0) { cantAnios = 1; }
    if (nroHijos === void 0) { nroHijos = 0; }
    if (cantAnios > 5) {
        bono = salarioBase * 1.125;
    }
    else {
        bono = salarioBase;
    }
    if ((nroHijos >= 1) && (nroHijos <= 3)) {
        salarioFinal = bono + (nroHijos * 1000);
    }
    else {
        if (nroHijos > 3) {
            salarioFinal = bono + 3000 + ((nroHijos * 500) - 1500);
        }
        else {
            salarioFinal = bono;
        }
    }
    //retorne de esta manera el salario final
    return salarioFinal;
}
// obj 4
function imprimirResultado(x, salary) {
    console.log("***Impresion de resultados***");
    console.log("Nombre: " + x.nombre);
    console.log("Salario: " + salary.toFixed(2) + " $");
    console.log("Antiguedad: " + x.antiguedad + " años");
    console.log("Hijos: " + x.hijos);
}
// obj 5
var trabajador1;
function leerDatos() {
    trabajador1 = {
        nombre: validarTexto('Ingrese su nombre'),
        salario: validarNumero('Ingrese su salario'),
        antiguedad: validarNumero('¿Cuanto tiempo tienes trabajando en la empresa?'),
        hijos: validarNumero('¿Cuantos hijos tienes?')
    };
}
function validarTexto(y) {
    stringIngresado = prompt(y);
    if ((stringIngresado == null) || (!isNaN(stringIngresado))) {
        alert("¡Debes ingresar caracteres!");
        validarTexto(y);
    }
    else {
        if (stringIngresado == " ") {
            alert("¡Debes ingresar caracteres!");
            validarTexto(y);
        }
        else {
            return stringIngresado;
        }
    }
}
function validarNumero(x) {
    numeroIngresado = parseFloat(prompt(x));
    if ((numeroIngresado < 0) || (isNaN(numeroIngresado))) {
        alert("¡Debes ingresar un numero!");
        validarNumero(x);
    }
    else {
        if ((numeroIngresado == null) || (numeroIngresado == " ")) {
            alert("¡Debes ingresar un numero!");
            validarNumero(x);
        }
        else {
            return numeroIngresado;
        }
    }
}
function llamarFunciones() {
    leerDatos();
    calcularSalario(trabajador1.salario, trabajador1.antiguedad, trabajador1.hijos);
    imprimirResultado(trabajador1, salarioFinal);
}
