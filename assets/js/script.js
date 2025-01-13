
$(document).ready(function() {
    $(".text-body-secondary1").click(function() {
        var idBoton = $("#leonardo1").attr("id");
        $("#detalles" + idBoton).toggle();
    });

    $(".btn-close").click(function() {
        $(".detalles").hide();
    });
});

$(document).ready(function() {
    $(".text-body-secondary2").click(function() {
        var idBoton = $("#skyp1").attr("id");
        $("#detalles" + idBoton).toggle();
    });
    
    $(".btn-close").click(function() {
        $(".detalles").hide();
    });
});

$(document).ready(function() {
    $(".text-body-secondary3").click(function() {
        var idBoton = $("#cajero1").attr("id");
        $("#detalles" + idBoton).toggle();
    });
    
    $(".btn-close").click(function() {
        $(".detalles").hide();
    });
});

$(document).ready(function() {
    $(".text-body-secondary4").click(function() {
        var idBoton = $("#via1").attr("id");
        $("#detalles" + idBoton).toggle();
    });
    
    $(".btn-close").click(function() {
        $(".detalles").hide();
    });
});

function mostrarMensaje(event) {
    event.preventDefault(); 
    alert("¡Gracias, te contactare a la brevedad!");
}