$(function () {
  let indexglobo = -1;
  let arrGlobos = $(".globostexto .globotexto");
  let arrImages = $(".imagecontainer .image");
  let texto="";
  $(".globonext, .cajanext").click(function (event) {
    event.stopPropagation();
    if (indexglobo < (arrGlobos.length - 1)) {
      indexglobo++;
      $(".globostexto .globotexto").hide(0);
      $(".imagecontainer .image").hide(0);
      texto = $(arrGlobos[indexglobo]).html();
      $(arrGlobos[indexglobo]).html("")
      $(arrGlobos[indexglobo]).fadeIn(0);
      var app = $(arrGlobos[indexglobo])[0];
      var typewriter = new Typewriter(app, {
          loop: false,
          delay: 30,
          cursor: ""
      });
      console.log(typewriter)
      typewriter.typeString(texto)
          .pauseFor(0)
          .start();
      
      $(arrImages[indexglobo]).fadeIn(0);
      return true;
    }
    window.location.href = '../../pantallas/'+$("body").data("nextscreen")+'/index.html';
  });
  $(".globonext").click();
});