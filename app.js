// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let recopilacionNombres = []

function agregarAmigo(){
    let NuevoNombre= document.getElementById("amigo").value;
    if (NuevoNombre == ""){
        alert("por favor , ingrese un numero valido");
    }else{
        recopilacionNombres.push(NuevoNombre);
        console.log(recopilacionNombres);
        limpiarCaja('#amigo');
        Mostrar();
    }
    
}

function limpiarCaja(elemento){
    document.querySelector(elemento).value = "";
}
function ListarAmigos(amigo) {
    let cajaAmigosHTML = document.querySelector('#listaAmigos');
    let li = document.createElement("li");
    li.textContent = amigo;
    cajaAmigosHTML.appendChild(li);
}


function Mostrar() {
    // limpiamos la lista antes de volver a mostrar todo
    document.querySelector('#listaAmigos').innerHTML = "";

    let cantidad = 0;
    let cantidadAmigos = recopilacionNombres.length;

    while (cantidad < cantidadAmigos) {
        let nombre = recopilacionNombres[cantidad];
        ListarAmigos(nombre);
        cantidad++;
    }
}

function PersonaSeleccionada(){
    let cantidadAmigos = recopilacionNombres.length;
    return Math.floor(Math.random()*cantidadAmigos);
    
}
function impresionAmigoGanador(number){
    console.log(recopilacionNombres[number]);
    let resultadoHTML = document.querySelector('#resultado');
    resultadoHTML.innerHTML = `<li>La persona elegida es ${recopilacionNombres[number]}</li>`;
}



function sortearAmigo(){
    let numero = PersonaSeleccionada();

    impresionAmigoGanador(numero);
}
