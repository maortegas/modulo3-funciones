
const cuadrado1 = document.getElementById("cuadrado1")
const cuadrado2 = document.getElementById("cuadrado2")
const cuadrado3 = document.getElementById("cuadrado3")
const cuadrado4 = document.getElementById("cuadrado4")

function pintar (elemento, color='green'){
    elemento.style.backgroundColor = color
}

cuadrado1.addEventListener("click",
function(){
    pintar(cuadrado1, 'black')
})

cuadrado2.addEventListener("click",
function(){
    pintar(cuadrado2, 'black')
})

cuadrado3.addEventListener("click",
function(){
    pintar(cuadrado3, 'black')
})

cuadrado4.addEventListener("click",
function(){
    pintar(cuadrado4, 'black')
})


document.addEventListener('keydown', function (event) { 
    if (event.key === 'a') {
    /* Cambiar a color 1 */
    } else if (event.key === 's') { /* Cambiar a color 2 */
    } 
})
