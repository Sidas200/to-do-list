function handleAgregar(){
    var input = document.getElementById("entrada");
    const list = document.getElementById("lista");
    const tarea = input.value;
    if(tarea!==""){
       const li = document.createElement("li") 
       const div = document.createElement("div")
       div.className = "d-flex justify-content-beetween"
       const span = document.getElementById("span");
       span.innerText = tarea;
       divButtons.appendChild(botonListo);
    }
}
function handleListo(){
    
}