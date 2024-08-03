//obtenemos los valores de los botonoes por su clase
const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");
//obtenemos el contenido del contenedor secundario por medio de su clase
const slider = document.querySelector("#slider");
//obtenemos el valor de los contenedores que tienen como findo a las imagenes
const sliderSection = document.querySelectorAll(".slider-section");

//creamos un evento de click apra los botones
btnleft.addEventListener("click", e => moveToLeft());
btnright.addEventListener("click", e => moveToRight());

let operacion = 0;
let contador = 0;
//dividimos 100 entre la cantodad de secciones guardadas en la variable sliderSection
let withImg = 100 / sliderSection.length;

//aplicamos la funcion nativa setInterval, en la cual llamamos a una funcion cada 3 segundos
//en un bucle infinito
// setInterval(()=>{
//     moveToRight();
// }, 3000);

//creamos la funcion que se ejecutará con el evento click hacia la derecha
function moveToRight(){
    if(contador >= sliderSection.length-1){
        contador = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"
    } else {
        contador++;
        operacion = operacion + withImg;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }
}

//creamos la funcion que se ejecutará con el evento click hacia la izquierda
function moveToLeft(){
    contador--;
    if(contador < 0){
        contador = sliderSection.length-1;
        operacion = withImg * (sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none"
    } else {
        operacion = operacion - withImg
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "all ease .6s";
    }
}