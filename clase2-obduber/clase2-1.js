/* class Figura {
    x:number
    y:number
    nombre:string
    mostrarInformacion(){
        console.log("El nombre de la persona")
        console.log(this.nombre)
    }
}
let p:Figura
p = new Figura()
/* /* p.nombre = "obduber"
p.nombre = prompt("ingresa tu nombre")
p.mostrarInformacion()
 */
var Pelota = /** @class */ (function () {
    function Pelota() {
    }
    Pelota.prototype.dibujar = function () {
        contexto.fillStyle = this.color;
        contexto.fillRect(this.posicion_x, this.posicion_y, this.tamano, this.tamano);
        console.log(this.color);
    };
    Pelota.prototype.actualizar = function () {
        if (this.posicion_x > (ancho - this.tamano) || this.posicion_x <= 0) {
            this.direcion_x = -this.direcion_x;
        }
        if (this.posicion_y > (alto - this.tamano) || this.posicion_y <= 0) {
            this.direcion_y = -this.direcion_y;
        }
        this.posicion_x += this.direcion_x;
        this.posicion_y += this.direcion_y;
    };
    return Pelota;
}());
var canvas = document.getElementById("lienzo");
var contexto = canvas.getContext("2d");
var ancho = 500;
var alto = 400;
canvas.width = ancho;
canvas.height = alto;
var r = new Pelota();
r.color = "red";
r.posicion_x = 10;
r.posicion_y = 10;
r.tamano = 20;
r.direcion_x = 10;
r.direcion_y = 10;
r.dibujar();
contexto.fillRect(0, 0, 300, 300);
contexto.clearRect(10, 10, 200, 200);
setInterval(function () {
    console.log("Repetir");
    contexto.clearRect(0, 0, ancho, alto);
    r.dibujar();
    r.actualizar();
}, 1000 / 24);
/* let r2:Pelota = new Pelota()

r2.color = "amarillo"
r2.dibujar() */ 
