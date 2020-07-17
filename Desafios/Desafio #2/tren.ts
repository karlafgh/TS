class Train{
    name         : string;
    color        : string;
    posicionX_   : number;
    posicionY_   : number;
    figureWidth_ : number;
    figureHeight_: number;
    size         : number;

    pintar(variableDibujar:string, x:number, y:number, w:number, h:number, newColor:string){
        this.posicionX_    = x;
        this.posicionY_    = y;
        this.size          = w;
        this.figureHeight_ = h;
        this.color         = newColor;

        switch(variableDibujar) {
            case "cuadro":
                contexto.fillStyle = this.color;
                contexto.fillRect(x, y, w, h);
                break;

            case "circulo":
                contexto.fillStyle = this.color;
                contexto.beginPath();
                contexto.arc(x, y, w, 0, Math.PI * 2);
                contexto.closePath();
                contexto.fill();
                break;

            case "texto":
                contexto.fillStyle = this.color
                contexto.font = 15+"em sans-serif"
                contexto.fillText(this.name, x, y)
                break;

            case "triangulo":
                contexto.fillStyle = this.color;
                contexto.beginPath();
                contexto.moveTo(x,y);
                contexto.lineTo(w,y);
                contexto.lineTo(x,h);
                contexto.closePath();
                contexto.fill();
                break;
                
            case "pentagono":
                contexto.fillStyle = this.color;
                contexto.beginPath(); 
                contexto.moveTo(x + 80 , h + 50);
                contexto.lineTo(x, w + 10);
                contexto.lineTo(x + 50, x + 20);
                //puse un nuevo move to para marcar donde iba a trazarse la nueva linea
                contexto.moveTo(x + 80, h + 50);
                contexto.lineTo(y + 70, w + 10);
                contexto.lineTo(y + 20, x + 20);
                contexto.lineTo(x + 50, x +20);
                contexto.fill();
                contexto.closePath();
                break;

            case "hexagono":
                contexto.fillStyle = this.color;
                contexto.beginPath();
                contexto.moveTo(h + 30, x + 20);
                contexto.lineTo(h - 30, w + 30);
                contexto.lineTo(h + 30, h + 40);
                contexto.lineTo(w + 20, h + 40);
                contexto.lineTo(x - 20, w + 30);
                contexto.lineTo(w + 20, x + 20);
                contexto.fill();
                contexto.closePath();
                break;

            case "octagono":
                contexto.fillStyle = this.color;
                contexto.beginPath();
                contexto.moveTo(y + 70, w - 50);
                contexto.lineTo(y + 25, w);
                contexto.lineTo(y + 25, w + 70);
                contexto.lineTo(y + 70, x + 20);

                contexto.moveTo(y + 70, w - 50);
                contexto.lineTo(h + 40, w - 50);
                contexto.lineTo(h + 80, w);
                contexto.lineTo(h + 80, w + 70);
                contexto.lineTo(h + 40, x + 20);
                contexto.lineTo(y + 70, x + 20);
                contexto.fill();
                contexto.closePath();
                break;

            default:
                break;
        }
    }
}

var canvas2: any = document.getElementById("lienzoD2");
var contexto = canvas2.getContext("2d");
let widthNew:number = 1320;
let heightNew: number = 600;

canvas2.width = widthNew;
canvas2.height= heightNew;

let train1:Train = new Train();
train1.name = "Karla G";

// beige line
train1.pintar("cuadro",70, 420, 700, 30, "#f5e8cc");
//aquamarine rectangule
train1.pintar("cuadro",770,170,230,300, "#81b4b0");
//white
train1.pintar("cuadro",820,210,130,130,"#f7f7f7");
//cuadrado azul
train1.pintar("cuadro",1000,270,200,200, "#d3b8dd");

//triangulo naranja
train1.pintar("triangulo",1200,470,1300,370, "#f4a78c");

// cuadrados de carga
train1.pintar("cuadro",100,320,150,150,"#efb4c4");
train1.pintar("cuadro",315,320,150,150,"#efb4c4");
train1.pintar("cuadro",530,320,150,150,"#efb4c4");

//cuadrado chiquito amarillo
train1.pintar("cuadro",1080,190,80,80, "#f7f08c");

//rectangulo naranja
train1.pintar("cuadro",1050,110,150,80,"#f4a78c");

//rectangulo grande naranja
train1.pintar("cuadro",730,110,300,60,"#f4a78c");

// rueda 1
train1.pintar("circulo",170, 500, 60,0 , "#bea295");

// rueda 2
train1.pintar("circulo",390, 500, 60,0, "#bea295");

// rueda 3
train1.pintar("circulo",605, 500, 60,0, "#bea295");

// rueda 4
train1.pintar("circulo",885, 470, 90,0, "#bea295");

//rueda 5
train1.pintar("circulo",1050, 510, 50,0 ,"#bea295");

//rueda 6
train1.pintar("circulo",1160, 510, 50,0 ,"#bea295");

//rieles
train1.pintar("cuadro",0, 560, 1320,10,"black");
train1.pintar("cuadro", 0, 570, 1320, 30, "#e0ba33")

//1
train1.pintar("cuadro",120,570,10,15,"black");
train1.pintar("circulo",125, 585, 5, 0,"black");

//2
train1.pintar("cuadro",200,570,10,15,"black");
train1.pintar("circulo",205,585,5,0 ,"black");

//3
train1.pintar("cuadro",340,570,10,15,"black");
train1.pintar("circulo",345,585,5,0,"black");

//4
train1.pintar("cuadro",420,570,10,15,"black");
train1.pintar("circulo",425,585,5,0,"black");

//5
train1.pintar("cuadro",550,570,10,15,"black");
train1.pintar("circulo",555,585,5,0,"black");

//6
train1.pintar("cuadro",640,570,10,15,"black");
train1.pintar("circulo",645,585,5,0,"black");

//7
train1.pintar("cuadro",840,570,10,15,"black");
train1.pintar("circulo",845,585,5,0,"black");

//8
train1.pintar("cuadro",920,570,10,15,"black");
train1.pintar("circulo",925,585,5,0,"black");

//9
train1.pintar("cuadro",1040,570,10,15,"black");
train1.pintar("circulo",1045,585,5,0,"black");

//10
train1.pintar("cuadro",1160,570,10,15,"black");
train1.pintar("circulo",1165,585,5,0,"black");
  
//hexagono
train1.pintar("hexagono", 300, 400, 200, 100, "#71c1e6");

//pentagono
train1.pintar("pentagono", 300, 400, 200, 100, "#d0de8b");

//octagono
train1.pintar("octagono", 300, 500, 200, 600, "#f7d8c3");

// texto
train1.pintar("texto", 580, 80, 3, 0, "lightblue");

contexto_.moveTo(this.x,this.y);
        contexto_.lineTo();
        contexto_.lineTo();
        contexto_.stroke();
        /* 2da punta */
        contexto_.moveTo(this.x,this.y);
        contexto_.lineTo();
        contexto_.lineTo();
        contexto_.stroke();
        /* 3era punta */
        contexto_.moveTo(this.x,this.y);
        contexto_.lineTo();
        contexto_.lineTo();
        contexto_.stroke();
        /* 4ta punta */
        contexto_.moveTo(this.x,this.y);
        contexto_.lineTo();
        contexto_.lineTo();
        contexto_.stroke();
        /* 5ta punta */
        contexto_.moveTo(this.x,this.y);
        contexto_.lineTo();
        contexto_.lineTo();
        contexto_.stroke();
        contexto_.closePath();
        contexto_.fill();