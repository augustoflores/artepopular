parent.urlFromChild(window.location.href);
$(function () {
  var Sound = new buzz.sound(
    "../../audios/Escenas/intro1-4_fondo.mp3", {
      loop: true,
      volume: 10
    }
  );
  Sound.play()
});