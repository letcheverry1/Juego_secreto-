//se introduce el concepto del Document Object Model (DOM),
//  que es una representación de los elementos HTML que JavaScript 
// puede utilizar para acceder y manipularlos. Se explica 
// cómo utilizar el método querySelector del objeto document 
// para seleccionar elementos HTML y cómo asignarles valores
//  utilizando la propiedad innerHTML.

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';


//Botones e Interacción: Los botones en HTML permiten a los usuarios
//  realizar acciones en la página web. JavaScript gestiona eventos, 
// como clics, para responder a estas acciones.

//Eventos en JavaScript: Los eventos, como onclick, se utilizan para 
// ejecutar código JavaScript cuando ocurre una acción en un elemento 
// HTML.

//Funciones: Una función es un bloque de código que realiza una tarea 
// específica. En JavaScript, se define utilizando la palabra clave 
// function.

//Declaración y Ejecución de Funciones: Declaramos una función para 
// definir lo que hará y luego la ejecutamos para que realice esa tarea.

//Anatomía de una Función: Una función tiene un nombre, paréntesis
//  y un cuerpo delimitado por llaves. El cuerpo contiene el 
// código que se ejecutará cuando se llame a la función.

//Llamada a una Función desde HTML: Podemos llamar a una función 
// JavaScript desde HTML utilizando el atributo onclick en un elemento
//  HTML.

//Representacion de funcion tradicional

let numSecreto = generarNumSecretos ();
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);  
    elementoHTML.innerHTML = texto;
    return;  //palabra clave para que la funcion devuelva el numero secreto generado
}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //Inicialmente, se utiliza document.querySelector para acceder al input, pero se introduce la función document.getElementById para identificar de forma más precisa el input mediante un id en el HTML, especialmente útil cuando hay múltiples inputs.

//Además, se destaca la importancia de validar el tipo de dato retornado por el input, que suele ser string, y se utiliza parseInt para convertirlo a number y así comparar valores del mismo tipo. También se introduce el concepto del triple igual (===) para comparar tanto el valor como el tipo de dato.

   console.log (numSecreto);
   console.log (intentos);

    if (numeroDeUsuario === numSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
       document.getElementById('reiniciar').removeAttribute('disabled'); //Con esto activamos el boton, cambandole el color cuando el juego termina
       
    } else{
        //El usuario no acerto
        if (numeroDeUsuario>numSecreto){
            asignarTextoElemento ('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento ('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    //aqui se realiza una comparcion donde si se cumple o no la consola va a devolver un true o un false
    return;
    

}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario') .value = '';
}//Este seria el ID de nuestro input

function generarNumSecretos () {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1; //utilizamos estas funciones para generar el numero aleatorio entre el 1 al 10.
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumSecretos();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
      
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juegos del numero Secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numSecreto = generarNumSecretos ();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    condicionesIniciales();
    //generar el numero aleatorio
    //INICIALIZAR EL NUMERO DE INTENTOS
    //deshabilitar el boton de nuevo juego
    document.querySelector('reiniciar').setAttribute('disable', 'true');
       
    
}

condicionesIniciales();

//Funciones: Se introduce el concepto de crear una función para encapsular el código repetido y reutilizarlo en diferentes partes del programa.
//Parámetros: Se explica cómo utilizar parámetros en una función para hacerla más genérica y adaptable a diferentes situaciones.
//CamelCase: Se introduce el uso de CamelCase para nombrar la función.
//Hoisting: Se explica el concepto de hoisting en JavaScript, donde las funciones pueden ser llamadas antes de su declaración.
//Reducción de código: Se muestra cómo el uso de funciones y parámetros puede reducir la cantidad de código necesario y mejorar la legibilidad.
//Mantenibilidad y escalabilidad: Se destaca cómo el código optimizado es más fácil de mantener y escalar a medida que el programa crece.
//Ambito de variables: Muestra como una variable dentro de una funcion (ambito local) es diferente de una variable fuera de la funcion (ambito global), incluso si tienne el mismo nombre 

//arreglos en JavaScript:

//Puntos Clave:

//Tipado Débil en JavaScript:
//JavaScript permite listas combinadas (diferentes tipos de datos), pero se recomienda mantener la homogeneidad para evitar problemas.
//Agregar Elementos: Se pueden agregar elementos al inicio o al final de una lista.
//El método push() agrega elementos al final de la lista.
//Tamaño de la Lista:
//Se puede obtener el tamaño de la lista con la propiedad length.
//¡Cuidado! Es length (con "gth"), un error común.
//Acceder a Elementos:
//Los elementos se acceden mediante su índice o posición.
//El primer elemento siempre está en la posición 0.
//La última posición es el tamaño de la lista menos 1.
//Posiciones No Válidas:
//Acceder a posiciones negativas o mayores al tamaño de la lista retorna undefined.
//Importancia de la Última Posición:
//Es crucial para recorrer arreglos y realizar operaciones en cada elemento.