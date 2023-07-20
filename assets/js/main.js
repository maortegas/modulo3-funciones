
const cuadrado1 = document.getElementById("cuadrado1");
const cuadrado2 = document.getElementById("cuadrado2");
const cuadrado3 = document.getElementById("cuadrado3");
const cuadrado4 = document.getElementById("cuadrado4");
const inputKey = document.getElementById("key");
const inputKey1 = document.getElementById("key1");
const inputText  = document.getElementById("text_color"); 

const pintar = (event) => event.target.style.backgroundColor = 'black';

cuadrado1.addEventListener("click", pintar);
cuadrado2.addEventListener("click", pintar);
cuadrado3.addEventListener("click", pintar);
cuadrado4.addEventListener("click", pintar);


document.addEventListener('keydown', function (event) { 
    let color='';
    let elemento;
    let letra = event.key.toString().toLowerCase();
    
    if (letra =='a') {
        color='pink'
       elemento=inputKey;
    } else if (letra== 's') { 
        color='orange';
        elemento=inputKey;
    } else if (letra == 'd') { 
        color='skyblue';
        elemento=inputKey;
    } else if (letra == 'q') { 
        color='yellow';
        elemento=inputKey1;
    } else if (letra == 'w') { 
        color='blue';
        elemento=inputKey1;
    } else if (letra == 'e') { 
        color='brown'
        elemento=inputKey1;
    } 

    if (color !=''){
        
        inputText.textContent= 'Tecla ' +event.key + ' tiene asignada el color ' + color;
        pintarKey(elemento,color);
    }else{
        inputText.textContent= 'Tecla no tiene asignada ningun color';
        color='';
        pintarKey(inputKey1,color);
        pintarKey(inputKey,color);
    }
    
})

const pintarKey= (elemento,color)=> elemento.style.backgroundColor = color;
