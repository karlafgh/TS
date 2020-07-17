interface ITrabajador {
    nombre      :string,
    sueldo      :number,
    antiguedad  :number,
    hijos       :number,
}

function calcular(  sueldo_base:number, 
                    antiguedad:number = 1, 
                    cantidad_hijos:number = 0):number {

    let bono_antiguedad :number = antiguedad > 5 ? sueldo_base * 0.125 : 0
    let bono_hijos      :number = cantidad_hijos * 1000

    if (cantidad_hijos > 3) {
        bono_hijos = (cantidad_hijos - 3) * 500 + 3000
    }

    return sueldo_base + bono_antiguedad + bono_hijos
}

function validarString(mensaje:string):string {
    let texto:any

    do {
        texto = prompt(mensaje)
    } while (!isNaN(texto));

    return texto
}

function validarNumber(mensaje:string):number {
    let numero:any
    
    do {
        numero = parseInt(prompt(mensaje))
        if (numero == 0) return 0
    } while (!numero || numero < 0);

    return numero  
}

function imprimir(t:ITrabajador, total:number):void {
    console.log('/////////RESULTADO///////////');
    console.log('nombre del trabajador: ' + t.nombre);
    console.log('sueldo del trabajador: ' + t.sueldo);
    console.log('antiguedad del trabajador: ' + t.antiguedad);
    console.log('hijos del trabajador: ' + t.hijos);
    console.log('el sueldo total del trabajador: ' + total);
}

let t: ITrabajador = {
    nombre      : validarString('ingresa el nombre'),
    sueldo      : validarNumber('ingresa el sueldo'),
    antiguedad  : validarNumber('ingresa la antiguedad en la empresa'),
    hijos       : validarNumber('si tiene hijos indique cuantos')
}
let sueldo_total:number = calcular(t.sueldo, t.antiguedad, t.hijos)

imprimir(t, sueldo_total)


