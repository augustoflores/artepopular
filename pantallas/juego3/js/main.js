$(function() {
  var mySound = new buzz.sound("./sounds/click.m4a");

  $(".opcion").click(function (event) {
    let name=$(event.target).html();
    $(".objeto").removeClass("activo")
    $("#"+name).addClass("activo")
    $("#ventana").html($("#"+name).attr("alt"))
    mySound.play()
  })
  $(".objeto").click(function () {
    let text=$(this).attr("alt")
    $("#ventana").html(text)
    $(".objeto").removeClass("activo")
    $(this).addClass("activo")
    mySound.play()
  })
});