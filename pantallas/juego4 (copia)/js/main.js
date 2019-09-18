$(function () {
  var arrSecuencia = [];
  var arrSecuenciaUsuario = [];
  var turnoUsuario = false
  var iniciado=false;
  var sonando=false;
  function inicia () {
    arrSecuencia = [];
    arrSecuenciaUsuario = [];
    turnoUsuario = false
    iniciado=false;
    sonando=false;
  }
  const synth = new Tone.AMSynth().toMaster()
  $(".pieza").css("opacity",.0)

  $("#iniciar").click(function (event) {
    $(this).hide();
    turnoMaquina();
  })
  $(".pieza").click(function (event) {
    if(sonando) return false
    sonando=true;
    note=$(this).data("note");
    id=$(this).attr("id");
    num=Number(id.replace("pieza",""));
    if(turnoUsuario && iniciado){
      console.log("usuario: ",arrSecuenciaUsuario)
      arrSecuenciaUsuario.push(num);
      arrSecuenciaTest=arrSecuencia.slice(0,arrSecuenciaUsuario.length)
      if(JSON.stringify(arrSecuenciaUsuario) == JSON.stringify(arrSecuenciaTest)){
        if(arrSecuenciaUsuario.length===arrSecuencia.length){
          turnoMaquina();
          $("#retro").html("Muy bien, sigue jugando");
        }
      }else{
        $("#retro").html("Te equivocaste, vuelve a intentar");
        inicia();
        $("#inicar").show();
      }
    };
    $(this).css("color", "yellow");
    $(this).css("opacity",1)

    setTimeout(() => {$(this).css("color", "white");$(this).css("opacity",.0);sonando=false;}, 800);
    //var mySound = new buzz.sound("./sounds/click.m4a");
    //mySound.play();
    synth.triggerAttackRelease(note, '8n')
  })
  
  function turnoMaquina() {
    iniciado=true;
    turnoUsuario=false;
    arrSecuenciaUsuario = [];
    $(".pieza").css("pointer-events", "none")
    var random = Math.floor(Math.random() * $(".pieza").length);
    arrSecuencia.push(random)
    console.log("Maquina: ",arrSecuencia);
    maquinaToca()
  }

  function maquinaToca() {
    $("#turno").html("Observa y recuerda");
    var index = 0
    var interval = setInterval(() => {
      if (index >= arrSecuencia.length) {
        $(".pieza").css("pointer-events", "auto")
        turnoUsuario=true;
        clearInterval(interval);
        $("#turno").html("Repite el patron");
        return false;
      }
      $("#pieza" + arrSecuencia[index]).click()
      index++;
    }, 1500);
  }
});