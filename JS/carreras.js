const carreras = [];
let c1 = {
    "class1": "carrera",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Administración y Sistemas",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}
let c2 = {
    "class1": "carrera2",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Computación e informática",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}
let c3 = {
    "class1": "carrera3",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Electricidad Industrial",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}
let c4 = {
    "class1": "carrera4",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Dibujo Arquitectónico",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}
let c5 = {
    "class1": "carrera5",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Mecánica Automotríz",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}
let c6 = {
    "class1": "carrera6",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Diseño Gráfico",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}
carreras.push(c1);
carreras.push(c2);
carreras.push(c3);
carreras.push(c4);
carreras.push(c5);
carreras.push(c6);
console.log(carreras);
let sectionCarreras = document.querySelector(".carreras-content");

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
    
    sectionCarreras.innerHTML = html;
}
cargarCarreras();