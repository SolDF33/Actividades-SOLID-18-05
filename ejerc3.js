"use strict";
//Principio de Sustitución de Liskov
// Código que viola LSP[cite: 1]
class RectanguloIncorreto {
    ancho;
    alto;
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    setAncho(ancho) {
        this.ancho = ancho;
    }
    setAlto(alto) {
        this.alto = alto;
    }
    calcularArea() {
        return this.ancho * this.alto;
    }
}
class CuadradoIncorrecto extends RectanguloIncorreto {
    constructor(lado) {
        super(lado, lado);
    }
    setAncho(ancho) {
        this.ancho = ancho;
        this.alto = ancho;
    }
    setAlto(alto) {
        this.alto = alto;
        this.ancho = alto;
    }
}
function probarRectangulo(rectangulo) {
    rectangulo.setAncho(5);
    rectangulo.setAlto(4);
    if (rectangulo.calcularArea() !== 20) {
        throw new Error("Fallo en el cálculo del área");
    }
}
// Código corregido aplicando LSP[cite: 1]
class FormaLSP {
}
class RectanguloLSP extends FormaLSP {
    ancho;
    alto;
    constructor(ancho, alto) {
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea() {
        return this.ancho * this.alto;
    }
}
class CuadradoLSP extends FormaLSP {
    lado;
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return Math.pow(this.lado, 2);
    }
}
function calcularAreaTotalLSP(formas) {
    return formas.reduce((sum, forma) => sum + forma.calcularArea(), 0);
}
// Uso[cite: 1]
const formasLSP = [new RectanguloLSP(5, 4), new CuadradoLSP(3)];
const areaTotalLSP = calcularAreaTotalLSP(formasLSP);
console.log(`Área total: ${areaTotalLSP}`);
