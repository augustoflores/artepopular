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
    $(".objeto").removeClass("activo");
    $(".objeto").addClass("inactivo")
    $(this).removeClass("inactivo");
    $(this).addClass("activo");
    $("#equipar").show();
    mySound.play();
  })
  $("#equipar").click(function () {
    $(this).hide()
    $(objetoactual).hide();
    name="#Text"+$(objetoactual).attr("id");
    $(name).css("opacity",1);
    $(name).append("&#10003;");
    $(".objeto").removeClass("activo");
    $(".objeto").removeClass("inactivo");
    pistasencontradas++;
    if(pistasencontradas==totalpistas){
      animartexto("#texto","has concluido");
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
  }
});