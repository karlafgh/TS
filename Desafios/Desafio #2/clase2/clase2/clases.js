// debe comenzar en mayusculas
var Pelota = /** @class */ (function () {
    function Pelota() {
    }
    Pelota.prototype.dibujar = function () {
        contexto.fillStyle = this.color;
        contexto.fillRect(this.posicion_x, this.posicion_y, this.size, this.size);
        console.log(this.color);
    };
    Pelota.prototype.actualizar = function () {
        if ((this.posicion_x > (ancho - this.size) || (this.posicion_y <= 0))) {
            this.direction_x = -this.direction_x;
        }
        if ((this.posicion_y > (alto - this.size)) || (this.posicion_y <= 0)) {
            this.direction_y = -this.direction_y;
        }
        this.posicion_x += this.direction_x;
        this.posicion_y += this.direction_y;
    };
    return Pelota;
}());
var canvas = document.getElementById("lienzo");
var contexto = canvas.getContext("2d");
var ancho = 500;
var alto = 400;
canvas.width = ancho;
canvas.height = alto;
// aqui estoy instanciando este objeto y diciendole que es un nuevo objeto de esta clase
var pelotita = new Pelota();
pelotita.color = "lightblue";
pelotita.posicion_x = 10;
pelotita.posicion_y = 10;
pelotita.direction_x = 10;
pelotita.direction_y = 10;
pelotita.size = 50;
pelotita.dibujar();
// recibe una funcion y un tiempo
setInterval(function () {
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    pelotita.actualizar();
    pelotita.dibujar();
}, 1000 / 24);
// let pelotita2:Pelota = new Pelota();
// pelotita2.color = "golden";
// pelotita2.dibujar();
