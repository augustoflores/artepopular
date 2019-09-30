$(function () {
  var arrSecuencia = [];
  var arrSecuenciaUsuario = [];
  var turnoUsuario = false
  var iniciado = false;
  var sonando = false;
  var numeronivel=3
  nivelactual = 0;
  var textoactual = 0;
  nextactivo=true
  var niveles = [
    [0, 1, 2],
    [3, 4, 5],
    [8, 7, 6]
  ]
  var arrTextos = [
    "Toca las figuras en el mismo orden que se muestra el patrón. Si perdiste de vista alguno, recuerda que puedes pulsar e botón <span class='font-rosa'>Repetir</span> para intentarlo de nuevo...",
    "Excelente, ahora vamos con el patrón de arriba",
    "Excelente, ahora vamos con último patrón.",
    "<span class='bold font-verde'>¡Felicidades lo lograste!</span> Has ganado la Medalla de Gran Maestro Artesano María Pérez te has ganado la siguiente insignia como recompensa. <br><b>Telar Chamula</b>"
  ]
  $("#iniciar").hide();
  $("#continuar").hide();
  $("#repetir").hide();

  function crearsecuencia(nivel) {
    arrNivel = [];
    notas = niveles[nivel];
    //for (let index = 0; index < 30; index++) {

    for (let index = 0; index < numeronivel; index++) {
      cual = Math.floor(Math.random() * 3);
      //console.log("anterior",arrNivel[arrNivel.length-1]);
      //console.log("nuevo",cual);
      
      while(cual==arrNivel[arrNivel.length-1]){
        console.log("salio igual");
        cual = Math.floor(Math.random() * 3);
      }
      arrNivel.push(notas[cual]);
    }
    return arrNivel;
  }

  function inicia() {
    arrSecuencia = [];
    arrSecuenciaUsuario = [];
    turnoUsuario = false
    iniciado = false;
    sonando = false;
  }

  const synth = new Tone.AMSynth().toMaster()
  $(".pieza").css("opacity", .0);
  var index=0;
  $(".cajanext").click(function (event) {
    event.stopPropagation();
    if(!nextactivo) return false
    if(index===1){
      window.location.href = '../../pantallas/escena5/index.html';
    }
    if(index===0){
      $(".globonext, .textnext").hide();
      $("#iniciar").show();
      animartexto(".globotexto", arrTextos[textoactual]);
      nextactivo=false;
    }
    index++;
    console.log(index);
    
  })

  $("#comenzar").click(function (event) {
    $(this).hide();
    $("#iniciar").show();
    animartexto(".globotexto", arrTextos[textoactual]);
    //console.log("textoactual: ", textoactual);
  });
  $("#comenzar").hide();
  $("#iniciar").click(function (event) {
    $(this).hide();
    turnoMaquina();
  })
  $("#repetir").click(function (event) {
    animartexto(".globotexto", "Inténtalo de nuevo.");
    turnoUsuario = false;
    arrSecuenciaUsuario = [];
    maquinaToca()
    $(this).hide();
  })
  $("#continuar").click(function (event) {
    $(this).hide();
    turnoMaquina();
  })
  $(".pieza").click(function (event) {
    //inicia
    if (sonando) return false
    sonando = true;
    note = $(this).data("note");
    id = $(this).attr("id");
    num = Number(id.replace("pieza", ""));
    var final = false;
    if (turnoUsuario && iniciado) {
      arrSecuenciaUsuario.push(num);
      arrSecuenciaTest = arrSecuencia.slice(0, arrSecuenciaUsuario.length)
      if (JSON.stringify(arrSecuenciaUsuario) == JSON.stringify(arrSecuenciaTest)) {
        if (arrSecuenciaUsuario.length === arrSecuencia.length) {
          final = true;
          for (let index = 0; index < niveles[nivelactual].length; index++) {
            const element = niveles[nivelactual][index];
            $("#pieza" + element).css("opacity", 1)
          }
          nivelactual++;
          numeronivel+=2;
          textoactual++;
          if(textoactual==3){
            $("#imagen").attr("src","./img/telar.png")
            aventarConfetti();

            $(".globonext, .textnext").show();
            nextactivo=true;
          }
          
          animartexto(".globotexto", arrTextos[textoactual]);
          sonando = false;
          if (nivelactual < 3) {
            $("#continuar").show();
            setTimeout(() => {

              //turnoMaquina();
            }, 2000)
          }
          //$("#retro").html("Muy bien, sigue jugando");
        }
      } else {
        animartexto(".globotexto", "Intentalo de nuevo, pulsa repetir.");
        $("#repetir").show();
        //$("#inicar").show();
        //inicia();
      }
    };
    $(this).css("color", "yellow");
    $(this).css("opacity", 1)
    if (!final) {
      setTimeout(() => {
        $(this).css("color", "white");
        $(this).css("opacity", .0);
        sonando = false;
      }, 800);
    }
    synth.triggerAttackRelease(note, '8n')
  })

  function turnoMaquina() {
    iniciado = true;
    turnoUsuario = false;
    arrSecuenciaUsuario = [];
    $(".pieza").css("pointer-events", "none")
    arrSecuencia = crearsecuencia(nivelactual);
    maquinaToca()
  }

  function maquinaToca() {
    //$("#turno").html("Observa y recuerda");
    //$("#retro").html("");
    console.log(arrSecuencia)
    var index = 0
    var interval = setInterval(() => {
      if (index >= arrSecuencia.length) {
        $(".pieza").css("pointer-events", "auto")
        turnoUsuario = true;
        clearInterval(interval);
        //$("#turno").html("Repite el patron");
        return false;
      }
      $("#pieza" + arrSecuencia[index]).click()
      index++;
    }, 1500);
  }
  animartexto(".globotexto");

  function animartexto(selector, texto) {
    if (!texto) texto = $(selector).html();
    var app = $(selector)[0];
    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 10,
      cursor: ""
    });
    typewriter.typeString(texto)
      .pauseFor(0)
      .start();
  }

  function aventarConfetti() {
    var confettiSettings = {
      "target": "confetti-holder",
      "max": "80",
      "size": "3",
      "animate": true,
      "props": ["circle", "square", "triangle", "line"],
      "colors": [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126]
      ],
      "clock": "25",
      "rotate": false,
      "width": "1920",
      "height": "1080"
    };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

  }
});