 const displayValorAnterior = document.getElementById('valor-anterior');
 const displayValorActual = document.getElementById('valor-actual');
 const botonesNumeros = document.querySelectorAll('.numero');
 const botonesOperadores = document.querySelectorAll('.operador');

const display = new display(displayValorAnterior, displayValorActual);

 botonesNumeros.forEach(boton => {
    boton.addEventListener('click',() => display.agregarNumero(boton.innerHTML));

 });
