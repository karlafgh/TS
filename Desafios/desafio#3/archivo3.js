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
    function Elemento(contexto_, colorValor) {
        this.contexto = contexto_;
        this.color = colorValor || "rgb(" + this.aleatorio(0, 255) + ", " + this.aleatorio(0, 255) + ", " + this.aleatorio(0, 255) + ")";
    }
    Elemento.prototype.getColor = function () {
        return this.color;
    };
    Elemento.prototype.getContexto = function () {
        return this.contexto;
    };
    Elemento.prototype.setColor = function (colorNuevo) {
        this.color = colorNuevo;
    };
    Elemento.prototype.setContexto = function (contexto_) {
        this.contexto = contexto_;
    };
    /* para obtener un numero aleatorio */
    Elemento.prototype.aleatorio = function (from, to) {
        return Math.round(Math.random() * (to - from) + from);
    };
    return Elemento;
}());
var Elemento1 = new Elemento(contexto_);
console.log("color del elemento: " + Elemento1.getColor());
var Estrella = /** @class */ (function (_super) {
    __extends(Estrella, _super);
    function Estrella(contexto_, colorcito) {
        var _this = _super.call(this, contexto_, colorcito) || this;
        _this.x = Math.round(Math.random()) * 17;
        _this.y = Math.round(Math.random()) * 17;
        return _this;
    }
    Estrella.prototype.getX = function () {
        return this.x;
    };
    Estrella.prototype.getY = function () {
        return this.y;
    };
    Estrella.prototype.setX = function (valorX) {
        this.x = valorX;
    };
    Estrella.prototype.setY = function (valorY) {
        this.y = valorY;
    };
    return Estrella;
}(Elemento));
var EstrellaRedonda = /** @class */ (function (_super) {
    __extends(EstrellaRedonda, _super);
    function EstrellaRedonda(contexto_, colorcito) {
        var _this = _super.call(this, contexto_, colorcito) || this;
        _this.radioEstrella = Math.round(Math.random()) * 21;
        return _this;
    }
    EstrellaRedonda.prototype.pintar = function () {
        this.getContexto().fillStyle = this.getColor();
        /*este es el circulo que tiene la estrella de base */
        this.getContexto().beginPath();
        this.getContexto().arc(985, 250, 80, 0, Math.PI * 2);
        this.getContexto().closePath();
        this.getContexto().fill();
        /* 1era punta */
        this.getContexto().beginPath();
        this.getContexto().moveTo(955, 180);
        this.getContexto().lineTo(990, 70);
        this.getContexto().lineTo(1020, 180);
        this.getContexto().closePath();
        this.getContexto().fill();
        /* 2da punta */
        this.getContexto().beginPath();
        this.getContexto().moveTo(1040, 210);
        this.getContexto().lineTo(1170, 250);
        this.getContexto().lineTo(1040, 290);
        this.getContexto().closePath();
        this.getContexto().fill();
        /* 3era punta */
        this.getContexto().beginPath();
        this.getContexto().moveTo(955, 320);
        this.getContexto().lineTo(990, 430);
        this.getContexto().lineTo(1020, 320);
        this.getContexto().closePath();
        this.getContexto().fill();
        /* 4ta punta */
        this.getContexto().beginPath();
        this.getContexto().moveTo(920, 210);
        this.getContexto().lineTo(810, 250);
        this.getContexto().lineTo(920, 290);
        this.getContexto().closePath();
        this.getContexto().fill();
    };
    return EstrellaRedonda;
}(Estrella));
var EstrellaPunteada = /** @class */ (function (_super) {
    __extends(EstrellaPunteada, _super);
    function EstrellaPunteada(contexto_, colorcito) {
        return _super.call(this, contexto_, colorcito) || this;
    }
    EstrellaPunteada.prototype.pintar = function (contexto_, colorcito) {
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
        contexto_.moveTo(600, 260);
        contexto_.lineTo(460, 360);
        contexto_.lineTo(520, 220);
        // 5ta punta
        contexto_.moveTo(520, 220);
        contexto_.lineTo(420, 140);
        contexto_.lineTo(780, 140);
        contexto_.closePath();
        contexto_.fill();
    };
    return EstrellaPunteada;
}(Estrella));
var Cielo = /** @class */ (function (_super) {
    __extends(Cielo, _super);
    function Cielo(contexto_, color) {
        var _this = _super.call(this, contexto_, color) || this;
        _this.x_axis = 0;
        _this.y_axis = 0;
        _this.wCanvas = 1320;
        _this.hCanvas = 600;
        return _this;
    }
    Cielo.prototype.pintarCielo = function () {
        contexto_.fillStyle = this.getColor();
        contexto_.fillRect(this.x_axis, this.y_axis, this.wCanvas, this.hCanvas);
    };
    return Cielo;
}(Elemento));
/* hacemos el llamado al canvas,
le asignamos un contexto y unos nuevos Width y Height*/
var canvas3 = document.getElementById("lienzoD3");
var contexto_ = canvas3.getContext("2d");
var widthNew3 = 1320;
var heightNew3 = 600;
canvas3.width = widthNew3;
canvas3.height = heightNew3;
var sky = new Cielo(contexto_, "lightblue");
sky.pintarCielo();
var ordinaryStar = new EstrellaPunteada(contexto_, "gold");
ordinaryStar.pintar();
var roundStar = new EstrellaRedonda(contexto_, "yellow");
roundStar.pintar(contexto_, "gold");
