class Pokemon {
    constructor(nombre, tipo, vidas) {
        this.nombre = nombre
        this.tipo = tipo
        this.vidas = vidas
        this.nivel = 1
    }

    recibirAtaque(daño) {
        this.vidas -= daño //this.vidas = this.vidas - daño
        if(this.vidas <= 0) {
            console.log(`El pokemon ${this.nombre} ha sido derrotado`)
        } else {
            console.log(`El pokemon ${this.nombre} sigue vivo con ${this.vidas} de vida`)
        }
    }
}

export class Pikachu extends Pokemon {
    constructor(nombre, tipo, vidas, dañoImpactrueno) {
        super(nombre, tipo,vidas)
        this.dañoImpactrueno = dañoImpactrueno
    }

    impactrueno(pokemonAtacado) {
        console.log(`El pokemon ${this.nombre} lanzo impactrueno con un daño de ${this.dañoImpactrueno} al pokemon ${pokemonAtacado.nombre}`)
        pokemonAtacado.recibirAtaque(this.dañoImpactrueno)
    }
}

export class Charmander extends Pokemon {
    constructor(nombre, tipo, vidas, dañoFuego) {
        super(nombre, tipo,vidas)
        this.dañoFuego= dañoFuego
    }

    llamarada(pokemonAtacado) {
        console.log(`El pokemon ${this.nombre} lanzo llamadara con un daño de ${this.dañoFuego} al pokemon ${pokemonAtacado.nombre}`)
        pokemonAtacado.recibirAtaque(this.dañoFuego)
    }
}

export class Eevee extends Pokemon {
    constructor(nombre, tipo, vidas, dañoNormal) {
        super(nombre, tipo,vidas)
        this.dañoNormal = dañoNormal
    }

    embestida(pokemonAtacado) {
        console.log(`El pokemon ${this.nombre} lanzo embestida con un daño de ${this.dañoNormal} al pokemon ${pokemonAtacado.nombre}`)
        pokemonAtacado.recibirAtaque(this.dañoNormal)
    } 
}

export const IVA = 1.23
export const array = ["Hola", "Chau"]

//export default Pokemon