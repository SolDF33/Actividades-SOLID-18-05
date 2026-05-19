"use strict";
//Principio ABIERTO/CERRADO
// Código que viola OCP
class CalculadoraArea {
    calcularArea(forma, datos) {
        if (forma === "circulo") {
            return 3.1416 * Math.pow(datos.radio, 2);
        }
        else if (forma === "rectangulo") {
            return datos.ancho * datos.alto;
        }
        else if (forma === "triangulo") {
            return (datos.base * datos.altura) / 2;
        }
        return 0;
    }
}
// Código corregido aplicando OCP[cite: 1]
class Forma {
}
class Circulo extends Forma {
    radio;
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return 3.1416 * Math.pow(this.radio, 2);
    }
}
class Rectangulo extends Forma {
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
class Triangulo extends Forma {
    base;
    altura;
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
class CalculadoraAreaCorrecta {
    calcularAreaTotal(formas) {
        return formas.reduce((sum, forma) => sum + forma.calcularArea(), 0);
    }
}
// Uso[cite: 1]
const formas = [
    new Circulo(5),
    new Rectangulo(4, 6),
    new Triangulo(3, 8)
];
const calculadora = new CalculadoraAreaCorrecta();
const areaTotal = calculadora.calcularAreaTotal(formas);
console.log(`Área total: ${areaTotal}`);
