$(function () {
  var totalpistas=$(".opcion").length;
  var pistasencontradas=0;
  $(".opcion").css("opacity",.5)
  $("#equipar").hide();
  var objetoactual = null;
  var fondoSound = new buzz.sound("../../audios/Juegos/Juego3/fondo.mp3",{volume:40});
  fondoSound.play()
  actualizarpistas();
  $(".objeto").click(function () {
    objetoactual=this;
    //var mySound = new buzz.sound("./sounds/click.m4a");
    var mySound = new buzz.sound("../../audios/Juegos/Juego3/"+$(this).data("audio"));

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
      aventarConfetti()
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
  function aventarConfetti() {
    var confettiSettings = {"target":"confetti-holder","max":"80","size":"3","animate":true,"props":["circle","square","triangle","line"],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"25","rotate":false,"width":"1920","height":"1080"};
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    
  }
});