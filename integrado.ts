//Ejemplo Integrado: Sistema de Notificaciones

// DIP + ISP[cite: 1]
interface Notificador {
    enviar(mensaje: string): void;
}

// Implementaciones concretas[cite: 1]
class EmailNotificador implements Notificador {
    enviar(mensaje: string): void {
        console.log(`Enviando email: ${mensaje}`);
    }
}

class SMSNotificador implements Notificador {
    enviar(mensaje: string): void {
        console.log(`Enviando SMS: ${mensaje}`);
    }
}

class PushNotificador implements Notificador {
    enviar(mensaje: string): void {
        console.log(`Enviando push: ${mensaje}`);
    }
}

// OCP - Abierto para extensión[cite: 1]
class ServicioNotificaciones {
    private notificadores: Notificador[] = [];

    agregarNotificador(notificador: Notificador): void {
        this.notificadores.push(notificador);
    }

    notificarTodos(mensaje: string): void {
        this.notificadores.forEach(notificador => notificador.enviar(mensaje));
    }
}

// SRP - Cada clase tiene una responsabilidad única[cite: 1]
class UsuarioSistema {
    nombre: string;
    email: string;

    constructor(nombre: string, email: string) {
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