"use strict";
// Código que viola SRP
class Usuario {
    nombre;
    email;
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    guardarUsuario() {
        // Lógica para guardar en base de datos
        console.log(`Guardando ${this.nombre} en BD`);
    }
    enviarEmail(mensaje) {
        // Lógica para enviar email
        console.log(`Enviando email a ${this.email}: ${mensaje}`);
    }
    validarEmail() {
        // Lógica de validación
        return this.email.includes("@");
    }
}
// Código corregido aplicando SRP
class UsuarioCorrecto {
    nombre;
    email;
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
    validarEmail() {
        return this.email.includes("@");
    }
}
class UsuarioRepositorio {
    guardar(usuario) {
        console.log(`Guardando ${usuario.nombre} en BD`);
    }
    cargar(id) {
        // Lógica para cargar usuario
    }
}
class EmailService {
    enviarEmail(usuario, mensaje) {
        console.log(`Enviando email a ${usuario.email}: ${mensaje}`);
    }
}
// Uso
const usuario = new UsuarioCorrecto("Juan", "juan@email.com");
const repositorio = new UsuarioRepositorio();
const emailService = new EmailService();
repositorio.guardar(usuario);
emailService.enviarEmail(usuario, "Bienvenido!");
