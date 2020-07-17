class Elemento{
    private color:string;
    private contexto:CanvasRenderingContext2D;

    constructor(contexto_:CanvasRenderingContext2D, colorValor?:string){
        this.contexto = contexto_;
        this.color = colorValor || `rgb(${this.aleatorio(0,255)}, ${this.aleatorio(0,255)}, ${this.aleatorio(0,255)})`;
    }

    public getColor(){
        return this.color;
    }
    
    public getContexto(){
        return this.contexto;
    }

    public setColor(colorNuevo:string){
        this.color = colorNuevo;
    }

    public setContexto(contexto_:CanvasRenderingContext2D){
        this.contexto = contexto_;
    }

    /* para obtener un numero aleatorio */
    public aleatorio(from: number, to:number):number{
        return Math.round(Math.random() * (to - from) + from);
    }
}

var Elemento1 = new Elemento(contexto_);
console.log("color del elemento: "+Elemento1.getColor());


class Estrella extends Elemento {
    protected x:number;
    protected y:number;

    constructor(contexto_:CanvasRenderingContext2D, colorcito?:string) {
        super(contexto_, colorcito);
        this.x = Math.round(Math.random()) * 17; 
        this.y = Math.round(Math.random()) * 17;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    setX(valorX:number){
        this.x = valorX;
    }

    setY(valorY:number){
        this.y = valorY;
    }
    
}

class EstrellaRedonda extends Estrella {
    radioEstrella:number  = Math.round(Math.random()) * 21; 

    constructor(contexto_:CanvasRenderingContext2D, colorcito:string){
        super(contexto_, colorcito);
    }
    
    pintar(){
        this.getContexto().fillStyle = this.getColor();

        /*este es el circulo que tiene la estrella de base */
         this.getContexto().beginPath();
         this.getContexto().arc(985, 250, 80, 0, Math.PI * 2);
         this.getContexto().closePath();
         this.getContexto().fill();
        
        /* 1era punta */
         this.getContexto().beginPath();
         this.getContexto().moveTo(955,180);
         this.getContexto().lineTo(990,70);
         this.getContexto().lineTo(1020,180);
         this.getContexto().closePath();
         this.getContexto().fill();

        /* 2da punta */
         this.getContexto().beginPath();
         this.getContexto().moveTo(1040,210);
         this.getContexto().lineTo(1170, 250);
         this.getContexto().lineTo(1040, 290);
         this.getContexto().closePath();
         this.getContexto().fill();

        /* 3era punta */
         this.getContexto().beginPath();
         this.getContexto().moveTo(955, 320);
         this.getContexto().lineTo(990, 430);
         this.getContexto().lineTo(1020,320);
         this.getContexto().closePath();
         this.getContexto().fill();

        /* 4ta punta */
         this.getContexto().beginPath();
         this.getContexto().moveTo(920,210);
         this.getContexto().lineTo(810, 250);
         this.getContexto().lineTo(920,290);
         this.getContexto().closePath();
         this.getContexto().fill();

    }
}

class EstrellaPunteada extends Estrella {
    constructor(contexto_:CanvasRenderingContext2D, colorcito:string){
        super(contexto_, colorcito);
    }
    
    pintar(contexto_:CanvasRenderingContext2D,colorcito:string){
        contexto_.fillStyle = colorcito;
        /* 1era punta */
        contexto_.beginPath(); 
        contexto_.moveTo(560, 140); 
        contexto_.lineTo(600, 40); 
        contexto_.lineTo(640, 140); 
        // 2da punta
        contexto_.moveTo(420, 140);
        contexto_.lineTo(780, 140); 
        contexto_.lineTo(640, 240);

        // 3ra punta
        contexto_.moveTo(668, 220);
        contexto_.lineTo(740, 360);
        contexto_.lineTo(520, 220);
        // 4ta punta
        contexto_.moveTo(600,260);
        contexto_.lineTo(460, 360); 
        contexto_.lineTo(520, 220); 
        // 5ta punta
        contexto_.moveTo(520, 220);
        contexto_.lineTo(420, 140); 
        contexto_.lineTo(780, 140); 
        contexto_.closePath();
        contexto_.fill();
    }
}

class Cielo extends Elemento {
    public x_axis  : number;
    public y_axis  : number;
    public wCanvas: number;
    public hCanvas: number;

   constructor(contexto_:CanvasRenderingContext2D, color:string){
       super(contexto_, color);
       this.x_axis = 0;
       this.y_axis = 0;
       this.wCanvas = 1320;
       this.hCanvas = 600;
   }

   pintarCielo() {
    contexto_.fillStyle = this.getColor();
    contexto_.fillRect(this.x_axis,this.y_axis,this.wCanvas,this.hCanvas);
  }
}

/* hacemos el llamado al canvas,
le asignamos un contexto y unos nuevos Width y Height*/
var canvas3: any = document.getElementById("lienzoD3");
var contexto_ = canvas3.getContext("2d");
let widthNew3:number = 1320;
let heightNew3:number = 600;

canvas3.width = widthNew3;
canvas3.height= heightNew3;

var sky:Cielo = new Cielo(contexto_, "lightblue");
sky.pintarCielo();
var ordinaryStar:EstrellaPunteada = new EstrellaPunteada(contexto_,"gold");
ordinaryStar.pintar();
var roundStar:EstrellaRedonda = new EstrellaRedonda(contexto_, "yellow");
roundStar.pintar(contexto_, "gold");

