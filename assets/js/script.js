
//Para probar que existe el archivo, cuando la pagina cargue
//document.write se escribe en html
//document.getElementById se obtiene un id del html
// this este 
//hide  esconder

$(document).ready(
    function(){
        // doble click desaparece
        $("p").dblclick(
            function(){
                $(this).hide("slow"); 
                
            }
        )
        // un click cambia de color en el css
        $("p").click(
            function(){
                $(this).css({ 
                    "color":"red",
                    "font-seze":"2em"
                })
            }
        )
        //cuando se poseciona el mouse, le pasamos una etiqueta "a" par los link al deslizar el mouse se convierte en link
        $("p").hover(
            function(){
                $(this).html("<a href='#'>Me converti </a>")
            } )
        }

// Selecciones
// 1) Selecccionar las etiquetas con img
$("img");


// 2)Selecccionar las elementos con id="imagen"
$("#imagen");

// 3)Selecccionar las elementos con clase ="centrado"
$(".centrado");

// 4)Selecccionar las elementos con id ="iamgen" con clase="centrado"
$("img#imagen.centrado");

// 5)Selecccionar las etiquetas "a" con clase="encabezado" dentro de la etiqueta "" se le da espacio por que son etiquetas
$("p a.encabezado");

// 6)selecccionar los elementos con id="imagen " o clase="centrado" la coma actua como "o"
$("#imagen, .centrado");

// 7) Selecccionar todos los elementos
$("*");

// 8)selecccionar los elemenros con el atributo href
$("[href]");

// 9)Seleccionar todos los input de tipo texto
$(input[type='text'])

//10) un evento que acer click en un parrafo, imprime por consola "click"
$("p").click(
    function(){
        console.log("click");
    }
)

// 11) Modifica el precio del texto para que imprima $100.000

$(".vacaciones .valor").text('100.000');


// 12) Al codigo anterior, ponle color amarillo de fondo a todos los elementos
// de la clase vacaciones

$(".vacaciones").css({
    "background" : "yellow"
});


    


)   
