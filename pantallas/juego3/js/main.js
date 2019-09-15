$(function() {
  var mySound = new buzz.sound("./sounds/click.m4a");

  $(".opcion").click(function (event) {
    let name=$(event.target).html();
    $(".objeto").removeClass("activo")
    $("#"+name).addClass("activo")
    $("#ventana #texto").html($("#"+name).attr("alt"))
    $("#ventana #imagen").attr("src","./imgs/"+ $("#"+name).data("img"));
    mySound.play()
  })
  $(".objeto").click(function () {
    let text=$(this).attr("alt")
    $("#ventana #texto").html(text)
    console.log(this)
    $("#ventana #imagen").attr("src","./imgs/"+ $(this).data("img"));
    $(".objeto").removeClass("activo")
    $(this).addClass("activo")
    mySound.play()
  })
});