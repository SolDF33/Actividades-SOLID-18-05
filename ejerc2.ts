//Principio ABIERTO/CERRADO

// Código que viola OCP
class CalculadoraArea {
    calcularArea(forma: string, datos: any): number {
        if (forma === "circulo") {
            return 3.1416 * Math.pow(datos.radio, 2);
        } else if (forma === "rectangulo") {
            return datos.ancho * datos.alto;
        } else if (forma === "triangulo") {
            return (datos.base * datos.altura) / 2;
        }
        return 0;
    }
}

// Código corregido aplicando OCP[cite: 1]
abstract class Forma {
    abstract calcularArea(): number;
}

class Circulo extends Forma {
    radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return 3.1416 * Math.pow(this.radio, 2);
    }
}

class Rectangulo extends Forma {
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

class Triangulo extends Forma {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

class CalculadoraAreaCorrecta {
    calcularAreaTotal(formas: Forma[]): number {
        return formas.reduce((sum, forma) => sum + forma.calcularArea(), 0);
    }
}

// Uso[cite: 1]
const formas: Forma[] = [
    new Circulo(5),
    new Rectangulo(4, 6),
    new Triangulo(3, 8)
];

const calculadora = new CalculadoraAreaCorrecta();
const areaTotal = calculadora.calcularAreaTotal(formas);
console.log(`Área total: ${areaTotal}`);