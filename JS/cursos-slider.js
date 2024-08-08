document.addEventListener("DOMContentLoaded", function () {
    const c_btnleft = document.querySelector(".cursos-btn-left");
    const c_btnright = document.querySelector(".cursos-btn-right");
    const c_slider = document.querySelector("#cursos-slider");
    const c_sliderSection = document.querySelectorAll(".cursos-slider-section");

    let c_operacion = 0;
    let c_contador = 0;
    let c_with = 100 / c_sliderSection.length;
    c_btnleft.addEventListener('click', c_moveToLeft);
    c_btnright.addEventListener('click', c_moveToRight);

    function c_moveToRight() {
        if (c_contador >= c_sliderSection.length-3) {
            c_contador = 0;
            c_operacion = 0;
            c_slider.style.transform = `translate(-${c_operacion}%)`; 
            c_slider.style.transition = `none`;
        } else {
            c_contador++;
            c_operacion += c_with;
            c_slider.style.transform = `translate(-${c_operacion}%)`; 
            c_slider.style.transition = `all ease .6s`;
        }
    }

    function c_moveToLeft() {
        c_contador--
        if(c_contador < 0){
            c_contador = c_sliderSection.length-4;
            c_operacion = c_with * (c_sliderSection.length-4);
            c_slider.style.transform = `translate(-${c_operacion}%)`;
            c_slider.style.transition = "none"
        } else {
            c_operacion = c_operacion - c_with;
            c_slider.style.transform = `translate(-${c_operacion}%)`;
            c_slider.style.transition = "all ease .6s";
        }
    }
});
