var url = ""
var currentpageindex = 0;
var arrPages = [
  "home",
  "intro",
  "escena1",
  //"escena1-taller",
  //"juego1",
  //"escena1-conclusion",
  "escena2",
  //"escena2-conclusion",
  "escena3",
  "escena4",
  "escena5"
]
$(function () {
  //var mySound = new buzz.sound("../../audios/Escenas/intro1-4_fondo.mp3",{loop:true});
  //mySound.play();
  //$('iframe').on('load', function (event) {
  //console.log(document.getElementById("contentframe").contentWindow.location.href);
  //});
  $("#prev").click(function () {
    currentpageindex--;
    newSrc = './pantallas/' + arrPages[currentpageindex] + '/index.html';
    document.getElementById("contentframe").src = newSrc;

  })
  $("#next").click(function () {
    currentpageindex++;
    newSrc = './pantallas/' + arrPages[currentpageindex] + '/index.html';
    document.getElementById("contentframe").src = newSrc;
  })
  $("#tooglemenu").click(function () {
    $("#menu").toggleClass("hidemenu");
  });
});

function urlFromChild(newurl,parentscreen) {
  pathSplit = newurl.split("/");
  currentScreen = pathSplit[pathSplit.length - 2];
  window.location.hash = currentScreen;
  if(parentscreen) currentScreen=parentscreen;
  currentpagearrayindex = arrPages.indexOf(currentScreen);
  currentpageindex = currentpagearrayindex;
  //$("#menu").addClass("hidemenu");
}