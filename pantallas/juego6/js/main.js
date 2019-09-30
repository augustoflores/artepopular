$(function () {
  var Sound = new buzz.sound(
    "../../audios/editados/materiales4.1_ambiental.mp3", {
      loop: true,
      volume: 100
    }
  );
  Sound.play()
  var totalpistas=$(".opcion").length;
  var pistasencontradas=0;
  $(".opcion").css("opacity",.5)
  $("#equipar").hide();
  $(".objeto").hide();
  var objetoactual = null;
  actualizarpistas();
  $(".objeto").click(function () {
    objetoactual=this;
    try {
          var mySound = new buzz.sound("../../audios/UX_Interaccion/BubblePop_BenjaminVogelzan.mp3");
          mySound.play();
      } catch (e) {}
    let text = $(this).attr("alt")
    animartexto("#texto",text);
    $("#ventana #imagen").attr("src", "./imgs/" + $(this).data("img"));
    //inactivar($(".objeto"));
    $(".objeto").removeClass("activo");
    $(".objeto").addClass("inactivo");
    //$("#fondo").addClass("inactivo");

    $(this).removeClass("inactivo");
    $(this).addClass("activo");
    //$("#equipar").show();
    //$(".objeto").removeClass("activo");
   // $(".objeto").removeClass("inactivo");
    $(objetoactual).addClass("equipado");
    equipar($(this).attr("id"));
    $(this).unbind( "click" );
    //mySound.play();
  })
  //
  $("#btn-hilos").click(function () {
      //alert('clic');
    /*if($("#fondo").hasClass("inactivo")){
      $("#fondo").removeClass("inactivo");
    } */
    $('#fondo').css("background-image", 'url("./img/tinturas_hilosBN.png")');

     
    $(this).css("color", "#ffc33e");
    try {
          var mySound = new buzz.sound("../../audios/UX_Interaccion/plim_Gatopreto .mp3");
          mySound.play();
      } catch (e) {}
    //var mySound = new buzz.sound("./sounds/BubblePop_BenjaminVogelzan.m4a");
    let text = $(this).attr("alt")
    animartexto("#texto",text);

    $("#ventana #imagen").attr("src", "./imgs/" + $(this).data("img"));
    //inactivar($(".objeto"));
    $(".objeto").hide();
    $("#Imagen01").fadeIn(2000);
    $("#Imagen02").fadeIn(2000);
    $("#Imagen03").fadeIn(2000);
    
    //$(".objeto").fadeIn("slow");
    
    //$(".objeto").removeClass("activo");
    //$(".objeto").addClass("inactivo")
    //$("#fondo").addClass("inactivo")
    //$(this).removeClass("inactivo");
    //$(this).addClass("activo");
    //$("#equipar").show();
    //mySound.play();
  });

  $("#btn-tinturas").click(function () {
      //alert('clic');
   /* if($("#fondo").hasClass("inactivo")){
      $("#fondo").removeClass("inactivo");
    }*/
    $('#fondo').css("background-image", 'url("./img/tinturas_hilosBN.png")');

    $(this).css("color", "#ffc33e");
     try {
          var mySound = new buzz.sound("../../audios/UX_Interaccion/plim_Gatopreto .mp3");
          mySound.play();
      } catch (e) {}
    let text = $(this).attr("alt")
    animartexto("#texto",text);

    $("#ventana #imagen").attr("src", "./imgs/" + $(this).data("img"));
    //inactivar($(".objeto"));
    $(".objeto").hide();
    $("#Imagen05").fadeIn(2000);
    $("#Imagen06").fadeIn(2000);
    $("#Imagen07").fadeIn(2000);
    
    //$(".objeto").fadeIn("slow");
    
    //$(".objeto").removeClass("activo");
    //$(".objeto").addClass("inactivo")
    //$("#fondo").addClass("inactivo")
    //$(this).removeClass("inactivo");
    //$(this).addClass("activo");
    //$("#equipar").show();
    mySound.play();
  });  

  //
  function equipar(id){
    name="#Text"+id;
    $(name).css("opacity",1);
    $(name).append("&#10003;");
    //$(".objeto").removeClass("activo");
   // $(".objeto").removeClass("inactivo");
    //$(objetoactual).addClass("equipado");
    //$(objetoactual).unbind( "click" );
    //$("#fondo").removeClass("inactivo")
    pistasencontradas++;
    if(pistasencontradas==totalpistas){
      $(".objeto").hide();
      aventarConfetti();
      try {
          var mySound = new buzz.sound("../../audios/juegos/Win_SergiodelaCruzHernan.mp3");
          mySound.play();
      } catch (e) {}
      $('#fondo').css("background-image", 'url("./img/tinturas_hilos.png")');
      animartexto("#texto","¡Felicidades! Acabaste con los Hilos y Tinturas");
      $("#ventana #imagen").attr("src", "./imgs/mujer3.png");
      $(".objeto").removeClass("inactivo");
      $(".objeto").fadeIn(2000);
      //$("#fondo").removeClass("inactivo")
      $(".objeto").addClass("activo");
      $(".globonext").removeClass("hidden");
      $(".textnext").removeClass("hidden");


    }
    actualizarpistas();
  }



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
      aventarConfetti();
      animartexto("#texto","¡Felicidades! Acabaste con los Hilos y Tinturas");
      $("#ventana #imagen").attr("src", "./imgs/mujer3.png");
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

  $(".globonext").click(function () {
    window.location.href='../../pantallas/juego4/index.html';
  });
});