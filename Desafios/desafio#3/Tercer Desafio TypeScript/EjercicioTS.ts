class Elemento{
  private _color    : string;
	private _contexto : CanvasRenderingContext2D;
  
constructor(contexto:CanvasRenderingContext2D,color?:string) {
    this._color    = color || `rgb(${this.aleatorio(0, 255)},${this.aleatorio(0, 255)},${this.aleatorio(0, 255)}`;
    this._contexto = contexto
 }
  
public getColor():string{
   	return this._color
}

public getContexto():CanvasRenderingContext2D{
	return this._contexto
}

public setColor(color:string){
  this._color = color  
}

public setContexto(ctx:CanvasRenderingContext2D){
  this._contexto = ctx
  
}
 public aleatorio(desde: number, hasta: number): number {
    return Math.round(Math.random() * (hasta - desde) )
}


}


class Estrella extends Elemento{
  protected _X : number;
  protected _Y :  number;
  
  
  aleatorioEstrella(hasta): number{
    return Math.round(Math.random() * hasta )
  }

  constructor(ctx:CanvasRenderingContext2D,color?:string,_X?:number,_Y?:number) {
    super(ctx);
    this._X  = this.aleatorioEstrella(800);
    this._Y  = this.aleatorioEstrella(400);
  
   

    
  }

  public getPosicionX():number {
    return this._X;
  }
  
  public getPosicionY():number {
    return this._Y;
  }

  public setPosicionX(X:number) {
    this._X = X;

  }

  public setPosicionY(Y:number) {
    this._Y = Y;
  }
  


}



class EstrellaRedonda extends Estrella{
  public _radio: number;

  constructor(ctx:CanvasRenderingContext2D,color?:string,_radio?:number) {
    super(ctx,color)
    this._radio = this.aleatorio(0, 100);
    
  }

  pintar(){
    ctx.beginPath();
    ctx.fillStyle = this.getColor();
    ctx.arc(this.getPosicionX(), this.getPosicionY(), this._radio, 0, Math.PI * 2)
    ctx.stroke();
    ctx.fill();

    
    //dibuja circulo
    
    //primera punta
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.fillStyle = this.getColor();
    ctx.moveTo(280,70)
    ctx.lineTo(300, 20);
    ctx.lineTo(320,70);
    ctx.stroke();
    ctx.fill();
    //Segunda 
    ctx.beginPath();
    ctx.moveTo(320,70);
    ctx.lineTo(370,70);
    ctx.lineTo(334, 110);
    ctx.stroke();
    ctx.fill();
    //tercera
    ctx.beginPath();
    ctx.moveTo(334,110);
    ctx.lineTo(350,160);
    ctx.lineTo(300, 120);
    ctx.stroke();
    ctx.fill();
    //cuarta
    ctx.beginPath();
    ctx.moveTo(300,120);
    ctx.lineTo(240,160);
    ctx.lineTo(260, 110);
    ctx.stroke();
    ctx.fill();
    //quinta
    ctx.beginPath();
    ctx.moveTo(260,110);
    ctx.lineTo(230,70);
    ctx.lineTo(280, 70);
    ctx.stroke();
    ctx.fill();
    
    
 }

  
}

class EstrellaPunteada extends Estrella{
  constructor(ctx:CanvasRenderingContext2D,color?:string) {
    super(ctx,color)
  }
  pintar() {
    ctx.lineWidth = 1;
    //primera punta
    ctx.fillStyle = this.getColor();
    ctx.moveTo(280,70)
    ctx.lineTo(300, 20);
    ctx.lineTo(320,70);
    ctx.stroke();
    //Segunda 
    ctx.beginPath();
    ctx.moveTo(320,70);
    ctx.lineTo(370,70);
    ctx.lineTo(334, 110);
    ctx.stroke();
    //tercera
    ctx.beginPath();
    ctx.moveTo(334,110);
    ctx.lineTo(350,160);
    ctx.lineTo(300, 120);
    ctx.stroke();
    //cuarta
    ctx.beginPath();
    ctx.moveTo(300,120);
    ctx.lineTo(240,160);
    ctx.lineTo(260, 110);
    ctx.stroke();
    //quinta
    ctx.beginPath();
    ctx.moveTo(260,110);
    ctx.lineTo(230,70);
    ctx.lineTo(280, 70);
    ctx.stroke();
    ctx.fill();
    
  }
}



class Cielo extends Elemento{
  public alto : number;
  public ancho: number;
  public poX  : number;
  public poY  : number;

  constructor() {
    super(ctx)
    this.poX   = this.aleatorio(0, 500);
    this.poY   = this.aleatorio(0, 400);
    this.alto  = 400;
    this.ancho = 900;
}
  pintarCielo() {
    ctx.fillStyle = this.getColor();
    ctx.fillRect(this.poX,this.poY,this.ancho,this.alto)

  }

}

let canvas: any = document.getElementById("canvas");
let ctx   : CanvasRenderingContext2D = canvas.getContext("2d");

let width     = 1000;
let height    = 450;
canvas.width  = width;
canvas.height = height;

let cielo:Cielo = new Cielo();
cielo.pintarCielo();

let estrella1 : EstrellaPunteada = new EstrellaPunteada(ctx);
estrella1.pintar();

let estrella2: EstrellaRedonda = new EstrellaRedonda(ctx);
estrella2.pintar();




