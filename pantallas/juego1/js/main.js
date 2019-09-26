var tablero;
var gradSort=[];
var texto=[
    '<p>Vamos a poner a prueba tus habilidades.</p><p><span class="colorAmarillo">Toca las piezas para alinear los tubos</span> y hacer que el agua fluya para llenar el  nuestro primer cántaros. Con ello podremos almacenar agua y mantenerla fresca.</p>',
    '<p>Acabas de llenar tu primer cántaro. Cuando estés listo, pulsa para <span class="colorAmarillo">Siguiente</span> continuar...</p>',
    '<p>Toca las piezas para alinearlas y hacer que el chorro de agua fluya para llenarel segundo cántaro y comenzar a armar una pila.</p>',
    '<p><span class="colorVerde">¡Muy bien!</span> Acabas de llenar el segundo cántaro.Solo falta uno más</p>',
    '<p>Toca las piezas para conectar los tubos y llenar el tercer cántaro.</p>',
    '<p>Ahora los cántaros de barro están llenos y habrá suficiente agua fresca para todos.<br><span class="colorVerde">¡Muchas gracias!</span></p>',
    '<p>Muchas gracias por ayudarnos te has ganado la siguiente insignia como recompensa. <span class="colorAmarillo">Jaguar de Barro</span></p><p>Eso te convierte en un colega artesano experto en Barro.</p>',
    '<p>Parece que a manchas le caíste muy bien, quizá te ayude en tu aventura para encontrar <b class="colorVerde">Grandes Maestros Artesanos</b> de todo el país y así descubrir sus <b>técnicas y materiales</b>.<br>¡Suerte en tu aventura!</p>'
]
//                 0               1                2               3                4                 5
var idImg = ['recta-bca.png','codo-bco.png','recta-azul.png','codo-azul.png','circulo-vde.png','circulo-rojo.png'];
var valG = [0,90,180,270];
var imgRoute = "img/";
var nivel = 0;
var gameData=[
    // Nivel 0
    {
        rowA: [
            {
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            }, {
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            }, {
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            }, {
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            }
        ],
        rowB: [
            {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            }
        ],
        rowC: [
            {
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            }
        ],
        rowD: [
            {
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            }
        ]
        
    },
    // Nivel 1
    {
        rowA: [
            {
                img: idImg[1],
                grad: [0,360],
                imgOk: idImg[3],
                compl: false
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            }
        ],
        rowB: [
            {
                img: idImg[1],
                grad: [270],
                imgOk: idImg[3],
                compl: false
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            }, {
                img: idImg[1],
                grad: [90],
                imgOk: idImg[3],
                compl: false
            }, {
                img: idImg[4],
                grad: [0],
                imgOk: idImg[4],
                compl: true
            }
        ],
        rowC: [
            {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            },{
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            },{
                img: idImg[1],
                grad: [180],
                imgOk: idImg[3],
                compl: false
            },{
                img: idImg[4],
                grad: [0],
                imgOk: idImg[4],
                compl: true
            }
        ],
        rowD: [
            {
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            }
        ]
        
    },
    // Nivel 2
    {
        rowA: [
            {
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            }, {
                img: idImg[1],
                grad: [0,360],
                imgOk: idImg[3],
                compl: false
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            }
        ],
        rowB: [
            {
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            }, {
                img: idImg[1],
                grad: [270],
                imgOk: idImg[3],
                compl: false
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            }, {
                img: idImg[1],
                grad: [90],
                imgOk: idImg[3],
                compl: false
            }
        ],
        rowC: [
            {
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5],
                compl: true
            },{
                img: idImg[1],
                grad: [0],
                imgOk: idImg[3],
                compl: false
            },{
                img: idImg[1],
                grad: [90],
                imgOk: idImg[3],
                compl: false
            },{
                img: idImg[0],
                grad: [90,270],
                imgOk: idImg[2],
                compl: false
            }
        ],
        rowD: [
            {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
            },{
                img: idImg[1],
                grad: [180],
                imgOk: idImg[3],
                compl: false
            },{
                img: idImg[1],
                grad: [270],
                imgOk: idImg[3],
                compl: false
            },{
                img: idImg[1],
                grad: [180],
                imgOk: idImg[3],
                compl: false
            }
        ]
        
    }
]

$(document).ready(inicio);
function inicio(){
    typingSound = new buzz.sound("../../audios/UX_Interaccion/blip.mp3",{loop: true,volume: 1});
    aplausos = new buzz.sound("../../audios/juegos/applause_VFX.mp3", {loop: false, volume: 1});
    tablero = $('.gameActionWrp').html();
    cargarJuego(0);
    animartexto('.instTxt',texto[0]);
}
function resetGame(){
    $('.gameActionWrp').empty().append(tablero);
    $('#chorroFinal').removeAttr('style');
    $('#btnDescripcion').removeAttr('style');
}
function cargarJuego(n) {
    resetGame();
    $('.gameActionWrp img').on('click', rotar);
    nivel = n;
    function duplicarArray(){
        array=[];
        for(var t=0;t<valG.length;t++){
            array.push(valG[t]);
        }
        return array;
    }
    $('.gameActionWrp #A .col').each(function(i){
        // Copiamos Array de grados
        temporal=duplicarArray();
        
        // Eliminamos grados que se repitan para tener una lista sin los correctos
        temporal.find(function(item, index){
            for(var t1=0;t1<gameData[n].rowA[i].grad.length; t1++){
                if(item===gameData[n].rowA[i].grad[t1]){
                    e=temporal.splice(index,1);
                }
            }
        });
        // Número aleatorio para elegir los grados del array
        randm = Math.floor(Math.random() * temporal.length); 
        num = temporal[randm];
        
        $(this).find('img').data('grado',num).css('transform','rotate('+num+'deg)').attr('src',imgRoute+gameData[n].rowA[i].img);
    });
    $('.gameActionWrp #B .col').each(function(i){
        // Copiamos Array de grados
        temporal=duplicarArray();
        
        // Eliminamos grados que se repitan para tener una lista sin los correctos
        temporal.find(function(item, index){
            for(var t1=0;t1<gameData[n].rowB[i].grad.length; t1++){
                if(item===gameData[n].rowB[i].grad[t1]){
                    e=temporal.splice(index,1);
                }
            }
        });
        // Número aleatorio para elegir los grados del array
        randm = Math.floor(Math.random() * temporal.length); 
        num = temporal[randm];

        $(this).find('img').data('grado',num).css('transform','rotate('+num+'deg)').attr('src',imgRoute+gameData[n].rowB[i].img);
    });
    $('.gameActionWrp #C .col').each(function(i){
        // Copiamos Array de grados
        temporal=duplicarArray();
        
        // Eliminamos grados que se repitan para tener una lista sin los correctos
        temporal.find(function(item, index){
            for(var t1=0;t1<gameData[n].rowC[i].grad.length; t1++){
                if(item===gameData[n].rowC[i].grad[t1]){
                    e=temporal.splice(index,1);
                }
            }
        });
        // Número aleatorio para elegir los grados del array
        randm = Math.floor(Math.random() * temporal.length); 
        num = temporal[randm];

        $(this).find('img').data('grado',num).css('transform','rotate('+num+'deg)').attr('src',imgRoute+gameData[n].rowC[i].img);
    });
    $('.gameActionWrp #D .col').each(function(i){
        // Copiamos Array de grados
        temporal=duplicarArray();
        
        // Eliminamos grados que se repitan para tener una lista sin los correctos
        temporal.find(function(item, index){
            for(var t1=0;t1<gameData[n].rowD[i].grad.length; t1++){
                if(item===gameData[n].rowD[i].grad[t1]){
                    e=temporal.splice(index,1);
                }
            }
        });
        // Número aleatorio para elegir los grados del array
        randm = Math.floor(Math.random() * temporal.length); 
        num = temporal[randm];

        $(this).find('img').data('grado',num).css('transform','rotate('+num+'deg)').attr('src',imgRoute+gameData[n].rowD[i].img);
    });
}
function rotar(){
    var g=$(this).data('grado'),
    row=$(this).data('row');
    g = g===270 ? 0 : g+90;
    
    $(this).css('transform', 'rotate('+g+'deg)').data('grado',g);
    
    validarAccion($(this),row);
}
function jugar(){

    $('.notaMiddle ').removeAttr('style');
    cargarJuego(nivel);
    if(nivel==1){
        $('.cantaroN1').css('display','block');
        animartexto('.instTxt',texto[2]);
        $('.tuboInicio').css('top','300px');
        $('.manivela').css('top','311px');
        $('.finTubo').css('top','12px');
    }else if(nivel==2){
        $('.cantaroN2').css('display','block');
        animartexto('.instTxt',texto[4]);
        $('.tuboInicio').css('top','450px');
        $('.manivela').css('top','461px');
    }
    else if(nivel==3){
        $('.cantaroN3').css('display','block');
    }
}
function validarAccion(img, row){
    $img = img;
    idImg = (Number($img.attr('id').substring(1)))-1;
    gradData = $img.data('grado');
    ok = false;
    
    if(row==='A'){
        gradOkArr = gameData[nivel].rowA[idImg].grad;
        gradOkArr.forEach(function(item){
            if(item===gradData){
                $img.attr('src', imgRoute+gameData[nivel].rowA[idImg].imgOk);
                gameData[nivel].rowA[idImg].compl = true;
                ok = true;
            }
        });
    } else  if(row==='B'){
        gradOkArr = gameData[nivel].rowB[idImg].grad;
        gradOkArr.forEach(function(item){
            if(item===gradData){
                $img.attr('src', imgRoute+gameData[nivel].rowB[idImg].imgOk);
                gameData[nivel].rowB[idImg].compl = true;
                ok = true;
            }
        });
    } else  if(row==='C'){
        gradOkArr = gameData[nivel].rowC[idImg].grad;
        gradOkArr.forEach(function(item){
            if(item===gradData){
                $img.attr('src', imgRoute+gameData[nivel].rowC[idImg].imgOk);
                gameData[nivel].rowC[idImg].compl = true;
                ok = true;
            }
        });
    } else  if(row==='D'){
        gradOkArr = gameData[nivel].rowD[idImg].grad;
        gradOkArr.forEach(function(item){
            if(item===gradData){
                $img.attr('src', imgRoute+gameData[nivel].rowD[idImg].imgOk);
                gameData[nivel].rowD[idImg].compl = true;
                ok = true;
            }
        });
    }
    if(ok){
        $img.off('click');
        setTimeout(function(){ 
            if(validarCompletado(nivel)){
                nMaximo=(gameData.length)-1;
                
                nivel = nivel+1;
                nivelCompletado();
            }
        }, 700);
    }
}
function nivelCompletado() {
    //console.log('nivel: '+nivel);
    
    if(nivel===1){
        txt = texto[1];
        imgElena = imgRoute+'bernardina.png';
        $('.notaMiddle ').css('display','block');
        $('#niv1Ok').css('display','block');
        $('#chorroFinal').css({ 'top': '185px', 'display': 'block'});
        $('#btnDescripcion').css('display','block').off('click').on('click', jugar);
    }else if(nivel===2){
        txt = texto[3];
        imgElena = imgRoute+'bernardina.png';
        $('.notaMiddle ').css('display','block');
        $('#niv2Ok').css('display','block');
        $('#chorroFinal').css({ 'top': '30px', 'display': 'block'});
        $('#btnDescripcion').css('display','block').off('click').on('click', jugar);
    }else if(nivel===3){
        txt = texto[5];
        imgElena = imgRoute+'bernardina.png';
        $('.notaMiddle ').css('display','block');
        $('#niv3Ok').css('display','block');
        $('#chorroFinal').css({ 'top': '30px', 'display': 'block'});
        $('#btnDescripcion').css('display','block').off('click');
        $('#btnDescripcion').on('click', finalizar);
    }
    aplausos.play();
    $('#elenaImagen').attr('src',imgElena);
    $('.instTxt').empty();
    animartexto('.instTxt', txt);
}
function validarCompletado(n){
    // Recorremos toda la data del juego para validar
    for(var i=0; i< gameData[n].rowA.length; i++){
        if(!gameData[n].rowA[i].compl){
            
            return false;
        }
    }
    for(var i=0; i< gameData[n].rowB.length; i++){
        if(!gameData[n].rowB[i].compl){
            return false;
        }
    }
    for(var i=0; i< gameData[n].rowC.length; i++){
        if(!gameData[n].rowC[i].compl){
            return false;
        }
    }
    for(var i=0; i< gameData[n].rowD.length; i++){
        if(!gameData[n].rowD[i].compl){
            return false;
        }
    }
    return true;
}
function finalizar() {
    confeti();
    imgPremio='<img src="img/premio.png" id="imgPremio" class="animated flipInX">';
    $('.gameboardWrpr').empty().append(imgPremio);
    imgElena=imgRoute+'elena.png';
    $('#elenaImagen').attr('src',imgElena);
    $('.instTxt').empty();
    animartexto('.instTxt', texto[6]);
    $('#btnDescripcion').off('click').css('z-index','100').on('click', function(){
        $('.instTxt').empty();
        animartexto('.instTxt', texto[7]);
    });
}

function animartexto(selector,texto) {
    if(!texto) texto = $(selector).html();
    var app = $(selector)[0];
    var typewriter = new Typewriter(app, {
      loop: false,
      delay: 10,
      cursor: ""
    });
    
    typingSound.play();
    typewriter.typeString(texto)
      .callFunction(function () {typingSound.pause()})
      .pauseFor(0)
      .start();

}

function confeti(){
    console.log('confetti');
    
    $('#my-canvas').fadeIn();
    confettiSettings = {"target":"my-canvas","max":"300","size":"1","animate":true,"props":["circle","square","triangle","line"],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"25","rotate":true,"width":"1908","height":"925"};
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }