var url = ""
var currentpageindex = 0;
var arrPages = [
  "pantalla1",
  "pantalla2",
  "escena1-mapa",
  "escena1-taller"
]
$(function () {
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
});

function urlFromChild(newurl) {
  pathSplit = newurl.split("/");
  currentScreen = pathSplit[pathSplit.length - 2];
  currentpagearrayindex = arrPages.indexOf(currentScreen)
  currentpageindex = currentpagearrayindex;
  window.location.hash = currentScreen;
}