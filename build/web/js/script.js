var cont = 1;
$(document).ready(function () {


    $("#enviar").click(function () {

        var escuela = document.getElementById("school").value;
        var nombre = document.getElementById("apynom").value;
        var correo = document.getElementById("corr").value;
        var telefono = document.getElementById("telf").value;
        var fila = document.createElement("tr");
        var numero = document.createElement("td");
        var escuel = document.createElement("td");
        var apellnom = document.createElement("td");
        var email = document.createElement("td");
        var telef = document.createElement("td");
        var opco = document.createElement("td");
        numero.innerHTML = cont;
        escuel.innerHTML = escuela;
        apellnom.innerHTML = nombre;
        email.innerHTML = correo;
        telef.innerHTML = telefono;
        opco.innerHTML = "<a href='#' class='text-warning ml-5 ' onclick='editar(this)'> <i class='fa-solid fa-square-pen'></i> </a>" + "<a href='#' class='text-danger ml-4' onclick='eliminar(this)'><i class='fa-solid fa-eraser'></i></a>";

        if (escuela == "0") {
            alert("No a selecionado una Escuela")
            return;
        } else if (nombre == "") {
            alert("No a escrito los Nombres y Apellidos");
            return;
        } else if (correo == "") {
            alert("No a escrito el correo");
            return;
        } else if (telefono == "") {
            alert("No a escrito el telefono");
            return;
        }
        cont++;
        $("#table").append(fila);
        $(fila).append(numero, escuel, apellnom, email, telef, opco);

        limpiar();
        
    });
});


function eliminar(row) {
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
    cont--;
}
function limpiar() {
    document.getElementById("school").value = "0";
    document.getElementById("apynom").value = "";
    document.getElementById("corr").value = "";
    document.getElementById("telf").value = "";
}
function editar() {
    var a = document.createElement("option");
    var b = document.createElement("h6");
    var c = document.createElement("option");
    var d = document.createElement("textarea");
    a.innerHTML = esc;
    b.innerHTML = apno;
    c.innerHTML = email;
    d.innerHTML = cell;
    document.getElementById("school").value = a;
    document.getElementById("apynom").value = b;
    document.getElementById("corr").value = c;
    document.getElementById("telf").value = d;
}



