//Evento de click en botón para mostrar E-mail.
document.getElementById('botonEmail').onclick = function(){
    document.getElementById("demo").innerHTML = "darrell.jensen@example.com";
}

//Evento de click en botón para ocultar E-mail.
document.getElementById('ocultarEmail').onclick = function(){
    document.getElementById("demo").innerHTML = " ";
}

//Evento de click en icono para mostrar dirección.
document.getElementById('iconDireccion').onclick = function(){
    document.getElementById("direccion").innerHTML = "9590 W Belt Line Rd";
}

//Evento de click en botón para ocultar dirección.
document.getElementById('ocultarDireccion').onclick = function(){
    document.getElementById("direccion").innerHTML = " ";
}