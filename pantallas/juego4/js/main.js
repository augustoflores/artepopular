$(function () {
  var arrSecuencia = [];
  var arrSecuenciaUsuario = [];
  var turnoUsuario = false
  var iniciado = false;
  var sonando = false;
  nivelactual = 0;
  var textoactual = 0;
  var niveles = [
    [0, 1, 2],
    [3, 4, 5],
    [8, 7, 6]
  ]
  var arrTextos = [
    "Comienza con el bordado de abajo. Presiona iniciar comenzará una secuencia de 4 tiempos, al finalizar, pulsa en el mismo orden para desbloquear el siguiente nivel.",
    "Excelente, ahora vamos con el patrón de arriba",
    "Excelente, ahora vamos con último patrón.",
    "¡Felicidades lo lograste! Has ganado la Medalla de Gran Maestro Artesano María Pérez te has ganado la siguiente insignia como recompensa. Telar Corazón de Chamula"
  ]
  $("#iniciar").hide();
  $("#continuar").hide();

  function crearsecuencia(nivel) {
    arrNivel = [];
    notas = niveles[nivel];
    for (let index = 0; index < 4; index++) {
      cual = Math.floor(Math.random() * 3);
      console.log(cual);
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
  $("#comenzar").click(function (event) {
    $(this).hide();
    $("#iniciar").show();
    animartexto(".globotexto", arrTextos[textoactual]);
    console.log("textoactual: ", textoactual);
  });
  $("#iniciar").click(function (event) {
    $(this).hide();
    turnoMaquina();
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
      console.log("usuario: ", arrSecuenciaUsuario)
      arrSecuenciaUsuario.push(num);
      arrSecuenciaTest = arrSecuencia.slice(0, arrSecuenciaUsuario.length)
      if (JSON.stringify(arrSecuenciaUsuario) == JSON.stringify(arrSecuenciaTest)) {
        if (arrSecuenciaUsuario.length === arrSecuencia.length) {
          final = true;
          for (let index = 0; index < niveles[nivelactual].length; index++) {
            const element = niveles[nivelactual][index];
            console.log("#pieza" + element);
            $("#pieza" + element).css("opacity", 1)
          }

          nivelactual++;
          textoactual++;
          if(textoactual==3){
            $("#imagen").attr("src","./img/telar.png")
          }
          
          animartexto(".globotexto", arrTextos[textoactual]);
          sonando = false;
          if (nivelactual < 3) {
            $("#continuar").show();
            setTimeout(() => {
              //turnoMaquina();
            }, 2000)
          }
          $("#retro").html("Muy bien, sigue jugando");
        }
      } else {
        $("#retro").html("Te equivocaste, vuelve a intentar");
        inicia();
        $("#inicar").show();
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
    console.log("Maquina: ", arrSecuencia);
    maquinaToca()
  }

  function maquinaToca() {
    $("#turno").html("Observa y recuerda");
    var index = 0
    var interval = setInterval(() => {
      if (index >= arrSecuencia.length) {
        $(".pieza").css("pointer-events", "auto")
        turnoUsuario = true;
        clearInterval(interval);
        $("#turno").html("Repite el patron");
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
});