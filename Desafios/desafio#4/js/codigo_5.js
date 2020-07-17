//declaraciones generales
let canvas = document.getElementById("canvas4");
let contexto = canvas.getContext("2d");
let anchoCanvas = canvas.width;
let largoCanvas = canvas.height;
var Colores;
(function (Colores) {
    Colores[Colores["Red"] = 0] = "Red";
    Colores[Colores["White"] = 1] = "White";
    Colores[Colores["Purple"] = 2] = "Purple";
    Colores[Colores["Orange"] = 3] = "Orange";
    Colores[Colores["Green"] = 4] = "Green";
    Colores[Colores["Grey"] = 5] = "Grey";
    Colores[Colores["Yellow"] = 6] = "Yellow";
    Colores[Colores["Black"] = 7] = "Black";
})(Colores || (Colores = {}));
class Operaciones {
    static randomBoolean() {
        let finalNumber = Math.round(1 + Math.random() * (50 - 1));
        if (finalNumber % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    static randomNumero_(desde, hasta) {
        return Math.round(desde + Math.random() * (hasta - desde));
    }
    static numberToString(numero) {
        switch (numero) {
            case 0:
                return "red";
            case 1:
                return "white";
            case 2:
                return "purple";
            case 3:
                return "orange";
            case 4:
                return "green";
            case 5:
                return "grey";
            case 6:
                return "yellow";
            case 7:
                return "black";
            default:
                break;
        }
    }
}
class Figura {
    constructor(ctx, x, y) {
        this._context = ctx;
        this._x = x || Math.random() * 250 + 20;
        this._y = y || Math.random() * 250 + 20;
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    setX(x) {
        this._x = x;
    }
    setY(y) {
        this._y = y;
    }
    static getColor() {
        return this._color;
    }
    static setColor(color) {
        this._color = color;
    }
}
Figura._color = Colores.Orange;
class Ventana extends Figura {
    constructor(ctx, vSize, x, y, marco_, luz_) {
        super(ctx, x, y);
        this.setX(x);
        this.setY(y);
        this.size = vSize;
        this.conMarco = marco_ || Operaciones.randomBoolean();
        this.luzEncendida = luz_ || Operaciones.randomBoolean();
        if (this.luzEncendida === true) {
            Figura.setColor(Colores.Yellow);
        }
        else {
            Figura.setColor(Colores.Black);
        }
    }
    dibujar(ctx) {
        ctx.fillStyle = Operaciones.numberToString(Figura.getColor());
        ctx.beginPath();
        ctx.fillRect(this.getX(), this.getY() * 2, this.size * 3, this.size);
        if (this.conMarco === true) {
            ctx.strokeStyle = Operaciones.numberToString(1);
            ctx.lineWidth = 7;
            ctx.strokeRect(this.getX(), this.getY() * 2, this.size * 3, this.size);
        }
        ctx.closePath();
    }
    getSize() {
        return this.size;
    }
    getMarco() {
        return this.conMarco;
    }
    getLuz() {
        return this.luzEncendida;
    }
    setSize(s) {
        this.size = s;
    }
    setMarco(m) {
        this.conMarco = m;
    }
    setLuz(l) {
        this.luzEncendida = l;
    }
}
class Piso extends Figura {
    constructor(ctx, ancho_, color_, x_, y_) {
        super(ctx, x_, y_);
        Figura.setColor(color_);
        this.ancho = ancho_;
        this.nroDeVentanas = Operaciones.randomNumero_(3, 6);
    }
    dibujar(ctx) {
        ctx.fillStyle = Operaciones.numberToString(Figura.getColor());
        ctx.beginPath();
        ctx.fillRect(this.getX(), this.getY(), this.ancho, 50);
        ctx.closePath();
        for (let i = 0; i < this.nroDeVentanas; i++) {
            let nuevaVentana = new Ventana(ctx, 30, this.getX(), this.getY());
            nuevaVentana.dibujar(ctx);
        }
    }
    getNroVentanas() {
        return this.nroDeVentanas;
    }
    getAncho() {
        return this.ancho;
    }
    getALto() {
        return Piso.alto;
    }
    setNroVentanas(n) {
        this.nroDeVentanas = n;
    }
    setAncho(m) {
        this.ancho = m;
    }
    setAlto(a) {
        Piso.alto = a;
    }
}
class Edifico extends Figura {
    constructor(ctx, nombre, numeroPisos, posicionX, posicionY) {
        super(ctx, posicionX, posicionY);
        this.name = nombre;
        this.nroPisos = numeroPisos;
        //aleatorios
        this.ancho = Operaciones.randomNumero_(300, 600);
        Figura.setColor(Operaciones.randomNumero_(0, 7));
    }
    dibujar(ctx) {
        ctx.beginPath();
        ctx.fillStyle = Operaciones.numberToString(Figura.getColor());
        ctx.fillRect(this.getX(), this.getY(), this.ancho, largoCanvas);
        ctx.closePath();
        for (let i = 0; i <= this.nroPisos; i++) {
            let newPiso = new Piso(ctx, this.ancho, 2, this.getX(), this.getY() * i);
            newPiso.dibujar(contexto);
            if (i < this.nroPisos) {
                contexto.fillStyle = Operaciones.numberToString(6);
                contexto.font = 2 + "em sans-serif";
                contexto.fillText(this.name, this.getX(), this.getY());
            }
        }
    }
    getPisos() {
        return this.nroPisos;
    }
    getAncho() {
        return this.ancho;
    }
    getName() {
        return this.name;
    }
    setPisos(p) {
        this.nroPisos = p;
    }
    setAncho(a) {
        this.ancho = a;
    }
    setName(prenom) {
        this.name = prenom;
    }
}
function askUser() {
    let name = prompt("Ingrese el nombre del edificio");
    let nuevoEdificio = new Edifico(contexto, name, Operaciones.randomNumero_(4, 6), Operaciones.randomNumero_(0, anchoCanvas), 20);
    nuevoEdificio.dibujar(contexto);
}
