$(document).ready(function(){
   setTimeout("$('.splash').hide();", 5000);
});


function doValidation(elementType){
  if(elementType == "pass"){ //si se va a validar el tel...
    var validPass = /^[0-9]{4}$/; // Expresión regular que involucra a una cadena con 10 dígitos, permite que sólo se incluyan dígitos del 0 al 9, empiezan y terminan con / para indicar que la expresión termina se pone signo de $
    // valida que se escriban sólo números desde 1 hasta 10
        var validChars = /^[0-9]{1,4}$/; // Expresión regular que permite formar una cadena desde 1 hasta 10 dígitos
        // busca que la longitud del input esté entre 1 y 10, y también los valores coinciden con los caracteres validos
        if($("#pass").val().length>0 && $("#pass").val().length<11 && $("#pass").val().match(validChars)){
          // si los caracteres del telefono son 10 y son números...
          if($("#pass").val().match(validPass)=='1234'){ // Si el valor del input es una cadena de 10 dígitos (es decir, un número telefónico válido)
            console.log("Contraseña válida!");
            // toma el valor del input
            passNumber = $("#pass").val(); // Se guarda el teléfono válido en passNumber para usarse en la siguiente vista
            $("#send").attr('disabled', false); // Se modifica la propiedad 'disabled' del botón a false (Se activa el botón)
          }

          else{
            // si no se alcanzan los 10 dígitos seguirá desactivado el send y ya que llegue a los 10, se cambia a activado
            console.log("Contraseña no válida");
            $("#send").attr('disabled', true); // Se modifica la propiedad 'disabled' del botón a true (Se desactiva el botón)
          }

        }
    // substr hace una subcadena de una cadena principal... 0 es la posicion desde donde empieza la subcadena más a la izq o primer caracter, segundo parametro es la posicion final de la cadena que se va a formar menos el último caracter válido
    // se valida en tiempo real, linea 21 index con el onkeyup llama la función cada vez que se pulsa la tecla
        else
          $("#pass").val($("#pass").val().substr(0, $("#pass").val().length-1)); // Se quita del valor del input el último caracter no válido introducido, es decir, se recorta la cadena a n-1

  }
}


// menú desplegable
var theToggle = document.getElementById('toggle');


// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}
