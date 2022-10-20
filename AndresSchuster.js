class Usuario {
    constructor (nombre, apellido, libros=[], mascotas=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }
    
    addBook(nombre, autor){
        this.libros.push({'nombre': nombre, 'autor': autor})
    }

    getBookNames(){
        if (this.libros.length === 0){
            return "No hay libros";
        }
        let arr = [];
        this.libros.forEach(libro => {
            arr.push(libro.nombre)
        });
        return arr;
    }
}

const libros = [
    {'nombre': 'Sherlock Holmes', 'autor': 'Agatha Christie'},
    {'nombre': 'Harry Potter', 'autor': 'J. K. Rowling'}
];

const mascotas = ["Frida"];

const miUsuario = new Usuario("Andres", "Schuster", libros, mascotas);

console.log(miUsuario.getFullName());
miUsuario.addMascota("Zed");
console.log(miUsuario.countMascotas());
miUsuario.addBook("El Señor de los Anillos", "J. R. R. Tolkien");
console.log(miUsuario.getBookNames());