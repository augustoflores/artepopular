$(function () {
  var totalpistas=$(".opcion").length;
  var pistasencontradas=0;
  $(".opcion").css("opacity",.5)
  $("#equipar").hide();
  var objetoactual = null;
  actualizarpistas();
  $(".objeto").click(function () {
    objetoactual=this;
    var mySound = new buzz.sound("./sounds/click.m4a");
    let text = $(this).attr("alt")
    animartexto("#texto",text);
    $("#ventana #imagen").attr("src", "./imgs/" + $(this).data("img"));
    //inactivar($(".objeto"));
    $(".objeto").removeClass("activo");
    $(".objeto").addClass("inactivo")
    $("#fondo").addClass("inactivo")

    $(this).removeClass("inactivo");
    $(this).addClass("activo");
    $("#equipar").show();
    mySound.play();
  })
  $("#equipar").click(function () {
    $(this).hide()
    name="#Text"+$(objetoactual).attr("id");
    $(name).css("opacity",1);
    $(name).append("&#10003;");
    $(".objeto").removeClass("activo");
    $(".objeto").removeClass("inactivo");
    $(objetoactual).addClass("equipado");
    $(objetoactual).unbind( "click" );
    $("#fondo").removeClass("inactivo")
    pistasencontradas++;
    if(pistasencontradas==totalpistas){
      animartexto("#texto","¡Felicidades! Acabaste de equipar la Nao");
      $("#ventana #imagen").attr("src", "./imgs/angelito.png");
    }
    actualizarpistas();
  });
  animartexto("#texto");
  function animartexto(selector,texto) {
    if(!texto) texto = $(selector).html();
    var app = $(selector)[0];
    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 10,
      cursor: ""
    });
    typewriter.typeString(texto)
      .pauseFor(0)
      .start();
  }
  function actualizarpistas(){
    $("#contador").html(pistasencontradas+" / "+totalpistas)
    $("#conteoequipar").html((pistasencontradas+1)+" / "+totalpistas)
  }
  function activar(objs) {
    $.each( objs, function( key, value ) {
      console.log(value)
    });
    
  }
  function inactivar(objs) {
    $.each( objs, function( key, obj ) {
      src=$(obj).attr("src");
      src=src.replace("color","BN")
      $(obj).attr("src",src);
    });
  }
});