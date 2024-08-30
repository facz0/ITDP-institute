const carreras = [];
let c1 = {
    "class1": "carrera-DISEÑO",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Diseño Gráfico",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}
let c2 = {
    "class1": "carrera2-DISEÑO",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Animación digital",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}
let c3 = {
    "class1": "carrera3-DISEÑO",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Diseño de interiores",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}

carreras.push(c1);
carreras.push(c2);
carreras.push(c3);
console.log(carreras);
let sectionCarrerasDISEÑO = document.querySelector(".carreras-DISEÑO ");

let cargarCarreras = ()=>{
    let html = "";
    carreras.forEach((i)=>{
        html +=
        `
        <section class="${i.class1}">
            <div class="${i.class2}">
                <div class="${i.class3}">
                    <p>${i.title}</p>
                    <button class="${i.class4}">
                        <a href="${i.link}">${i["link-text"]}</a>
                    </button>
                </div>
            </div>
        </section>
        `
    })
    
    sectionCarrerasDISEÑO.innerHTML = html;
}
cargarCarreras();