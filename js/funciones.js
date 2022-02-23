

const formulario = document.getElementById('datos')
let timeout = null;
let regEx = /(\w\d*){4,}$/ig

document.querySelectorAll('.form-box').forEach((box) => {
    const boxInput = box.querySelector('input')


    boxInput.addEventListener('keydown', (event) => {
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            console.log('Input ${boxInput.name value:', boxInput.value)
            
            validacion(box, boxInput)

        },300);


       
    })

})

function validacion (box,boxInput){
   

    if (boxInput.value.match(regEx) ) {
        box.classList.remove('form-error')
        box.classList.add('form-success')
    } else {

        box.classList.add('form-error')
        box.classList.remove('form-success')

    }
}

