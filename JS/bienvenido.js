const carreras = [];
let c1 = {
    "class1": "carrera",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Administración y Sistemas",
    "profesor": "Laura Méndez",
    "id_curso": "A1B2C3"
}
let c2 = {
    "class1": "carrera",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Computación e informática",
    "profesor": "Carlos Ruiz",
    "id_curso": "4D5E6F"
}
let c3 = {
    "class1": "carrera",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Electricidad Industrial",
    "profesor": "Mariana López",
    "id_curso": "G7H8I9"
}
let c4 = {
    "class1": "carrera",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Dibujo Arquitectónico",
    "profesor": "Andrés García",
    "id_curso": "J0K1L2"
}
let c5 = {
    "class1": "carrera",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Mecánica Automotríz",
    "profesor": "Sofía Fernández",
    "id_curso": "M3N4O5"
}
let c6 = {
    "class1": "carrera",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Diseño Gráfico",
    "profesor": "Ricardo Torres",
    "id_curso": "P6Q7R8"
}
let c7 = {
    "class1": "carrera",
    "class2": "carrera-fade",
    "class3": "carrera-content",
    "title": "Ingeniería Electrónica",
    "profesor": "Patricia Morales",
    "id_curso": "S9T0U1"
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
                    <p class="cod_curso">Cófigo: ${i.id_curso}</p>
                    <h3 class="titulo_curso">${i.title}</h3>
                    <p class="info_curso">En curso  |  Profesor: ${i.profesor}</p>
                </div>
            </div>
        </section>
        `
    })
    
    sectionCarreras.innerHTML = html;
}
cargarCarreras();