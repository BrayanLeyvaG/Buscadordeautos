//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 12;



//Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //muestra autos al cargar

    llenarSelect(); //llena las opciones de años
})

//Event listener para los select de busqueda
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value

    filtrarAuto();

})

year.addEventListener('change', e =>{
    datosBusqueda.year = parseInt(e.target.value)

    filtrarAuto();

})

minimo.addEventListener('change', e =>{
    datosBusqueda.minimo = e.target.value
    filtrarAuto();
})

maximo.addEventListener('change', e =>{
    datosBusqueda.maximo = e.target.value
    filtrarAuto();
})

puertas.addEventListener('change', e =>{
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto();
})

transmision.addEventListener('change', e =>{
    datosBusqueda.transmision = e.target.value
    filtrarAuto();
})

color.addEventListener('change', e =>{
    datosBusqueda.color = e.target.value
    filtrarAuto();
})





//Funciones
function mostrarAutos (autos) {
    eliminarAutos();

    autos.forEach( auto => {
        const {marca, modelo, year, precio, puertas, color, transmision, url} = auto

        const autoHTML = document.createElement('p');
        const img = document.createElement('img');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - Color: ${color} - ${puertas} puertas - Transmisión: ${transmision} - Precion: ${precio}
        `;

        img.src = url

        resultado.appendChild(autoHTML)
        resultado.appendChild(img)
    })
}

//Eliminar HTML
function eliminarAutos() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
    
}

//Genera los años del select
function llenarSelect() {
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;

        year.appendChild(opcion);
    }
}

//Filtrar autos
function filtrarAuto() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    console.log(resultado)

    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultados();
    }
    
}

function noResultados() {
    eliminarAutos()
    const mensaje = document.createElement('div');
    mensaje.classList.add('alerta', 'error');
    mensaje.textContent = 'No hay resultados, intenta con otros términos de búsqueda'
    resultado.appendChild(mensaje)
}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda
    if(marca){
        return marca === auto.marca
    }else{
        return auto
    }
}

function filtrarYear(auto) {
    const {year} = datosBusqueda
    if(year){
        return year === auto.year
    }else{
        return auto;
    }
}

function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda
    if(minimo){
        return minimo <= auto.precio
    }else{
        return auto
    }
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda
    if(maximo){
        return maximo >= auto.precio
    }else{
        return auto
    }
}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda
    if(puertas){
        return puertas === auto.puertas
    }else{
        return auto;
    }
}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda
    if(transmision){
        return transmision === auto.transmision
    }else{
        return auto;
    }
}

function filtrarColor(auto) {
    const {color} = datosBusqueda
    if(color){
        return color === auto.color
    }else{
        return auto;
    }
}