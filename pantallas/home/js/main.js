$(function () {
  console.log("helllo");
  
  var miSound = new buzz.sound(
    "../../audios/Escenas/intro1.mp3", {
      loop: true,
      volume: 100
    }
  );
  miSound.play()
});