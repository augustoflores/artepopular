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
    imagenigual=false
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
      imageactual=$(arrImages[indexglobo]).find("img").attr("src");
      imageanterior=$(arrImages[indexglobo-1]).find("img").attr("src");
      $(".globostexto .globotexto").hide(0);
      //$(".imagecontainer .image").hide(0);
      if(imageactual!=imageanterior){
        $(arrImages[indexglobo]).siblings().hide(0);
        imagenigual=true;
      }
      borrado = $(arrGlobos[indexglobo]).find(".bordertexto, .bordertextoright").detach();
      var personajeactual=$(arrGlobos[indexglobo]).find(".personaje");
      var personajeant=$(arrGlobos[indexglobo-1]).find(".personaje");
      if(
          $(personajeactual).find('img').attr("src")
          !=$(personajeant).find('img').attr("src")
      ){
        personajeborrado = $(arrGlobos[indexglobo]).find(".personaje").detach();
      }else{
        $(arrGlobos[indexglobo]).find(".personaje").removeClass("animated")
        personajeborrado = $(arrGlobos[indexglobo]).find(".personaje").detach();
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


      //console.log(imageactual,"/",imageanterior);
      console.log("igual",imagenigual);
      
      if(imagenigual){
        $(".imagecontainer")
        .attr('class','')
        .height('auto')
        .attr('class',cssclass);

      }else{
        $(arrImages[indexglobo]).fadeIn(500);

        }
      return true;
    }
    if ($("body").data("nextscreen") != "fin") {

      window.location.href = '../../pantallas/' + $("body").data("nextscreen") + '/index.html';
    } else {

    }
  });
  $(".globonext").click();
});