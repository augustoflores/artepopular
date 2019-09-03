$(function() {
  $(".opcion").click(function (event) {
    let name=$(event.target).html();
    $(".objeto").removeClass("activo")
    $("#"+name).addClass("activo")
    $("#ventana").html($("#"+name).attr("alt"))
  })
  $(".objeto").click(function () {
    let text=$(this).attr("alt")
    $("#ventana").html(text)
    $(".objeto").removeClass("activo")
    $(this).addClass("activo")
    
  })

});