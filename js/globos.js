$(function () {
  let indexglobo = -1;
  let arrGlobos = $(".globostexto .globotexto");
  let arrImages = $(".imagecontainer .image");
  let texto = "";
  var typingSound = new buzz.sound(
    "../../audios/UX_Interaccion/blip.mp3", {
      loop: true,
      volume: 1
    }
  );
  $(".globonext, .cajanext").click(function (event) {
    event.stopPropagation();
    try {
      var mySound = new buzz.sound("../../audios/UX_Interaccion/botones/Button_Click2_JFairbanks.mp3");
      mySound.play();
    } catch (e) {}
    if (indexglobo < (arrGlobos.length - 1)) {
      console.log(indexglobo)
      if($("body").data("nextscreen")=="fin" & indexglobo==1){
        $(".nombreescena").html("");
        $(".escenanumero").html("Recuerda, estamos hechos de:");
        $(".tituloescena").css("width","600px");
      }
      indexglobo++;
      $(".globostexto .globotexto").hide(0);
      $(".imagecontainer .image").hide(0);
      borrado = $(arrGlobos[indexglobo]).find(".bordertexto, .bordertextoright").detach();
      personajeborrado = $(arrGlobos[indexglobo]).find(".personaje").detach();
      texto = $(arrGlobos[indexglobo]).html();
      $(arrGlobos[indexglobo]).html("")
      $(arrGlobos[indexglobo]).fadeIn(0);
      var app = $(arrGlobos[indexglobo])[0];
      var typewriter = new Typewriter(app, {
        loop: false,
        delay: 10,
        cursor: ""
      });
      if (borrado.length > 0) {
        $(arrGlobos[indexglobo]).prepend(borrado);
      }
      if (personajeborrado.length > 0) {
        $(arrGlobos[indexglobo]).prepend(personajeborrado);
      }
      typingSound.play();
      typewriter.typeString(texto)
        .callFunction(function () {
          typingSound.pause()
        })
        .pauseFor(0)
        .start();

      $(".imagecontainer")
        .removeClass('fadeInDown ')
        .height('auto') // the magic
        .addClass('fadeInDown ')
      $(arrImages[indexglobo]).fadeIn(500);
      return true;
    }
    if ($("body").data("nextscreen") != "fin") {

      window.location.href = '../../pantallas/' + $("body").data("nextscreen") + '/index.html';
    } else {

    }
  });
  $(".globonext").click();
});