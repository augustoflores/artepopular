$(function () {
  let indexglobo = -1;
  let arrGlobos = $(".globostexto .globotexto");
  let arrImages = $(".imagecontainer .image");
  $(".globonext").click(function () {
    if (indexglobo < (arrGlobos.length - 1)) {
      indexglobo++;
      $(".globostexto .globotexto").hide(0);
      $(".imagecontainer .image").hide(0);
      $(arrGlobos[indexglobo]).fadeIn();
      $(arrImages[indexglobo]).fadeIn();
      return true;
    }
    window.location.href = '../../pantallas/'+$("body").data("nextscreen")+'/index.html';
  });
  $(".globonext").click();
});