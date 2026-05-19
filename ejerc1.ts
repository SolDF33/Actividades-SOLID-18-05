// Código que viola SRP
class Usuario {
    nombre: string;
    email: string;

    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }

    guardarUsuario(): void {
        // Lógica para guardar en base de datos
        console.log(`Guardando ${this.nombre} en BD`);
    }

    enviarEmail(mensaje: string): void {
        // Lógica para enviar email
        console.log(`Enviando email a ${this.email}: ${mensaje}`);
    }

    validarEmail(): boolean {
        // Lógica de validación
        return this.email.includes("@");
    }
}

// Código corregido aplicando SRP
class UsuarioCorrecto {
    nombre: string;
    email: string;

    constructor(nombre: string, email: string) {
        this.nombre = nombre;
        this.email = email;
    }

    validarEmail(): boolean {
        return this.email.includes("@");
    }
}

class UsuarioRepositorio {
    guardar(usuario: UsuarioCorrecto): void {
        console.log(`Guardando ${usuario.nombre} en BD`);
    }

    cargar(id: string): void {
        // Lógica para cargar usuario
    }
}

class EmailService {
    enviarEmail(usuario: UsuarioCorrecto, mensaje: string): void {
        console.log(`Enviando email a ${usuario.email}: ${mensaje}`);
    }
}

// Uso
const usuario = new UsuarioCorrecto("Juan", "juan@email.com");
const repositorio = new UsuarioRepositorio();
const emailService = new EmailService();

repositorio.guardar(usuario);
emailService.enviarEmail(usuario, "Bienvenido!");