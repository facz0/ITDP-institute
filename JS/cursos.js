let cursos = [];
let cur1 = {
    "bk": "c-background1",
    "title": "Excel Profesional",
    "link": "#"
}
let cur2 = {
    "bk": "c-background2",
    "title": "Python",
    "link": "#"
}
let cur3 = {
    "bk": "c-background3",
    "title": "Java",
    "link": "#"
}
let cur4 = {
    "bk": "c-background4",
    "title": "HTML y CSS",
    "link": "#"
}
let cur5 = {
    "bk": "c-background5",
    "title": "Creación de Videojuegos",
    "link": "#"
}
let cur6 = {
    "bk": "c-background6",
    "title": "Reparación de PC",
    "link": "#"
}

cursos.push(cur1);
cursos.push(cur2);
cursos.push(cur3);
cursos.push(cur4);
cursos.push(cur5);
cursos.push(cur6);
console.log(cursos);
let sectionCursos = document.querySelector(".cursos-carruseles");

let cargarCursos = () => {
    let html = "";
    cursos.forEach((i) =>{
        html+= 
        `
        <section class="cursos-slider-section ${i.bk}">
            <section class="cursos-gradient">
                <div class="cursos-content">
                    <p>${i.title}</p>
                    <button class="cursos-button">
                        <a href="${i.link}">DESCUBRIR</a>
                    </button>
                </div>                            
            </section>
        </section>
        `
    })
    sectionCursos.innerHTML = html;
};
cargarCursos();

