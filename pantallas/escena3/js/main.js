$(function () {
  var Sound = new buzz.sound(
    "../../audios/editados/escena3.1_ambiental.mp3", {
      loop: true,
      volume: 100
    }
  );
  Sound.play()
});