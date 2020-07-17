// debe comenzar en mayusculas
class Pelota {
    posicion_x  : number
    posicion_y  : number
    size        : number
    color       : string
    direction_x : any
    direction_y : any

    dibujar(){
        contexto.fillStyle = this.color;
        contexto.fillRect(this.posicion_x, this.posicion_y, this.size, this.size);
        console.log(this.color);
    }

    actualizar(){
        if((this.posicion_x > (ancho - this.size) || (this.posicion_y <= 0))){
            this.direction_x = -this.direction_x
        }
        if((this.posicion_y > (alto - this.size)) || (this.posicion_y <= 0)){
            this.direction_y = -this.direction_y
        }
        this.posicion_x += this.direction_x 
        this.posicion_y += this.direction_y
    }
}

var canvas:any = document.getElementById("lienzo");
var contexto = canvas.getContext("2d");
let ancho = 500;
let alto = 400;

canvas.width = ancho;
canvas.height= alto;

// aqui estoy instanciando este objeto y diciendole que es un nuevo objeto de esta clase
let pelotita:Pelota = new Pelota();
pelotita.color = "lightblue";
pelotita.posicion_x = 10;
pelotita.posicion_y = 10;
pelotita.direction_x = 10;
pelotita.direction_y = 10;
pelotita.size = 50;

pelotita.dibujar();

// recibe una funcion y un tiempo
setInterval(()=>{
    contexto.clearRect(0,0,canvas.width, canvas.height)
    
    pelotita.actualizar()
    pelotita.dibujar();
},1000/24)

// let pelotita2:Pelota = new Pelota();
// pelotita2.color = "golden";
// pelotita2.dibujar();