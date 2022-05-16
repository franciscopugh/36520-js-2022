import {Pikachu, Charmander, Eevee, IVA, array} from './Clases.js'

console.log(IVA)
console.log(array)

const pikachu1 = new Pikachu("Pika pika", "Electrico", 36, 6)
const charmander1 = new Charmander("Fueguito", "Fuego", 30, 5)
const eevee1 = new Eevee("Firulais", "Normal", 11, 5)

do {
    pikachu1.impactrueno(charmander1)
    if(charmander1.vidas <= 0) {
        break
    }
    charmander1.llamarada(pikachu1)
} while(pikachu1.vidas > 0 && charmander1.vidas >0)
    //      F               V        V
    //      F               F        V
// Siga verdadero mientras siga uno con vida


do {
    pikachu1.impactrueno(eevee1)
    if(eevee1.vidas <= 0) {
        break
    }
    eevee1.embestida(pikachu1)
} while(pikachu1.vidas > 0 && eevee1.vidas >0)