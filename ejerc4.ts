//Principio de Segregación de Interfaces

// Código que viola ISP[cite: 1]
interface TrabajadorIncorrecto {
    trabajar(): void;
    comer(): void;
    dormir(): void;
}

class RobotIncorrecto implements TrabajadorIncorrecto {
    trabajar(): void {
        console.log("Robot trabajando");
    }

    comer(): void {
        throw new Error("Los robots no comen");
    }

    dormir(): void {
        throw new Error("Los robots no duermen");
    }
}

// Código corregido aplicando ISP[cite: 1]
interface Trabajador {
    trabajar(): void;
}

interface Comedor {
    comer(): void;
}

interface Durmiente {
    dormir(): void;
}

class Humano implements Trabajador, Comedor, Durmiente {
    trabajar(): void {
        console.log("Humano trabajando");
    }

    comer(): void {
        console.log("Humano comiendo");
    }

    dormir(): void {
        console.log("Humano durmiendo");
    }
}

class Robot implements Trabajador {
    trabajar(): void {
        console.log("Robot trabajando");
    }
}

// Uso[cite: 1]
const humano = new Humano();
const robot = new Robot();

humano.trabajar();
humano.comer();
humano.dormir();
robot.trabajar();