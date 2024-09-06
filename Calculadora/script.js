function sumar(){
//cambiar signo
document.getElementById("operacion").textContent=" + ";

    //obtener los valores de los campos de entrada
    const numero1 = parseFloat(document.getElementById("number1").value);
    const numero2 = parseFloat(document.getElementById("number2").value);

    //Sumar los dos numeros
    const resultado = numero1 + numero2;

    //Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = resultado;
}
function restar(){
    document.getElementById("operacion").textContent=" - ";

    //obtener los valores de los campos de entrada
    const numero1 = parseFloat(document.getElementById("number1").value);
    const numero2 = parseFloat(document.getElementById("number2").value);
    
    //restar los dos numeros
    const resultado = numero1 - numero2;

    //Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = resultado;
}
function multiplicar(){
    document.getElementById("operacion").textContent=" * ";

    //obtener los valores de los campos de entrada
    const numero1 = parseFloat(document.getElementById("number1").value);
    const numero2 = parseFloat(document.getElementById("number2").value);
    
    //multiplicar los dos numeros
    const resultado = numero1 * numero2;

    //Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = resultado;
}
function dividir(){
    document.getElementById("operacion").textContent=" / ";

    //obtener los valores de los campos de entrada
    const numero1 = parseFloat(document.getElementById("number1").value);
    const numero2 = parseFloat(document.getElementById("number2").value);
    
    //dividir los dos numeros
    const resultado = numero1 / numero2;

    //Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = resultado;
}
function borrar(){
    document.getElementById("operacion").textContent=" AC ";

    //obtener los valores de los campos de entrada
    const numero1 = parseFloat(document.getElementById("number1").value = "");
    const numero2 = parseFloat(document.getElementById("number2").value = "");
    

    //Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = "0";
    document.getElementById("limpiar").addEventListener('click',limpiar);
}
