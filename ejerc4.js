"use strict";
//Principio de Segregación de Interfaces
class RobotIncorrecto {
    trabajar() {
        console.log("Robot trabajando");
    }
    comer() {
        throw new Error("Los robots no comen");
    }
    dormir() {
        throw new Error("Los robots no duermen");
    }
}
class Humano {
    trabajar() {
        console.log("Humano trabajando");
    }
    comer() {
        console.log("Humano comiendo");
    }
    dormir() {
        console.log("Humano durmiendo");
    }
}
class Robot {
    trabajar() {
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
