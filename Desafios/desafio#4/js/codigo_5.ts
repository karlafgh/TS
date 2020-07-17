//declaraciones generales
let canvas: any         = document.getElementById("canvas4");
let contexto            = canvas.getContext("2d");
let anchoCanvas: number = canvas.width;
let largoCanvas: number = canvas.height;

enum Colores{
    Red,  
    White, 
    Purple, 
    Orange, 
    Green, 
    Grey, 
    Yellow,
    Black
}

class Operaciones{

    static randomBoolean():boolean{  
        
        let finalNumber = Math.round(1 + Math.random() * (50 - 1));

        if (finalNumber % 2 == 0) {
            return true;
        }else{
            return false;
        }
    }

    static randomNumero_(desde:number, hasta:number){
        return Math.round(desde + Math.random() * (hasta - desde));
    }

    static numberToString(numero:number):string{
        switch (numero) {
            case 0:
                return "red";
            case 1:
                return "white";
            case 2:
                return "purple"
            case 3:
                return "orange"
            case 4:
                return "green"
            case 5:
                return "grey"
            case 6:
                return "yellow"
            case 7:
                return "black" 
            default:
                break;
        }
    }
}
abstract class Figura{
    private _x             : number;
    private _y             : number;
    protected static _color: Colores = Colores.Orange;
    protected _context     : CanvasRenderingContext2D;

    constructor(ctx:CanvasRenderingContext2D, x?:number, y?:number){
        this._context = ctx;
        this._x       = x || Math.random()*250+20;
        this._y       = y || Math.random()*250+20;
        
    }
    public abstract dibujar(parameters);
    public getX(){
        return this._x;
    }
    public getY(){
        return this._y;
    }
    public setX(x:number){
        this._x = x;
    }
    public setY(y:number){
        this._y = y;
    }
    public static getColor():Colores{
        return this._color;
    }
    public static setColor(color:Colores){
        this._color = color;
    }
}

class Ventana extends Figura{
    private size        : number;
    private conMarco    : boolean;
    private luzEncendida: boolean;


    constructor(ctx:CanvasRenderingContext2D,vSize:number, x?:number, y?:number, marco_?:boolean, luz_?:boolean){
        super(ctx, x, y);
        this.setX(x);
        this.setY(y);

        this.size         = vSize;
        this.conMarco     = marco_    || Operaciones.randomBoolean();
        this.luzEncendida = luz_      || Operaciones.randomBoolean();

        if (this.luzEncendida === true) {
            Figura.setColor(Colores.Yellow);
        }else{
            Figura.setColor(Colores.Black);
        }  
    }

    dibujar(ctx:CanvasRenderingContext2D){
        ctx.fillStyle = Operaciones.numberToString(Figura.getColor());
        ctx.beginPath();
        ctx.fillRect(this.getX(),this.getY()*2, this.size*3, this.size);

        if (this.conMarco === true){
            ctx.strokeStyle = Operaciones.numberToString(1);
            ctx.lineWidth = 7;
            ctx.strokeRect(this.getX(), this.getY()*2, this.size*3, this.size);
        }
        ctx.closePath();   
    }

    public getSize(){
        return this.size;
    }
    public getMarco(){
        return this.conMarco;
    }
    public getLuz(){
        return this.luzEncendida;
    }
    public setSize(s:number){
        this.size         = s;
    }
    public setMarco(m:boolean){
        this.conMarco     = m;
    }
    public setLuz(l:boolean){
        this.luzEncendida = l;
    }
}

class Piso extends Figura{
    private nroDeVentanas: number;
    private ancho        : number;
    private static alto  : number;

    constructor(ctx:CanvasRenderingContext2D, ancho_:number, color_:Colores, x_:number, y_:number){
        super(ctx, x_, y_);
        Figura.setColor(color_);
        this.ancho         = ancho_;
        this.nroDeVentanas = Operaciones.randomNumero_(3, 6);
    }

    dibujar(ctx:CanvasRenderingContext2D){
        ctx.fillStyle =  Operaciones.numberToString(Figura.getColor());
        ctx.beginPath();
        ctx.fillRect(this.getX(), this.getY(), this.ancho, 50);
        ctx.closePath();
        for (let i = 0; i < this.nroDeVentanas; i++) {
            let nuevaVentana:Ventana = new Ventana(ctx, 30, this.getX(), this.getY());
            nuevaVentana.dibujar(ctx);
        }
    }

    public getNroVentanas(){
        return this.nroDeVentanas;
    }
    public getAncho(){
        return this.ancho;
    }
    public getALto(){
        return Piso.alto;
    }
    public setNroVentanas(n:number){
        this.nroDeVentanas  = n;
    }
    public setAncho(m:number){
        this.ancho          = m;
    }
    public setAlto(a:number){
        Piso.alto           = a;
    }
}

class Edifico extends Figura{
    private nroPisos : number;
    private ancho    : number;
    private name     : string;

    constructor(ctx:CanvasRenderingContext2D, nombre:string, numeroPisos:number, posicionX:number, posicionY:number){
        super(ctx, posicionX, posicionY)
        this.name     = nombre;
        this.nroPisos = numeroPisos;

        //aleatorios
        this.ancho = Operaciones.randomNumero_(300, 600);
        Figura.setColor(Operaciones.randomNumero_(0,7));
    }

    dibujar(ctx:CanvasRenderingContext2D){
        ctx.beginPath();
        ctx.fillStyle = Operaciones.numberToString(Figura.getColor());
        ctx.fillRect(this.getX(), this.getY(), this.ancho, largoCanvas);
        ctx.closePath();

        for (let i = 0; i <= this.nroPisos; i++) {
            let newPiso:Piso = new Piso(ctx,this.ancho, 2, this.getX(), this.getY()*i);
            newPiso.dibujar(contexto);

            if (i < this.nroPisos) {
                contexto.fillStyle = Operaciones.numberToString(6);
                contexto.font = 2+"em sans-serif";
                contexto.fillText(this.name, this.getX(), this.getY());
            }
        }
    }

    public getPisos(){
        return this.nroPisos; 
    }
    public getAncho(){
        return this.ancho;     
    }
    public getName(){
        return this.name;    
    }
    public setPisos(p:number){
        this.nroPisos = p;
    }
    public setAncho(a:number){
        this.ancho    = a;
    }
    public setName(prenom:string){
        this.name     = prenom;
    }
}
function askUser() {
    let name        = prompt("Ingrese el nombre del edificio");
    let nuevoEdificio:Edifico = new Edifico(contexto, name, Operaciones.randomNumero_(4,6), Operaciones.randomNumero_(0,anchoCanvas), 20);
    nuevoEdificio.dibujar(contexto);
}