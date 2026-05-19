//Principio de Inversión de Dependencias

// Código que viola DIP[cite: 1]
class MySQLDatabaseIncorrecta {
    conectar(): void {
        console.log("Conectando a MySQL");
    }

    guardar(datos: any): void {
        console.log(`Guardando en MySQL: ${datos}`);
    }
}

class AplicacionIncorrecta {
    private db: MySQLDatabaseIncorrecta;

    constructor() {
        this.db = new MySQLDatabaseIncorrecta();
    }

    procesarDatos(datos: any): void {
        this.db.conectar();
        this.db.guardar(datos);
    }
}

// Código corregido aplicando DIP[cite: 1]
interface BaseDeDatos {
    conectar(): void;
    guardar(datos: any): void;
}

class MySQLDatabase implements BaseDeDatos {
    conectar(): void {
        console.log("Conectando a MySQL");
    }

    guardar(datos: any): void {
        console.log(`Guardando en MySQL: ${datos}`);
    }
}

class PostgreSQLDatabase implements BaseDeDatos {
    conectar(): void {
        console.log("Conectando a PostgreSQL");
    }

    guardar(datos: any): void {
        console.log(`Guardando en PostgreSQL: ${datos}`);
    }
}

class Aplicacion {
    private db: BaseDeDatos;

    constructor(database: BaseDeDatos) {
        this.db = database;
    }

    procesarDatos(datos: any): void {
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