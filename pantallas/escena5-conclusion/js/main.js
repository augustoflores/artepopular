$(function () {
  var Sound = new buzz.sound(
    "../../audios/editados/vive5.3_ambiental.mp3", {
      loop: true,
      volume: 100
    }
  );
  Sound.play()
});