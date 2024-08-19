const carreras = [];
let c1 = {
    "class1": "carrera",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Administración y Sistemas"
}
let c2 = {
    "class1": "carrera2",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Computación e informática"
}
let c3 = {
    "class1": "carrera3",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Electricidad Industrial"
}
let c4 = {
    "class1": "carrera4",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Dibujo Arquitectónico"
}
let c5 = {
    "class1": "carrera5",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Mecánica Automotríz"
}
let c6 = {
    "class1": "carrera6",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Diseño Gráfico"
}
let c7 = {
    "class1": "carrera6",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Ingeniería Electrónica"
}
carreras.push(c1);
carreras.push(c2);
carreras.push(c3);
carreras.push(c4);
carreras.push(c5);
carreras.push(c6);
carreras.push(c7);
console.log(carreras);
let sectionCarreras = document.querySelector(".carreras_js");

let cargarCarreras = ()=>{
    let html = "";
    carreras.forEach((i)=>{
        html +=
        `
        <section class="${i.class1}">
            <div class="${i.class2}">
                <div class="${i.class3}">
                    <p>${i.title}</p>
                </div>
            </div>
        </section>
        `
    })
    
    sectionCarreras.innerHTML = html;
}
cargarCarreras();