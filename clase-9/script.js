/*let boton1 = document.getElementById('boton1')

let input1 = document.getElementById('input1')
let inputColor = document.getElementById('inputColor')

inputColor.addEventListener('input', () => {
    console.log(inputColor.value)
    document.body.style.backgroundColor = inputColor.value
})

input1.addEventListener('change', () => {
    console.log(input1.value)
})

boton1.addEventListener('click', () => {
    console.log("Diste click!")
})


boton1.addEventListener('dblclick', () => {
    console.log("Diste otro click desde Event Listener!")
})

boton1.onclick = () => {
    console.log("Diste click desde onclick")
}

boton1.onclick = () => {
    console.log("Diste click desde otro onclick")
}*/

class Persona {
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sueldo = sueldo;
    }
}

const personas = []

let formulario = document.getElementById('formPersona')
let botonMostrar = document.getElementById('botonMostrar')
let divPersonas = document.getElementById('divPersonas')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(e.target)

    let datForm = new FormData(e.target)
    /*
    let nombre = document.getElementById('inputNombre').value
    let apellido = document.getElementById('inputApellido').value
    let edad = document.getElementById('inputEdad').value
    let sueldo = document.getElementById('inputSueldo').value
    */
    const persona = new Persona(datForm.get('nombre'), datForm.get('apellido'), datForm.get('edad'), datForm.get('sueldo'))

    personas.push(persona)

    console.log(personas)

    formulario.reset()
})

botonMostrar.addEventListener('click', () => {

    divPersonas.innerHTML = ""

   // if(divPersonas.innerHTML == "") {
        personas.forEach((persona, indice) => {
            divPersonas.innerHTML += `
                <div class="card" id="persona${indice}" style="width: 18rem; margin:5px">
                    <div class="card-body">
                        <h5 class="card-title">Nombre: ${persona.nombre}</h5>
                        <p class="card-text">Apellido: ${persona.apellido}</p>
                        <p class="card-text">Edad: ${persona.edad}</p>
                        <p class="card-text">Sueldo: ${persona.sueldo}</p>
                       <button class="btn btn-danger" >Eliminar Persona </button> 
                    </div>
                </div>
            
            `
        })
  //  } else {
  //      alert("No di click en el boton si los usuarios estan cargados")
  //  }
    
})
