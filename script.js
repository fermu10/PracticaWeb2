document.getElementById("btnSaludo").addEventListener("click", function () {
    var hora = new Date().getHours();
    var saludo = "Buenas noches";
    if (hora < 12) {
        saludo = "Buenos dias";
    } else if (hora < 19) {
        saludo = "Buenas tardes";
    }
    document.getElementById("mensaje").innerText = saludo + ", gracias por visitar mi pagina!";
});

document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault();
    var nombre = document.getElementById("nombre").value;
    if (nombre == "") {
        alert("Escribe tu nombre por favor");
        return;
    }
    alert("Gracias " + nombre + ", tu mensaje fue enviado (es solo de prueba)");
    this.reset();
});
