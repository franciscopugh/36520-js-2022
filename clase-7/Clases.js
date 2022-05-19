class Persona {
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo = sueldo
    }
}

const persona1 = new Persona("Francisco", "Pugh", 30, 10000)
const persona2 = new Persona("Gonzalo", "Ledesma", 20, 11000)
const persona3 = new Persona("Alfredo", "Jesus", 20, 12000)
const persona4 = new Persona("Maria", "Mariales", 32, 13000)
const persona5 = new Persona("Agustina", "Agus", 23, 10000)
const persona6 = new Persona("Camila", "Camilez", 26, 7000)

const personas = [persona1, persona2, persona3, persona4, persona5, persona6]

export default personas