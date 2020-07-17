var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Elemento = /** @class */ (function () {
    function Elemento(contexto, color) {
        this._color = color || "rgb(" + this.aleatorio(0, 255) + "," + this.aleatorio(0, 255) + "," + this.aleatorio(0, 255);
        this._contexto = contexto;
    }
    Elemento.prototype.getColor = function () {
        return this._color;
    };
    Elemento.prototype.getContexto = function () {
        return this._contexto;
    };
    Elemento.prototype.setColor = function (color) {
        this._color = color;
    };
    Elemento.prototype.setContexto = function (ctx) {
        this._contexto = ctx;
    };
    Elemento.prototype.aleatorio = function (desde, hasta) {
        return Math.round(Math.random() * (hasta - desde));
    };
    return Elemento;
}());
var Estrella = /** @class */ (function (_super) {
    __extends(Estrella, _super);
    function Estrella(ctx, color, _X, _Y) {
        var _this = _super.call(this, ctx) || this;
        _this._X = _this.aleatorioEstrella(800);
        _this._Y = _this.aleatorioEstrella(400);
        return _this;
    }
    Estrella.prototype.aleatorioEstrella = function (hasta) {
        return Math.round(Math.random() * hasta);
    };
    Estrella.prototype.getPosicionX = function () {
        return this._X;
    };
    Estrella.prototype.getPosicionY = function () {
        return this._Y;
    };
    Estrella.prototype.setPosicionX = function (X) {
        this._X = X;
    };
    Estrella.prototype.setPosicionY = function (Y) {
        this._Y = Y;
    };
    return Estrella;
}(Elemento));
var EstrellaRedonda = /** @class */ (function (_super) {
    __extends(EstrellaRedonda, _super);
    function EstrellaRedonda(ctx, color, _radio) {
        var _this = _super.call(this, ctx, color) || this;
        _this._radio = _this.aleatorio(0, 100);
        return _this;
    }
    EstrellaRedonda.prototype.pintar = function () {
        ctx.beginPath();
        ctx.fillStyle = this.getColor();
        ctx.arc(this.getPosicionX(), this.getPosicionY(), this._radio, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        //dibuja circulo
        //primera punta
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.fillStyle = this.getColor();
        ctx.moveTo(280, 70);
        ctx.lineTo(300, 20);
        ctx.lineTo(320, 70);
        ctx.stroke();
        ctx.fill();
        //Segunda 
        ctx.beginPath();
        ctx.moveTo(320, 70);
        ctx.lineTo(370, 70);
        ctx.lineTo(334, 110);
        ctx.stroke();
        ctx.fill();
        //tercera
        ctx.beginPath();
        ctx.moveTo(334, 110);
        ctx.lineTo(350, 160);
        ctx.lineTo(300, 120);
        ctx.stroke();
        ctx.fill();
        //cuarta
        ctx.beginPath();
        ctx.moveTo(300, 120);
        ctx.lineTo(240, 160);
        ctx.lineTo(260, 110);
        ctx.stroke();
        ctx.fill();
        //quinta
        ctx.beginPath();
        ctx.moveTo(260, 110);
        ctx.lineTo(230, 70);
        ctx.lineTo(280, 70);
        ctx.stroke();
        ctx.fill();
    };
    return EstrellaRedonda;
}(Estrella));
var EstrellaPunteada = /** @class */ (function (_super) {
    __extends(EstrellaPunteada, _super);
    function EstrellaPunteada(ctx, color) {
        return _super.call(this, ctx, color) || this;
    }
    EstrellaPunteada.prototype.pintar = function () {
        ctx.lineWidth = 1;
        //primera punta
        ctx.fillStyle = this.getColor();
        ctx.moveTo(280, 70);
        ctx.lineTo(300, 20);
        ctx.lineTo(320, 70);
        ctx.stroke();
        //Segunda 
        ctx.beginPath();
        ctx.moveTo(320, 70);
        ctx.lineTo(370, 70);
        ctx.lineTo(334, 110);
        ctx.stroke();
        //tercera
        ctx.beginPath();
        ctx.moveTo(334, 110);
        ctx.lineTo(350, 160);
        ctx.lineTo(300, 120);
        ctx.stroke();
        //cuarta
        ctx.beginPath();
        ctx.moveTo(300, 120);
        ctx.lineTo(240, 160);
        ctx.lineTo(260, 110);
        ctx.stroke();
        //quinta
        ctx.beginPath();
        ctx.moveTo(260, 110);
        ctx.lineTo(230, 70);
        ctx.lineTo(280, 70);
        ctx.stroke();
        ctx.fill();
    };
    return EstrellaPunteada;
}(Estrella));
var Cielo = /** @class */ (function (_super) {
    __extends(Cielo, _super);
    function Cielo() {
        var _this = _super.call(this, ctx) || this;
        _this.poX = _this.aleatorio(0, 500);
        _this.poY = _this.aleatorio(0, 400);
        _this.alto = 400;
        _this.ancho = 900;
        return _this;
    }
    Cielo.prototype.pintarCielo = function () {
        ctx.fillStyle = this.getColor();
        ctx.fillRect(this.poX, this.poY, this.ancho, this.alto);
    };
    return Cielo;
}(Elemento));
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = 1000;
var height = 450;
canvas.width = width;
canvas.height = height;
var cielo = new Cielo();
cielo.pintarCielo();
var estrella1 = new EstrellaPunteada(ctx);
estrella1.pintar();
var estrella2 = new EstrellaRedonda(ctx);
estrella2.pintar();
