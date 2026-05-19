//Principio de Sustitución de Liskov

// Código que viola LSP[cite: 1]
class RectanguloIncorreto {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }

    setAncho(ancho: number): void {
        this.ancho = ancho;
    }

    setAlto(alto: number): void {
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }
}

class CuadradoIncorrecto extends RectanguloIncorreto {
    constructor(lado: number) {
        super(lado, lado);
    }

    override setAncho(ancho: number): void {
        this.ancho = ancho;
        this.alto = ancho; 
    }

    override setAlto(alto: number): void {
        this.alto = alto;
        this.ancho = alto; 
    }
}

function probarRectangulo(rectangulo: RectanguloIncorreto): void {
    rectangulo.setAncho(5);
    rectangulo.setAlto(4);
    if (rectangulo.calcularArea() !== 20) {
        throw new Error("Fallo en el cálculo del área");
    }
}

// Código corregido aplicando LSP[cite: 1]
abstract class FormaLSP {
    abstract calcularArea(): number;
}

class RectanguloLSP extends FormaLSP {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }
}

class CuadradoLSP extends FormaLSP {
    lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return Math.pow(this.lado, 2);
    }
}

function calcularAreaTotalLSP(formas: FormaLSP[]): number {
    return formas.reduce((sum, forma) => sum + forma.calcularArea(), 0);
}

// Uso[cite: 1]
const formasLSP: FormaLSP[] = [new RectanguloLSP(5, 4), new CuadradoLSP(3)];
const areaTotalLSP = calcularAreaTotalLSP(formasLSP);
console.log(`Área total: ${areaTotalLSP}`);