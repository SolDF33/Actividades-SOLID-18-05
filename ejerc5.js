"use strict";
//Principio de Inversión de Dependencias
// Código que viola DIP[cite: 1]
class MySQLDatabaseIncorrecta {
    conectar() {
        console.log("Conectando a MySQL");
    }
    guardar(datos) {
        console.log(`Guardando en MySQL: ${datos}`);
    }
}
class AplicacionIncorrecta {
    db;
    constructor() {
        this.db = new MySQLDatabaseIncorrecta();
    }
    procesarDatos(datos) {
        this.db.conectar();
        this.db.guardar(datos);
    }
}
class MySQLDatabase {
    conectar() {
        console.log("Conectando a MySQL");
    }
    guardar(datos) {
        console.log(`Guardando en MySQL: ${datos}`);
    }
}
class PostgreSQLDatabase {
    conectar() {
        console.log("Conectando a PostgreSQL");
    }
    guardar(datos) {
        console.log(`Guardando en PostgreSQL: ${datos}`);
    }
}
class Aplicacion {
    db;
    constructor(database) {
        this.db = database;
    }
    procesarDatos(datos) {
        this.db.conectar();
        this.db.guardar(datos);
    }
}
// Uso[cite: 1]
const mysqlDb = new MySQLDatabase();
const postgresDb = new PostgreSQLDatabase();
const app1 = new Aplicacion(mysqlDb);
const app2 = new Aplicacion(postgresDb);
app1.procesarDatos("Datos importantes");
app2.procesarDatos("Datos importantes");
