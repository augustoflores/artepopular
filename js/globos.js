$(function () {
  let sonidoglobo=null
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
      mySound.stop();
      var mySound = new buzz.sound("../../audios/UX_Interaccion/botones/Button_Click2_JFairbanks.mp3");
      mySound.play();
    } catch (e) {}
    if (indexglobo < (arrGlobos.length - 1)) {
      personajeborrado =[]
       if($("body").data("nextscreen")=="fin" & indexglobo==1){
        $(".nombreescena").html("");
        $(".escenanumero").html("Recuerda, estamos hechos de:");
        $(".tituloescena").css("width","600px");
      }
      indexglobo++;
      $(".globostexto .globotexto").hide(0);
      $(".imagecontainer .image").hide(0);
      borrado = $(arrGlobos[indexglobo]).find(".bordertexto, .bordertextoright").detach();
      var personajeactual=$(arrGlobos[indexglobo]).find(".personaje");
      var personajeant=$(arrGlobos[indexglobo-1]).find(".personaje");
      console.log($(personajeactual).find('img').attr("src"));
      console.log($(personajeant).find('img').attr("src"));
      if(
          $(personajeactual).find('img').attr("src")
          !=$(personajeant).find('img').attr("src")
      ){
        personajeborrado = $(arrGlobos[indexglobo]).find(".personaje").detach();
      }else{
        $(arrGlobos[indexglobo]).find(".personaje").removeClass("animated")
        personajeborrado = $(arrGlobos[indexglobo]).find(".personaje").detach();
        console.log("iguales");
      }
      
      if($(arrGlobos[indexglobo]).data("audio")){
        try{
          sonidoglobo.stop();
        }catch(e){
          
        }
        sonidoglobo = new buzz.sound($(arrGlobos[indexglobo]).data("audio"),{
          volume:100
        });
        sonidoglobo.play();
        console.log("audio",$(arrGlobos[indexglobo]).data("audio"));
      }
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
      let cssclass = $(".imagecontainer").attr("class");
      $(".imagecontainer")
        .attr('class','')
        .height('auto')
        .attr('class',cssclass)
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