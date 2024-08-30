const carreras = [];
let c1 = {
    "class1": "carrera-tecnologia",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Computación e informática",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}
let c2 = {
    "class1": "carrera2-tecnologia",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Administración de Redes y comunicaciones",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}
let c3 = {
    "class1": "carrera3-tecnologia",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Administración y Sistemas",
    "class4": "carrera-button",
    "link-text": "Descubrir",
    "link": "#"
}

carreras.push(c1);
carreras.push(c2);
carreras.push(c3);
console.log(carreras);
let sectionCarrerastecnologia = document.querySelector(".carreras-tecnologia");

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
    
    sectionCarrerastecnologia.innerHTML = html;
}
cargarCarreras();