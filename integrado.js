"use strict";
//Ejemplo Integrado: Sistema de Notificaciones
// Implementaciones concretas[cite: 1]
class EmailNotificador {
    enviar(mensaje) {
        console.log(`Enviando email: ${mensaje}`);
    }
}
class SMSNotificador {
    enviar(mensaje) {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}
class PushNotificador {
    enviar(mensaje) {
        console.log(`Enviando push: ${mensaje}`);
    }
}
// OCP - Abierto para extensión[cite: 1]
class ServicioNotificaciones {
    notificadores = [];
    agregarNotificador(notificador) {
        this.notificadores.push(notificador);
    }
    notificarTodos(mensaje) {
        this.notificadores.forEach(notificador => notificador.enviar(mensaje));
    }
}
// SRP - Cada clase tiene una responsabilidad única[cite: 1]
class UsuarioSistema {
    nombre;
    email;
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}
// Uso del sistema[cite: 1]
const servicio = new ServicioNotificaciones();
servicio.agregarNotificador(new EmailNotificador());
servicio.agregarNotificador(new SMSNotificador());
servicio.agregarNotificador(new PushNotificador());
const usuarioSistema = new UsuarioSistema("Ana", "ana@email.com");
servicio.notificarTodos(`Bienvenida ${usuarioSistema.nombre}!`);
