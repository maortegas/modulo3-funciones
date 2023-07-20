
const cuadrado1 = document.getElementById("cuadrado1")
const cuadrado2 = document.getElementById("cuadrado2")
const cuadrado3 = document.getElementById("cuadrado3")
const cuadrado4 = document.getElementById("cuadrado4")

const pintar=  (event) => event.target.style.backgroundColor = 'black'


cuadrado1.addEventListener("click", pintar)
cuadrado2.addEventListener("click", pintar)
cuadrado3.addEventListener("click", pintar)
cuadrado4.addEventListener("click", pintar)


document.addEventListener('keydown', function (event) { 
    if (event.key === 'a') {
    /* Cambiar a color 1 */
    } else if (event.key === 's') { /* Cambiar a color 2 */
    } 
})
