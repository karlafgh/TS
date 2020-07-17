var nombre = prompt("¿Cual es tu nombre?");
function saludar(nombre) {
    alert("Hello, " + nombre);
}
saludar(nombre);
function sumar(nro, nro2) {
    return nro + nro2;
}
// aqui mostramos en consola lo que retorna la función
console.log("La suma es: " + sumar(20, 80));
function promediar(nro, nro2, nro3, solo_sumar) {
    var suma = nro + nro2 + nro3;
    // esto se aplica si es positivo
    if (solo_sumar) {
        alert("La suma de los numeros es: " + suma);
    }
    else {
        alert("El promedio es: " + suma / 3);
    }
}
promediar(80, 90, 70, true);
promediar(80, 90, 70, false);
