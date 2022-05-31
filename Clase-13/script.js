document.getElementById('botonFinalizarCompra').addEventListener('click', () => {
    Swal.fire({
        icon: 'question',
        title: '¿Desea confirmar esta compra?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Compra finalizada',
            text: 'En breve recibira su compra.'
            })
        }
      })    
})

document.getElementById('botonNotificacion').addEventListener('click', () => {
    Toastify({
        text: "Producto añadido al carrito",
        duration: 2000,

        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to bottom right, #340138, #C32057)",
        },
        onClick: function(){
        } // Callback after click
      }).showToast();
    
})


const objeto1 = {nombreApellido: {nombre: "Francisco", apellido: "Pugh"}}

const objeto2 = structuredClone(objeto1) 

objeto2.nombreApellido = 2

console.log(objeto2)
console.log(objeto1)
