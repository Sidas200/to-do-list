document.addEventListener("DOMContentLoaded", function() {
    var listaPendientes = document.getElementById("lista-pendientes");
    var listaCompletadas = document.getElementById("lista-completadas");

    function toggleTarea(element) {
        element.classList.toggle('completed');
        if (element.classList.contains('completed')) {
            listaCompletadas.appendChild(element);
        } else {
            listaPendientes.appendChild(element);
        }
    }

    listaPendientes.addEventListener('click', function(ev) {
        if (ev.target.classList.contains('task-text')) {
            toggleTarea(ev.target.parentElement);
        } else if (ev.target.classList.contains('delete')) {
            ev.target.parentElement.remove();
        }
    });

    listaCompletadas.addEventListener('click', function(ev) {
        if (ev.target.classList.contains('task-text')) {
            toggleTarea(ev.target.parentElement);
        } else if (ev.target.classList.contains('delete')) {
            ev.target.parentElement.remove();
        }
    });

    window.newElement = function() {
        var li = document.createElement("li");
        li.className = "list-group-item";
        var valorentrada = document.getElementById("entrada").value;
        var t = document.createElement("span");
        t.className = "task-text";
        t.appendChild(document.createTextNode(valorentrada));
        li.appendChild(t);
        if (valorentrada === "") {
            alert("Debes escribir alguna tarea pendiente");
        } else {
            listaPendientes.appendChild(li);
        }
        document.getElementById("entrada").value = "";

        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "delete btn btn-danger btn-sm";
        span.appendChild(txt);
        li.appendChild(span);
    }
});