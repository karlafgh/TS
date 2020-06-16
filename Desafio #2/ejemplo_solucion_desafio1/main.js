function calcular(sueldo_base, antiguedad, cantidad_hijos) {
    if (antiguedad === void 0) { antiguedad = 1; }
    if (cantidad_hijos === void 0) { cantidad_hijos = 0; }
    var bono_antiguedad = antiguedad > 5 ? sueldo_base * 0.125 : 0;
    var bono_hijos = cantidad_hijos * 1000;
    if (cantidad_hijos > 3) {
        bono_hijos = (cantidad_hijos - 3) * 500 + 3000;
    }
    return sueldo_base + bono_antiguedad + bono_hijos;
}
function validarString(mensaje) {
    var texto;
    do {
        texto = prompt(mensaje);
    } while (!isNaN(texto));
    return texto;
}
function validarNumber(mensaje) {
    var numero;
    do {
        numero = parseInt(prompt(mensaje));
        if (numero == 0)
            return 0;
    } while (!numero || numero < 0);
    return numero;
}
function imprimir(t, total) {
    console.log('/////////RESULTADO///////////');
    console.log('nombre del trabajador: ' + t.nombre);
    console.log('sueldo del trabajador: ' + t.sueldo);
    console.log('antiguedad del trabajador: ' + t.antiguedad);
    console.log('hijos del trabajador: ' + t.hijos);
    console.log('el sueldo total del trabajador: ' + total);
}
var trab = {
    nombre: validarString('ingresa el nombre'),
    sueldo: validarNumber('ingresa el sueldo'),
    antiguedad: validarNumber('ingresa el antiguedad'),
    hijos: validarNumber('ingresa el hijos')
};
var sueldo_total = calcular(trab.sueldo, trab.antiguedad, trab.hijos);
imprimir(trab, sueldo_total);
