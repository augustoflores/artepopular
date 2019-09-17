var tablero;
var gradSort=[];
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
                img: idImg[0],
                grad: [90,270],
                imgOk: idImg[2],
                compl: false
            }, {
                img: idImg[4],
                grad: [0],
                imgOk: idImg[4],
                compl: true
            }, {
                img: idImg[4],
                grad: [0],
                imgOk: idImg[4],
                compl: true
            }, {
                img: idImg[4],
                grad: [0],
                imgOk: idImg[4],
                compl: true
            }
        ],
        rowC: [
            {
                img: idImg[1],
                grad: [270],
                imgOk: idImg[3],
                compl: false
            },{
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
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2],
                compl: false
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
    tablero = $('.gameActionWrp').html();
    cargarJuego(0);
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
    cargarJuego(nivel);
    if(nivel==1){
        $('.cantaroN1').css('display','block');
    }else if(nivel==2){
        $('.cantaroN2').css('display','block');
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
                console.log('Total: '+nMaximo+', nivel: '+nivel);
                
                if(nivel<nMaximo){
                    // Si el nivel es menor a la cantidad de niveles,
                    // carga el siguiente nivel
                    nivel = nivel+1;
                    nivelCompletado();
                    // 
                    
                }else{
                    finalizar();
                }
            }
        }, 700);
    }
}
function nivelCompletado() {
    if(nivel===1){
        txt = "<b>!Muy bien¡</b> Acabas de llenar el primer cánataro.";
        imgElena = imgRoute+'bernardina.png';
        $('#chorroFinal').css({ 'top': '185px', 'display': 'block'});
    }else if(nivel===2){
        txt = "<b>!Muy bien¡</b> Acabas de llenar el Segundo cánataro.";
        imgElena = imgRoute+'bernardina.png';
        $('#chorroFinal').css({ 'top': '30px', 'display': 'block'});
    }else if(nivel===3){
        txt = "<b>!Muy bien¡</b> Acabas de llenar el tercer cánataro.";
        imgElena = imgRoute+'bernardina.png';
        $('#chorroFinal').css({ 'top': '30px', 'display': 'block'});
    }
    $('#btnDescripcion').css('display','block').on('click', jugar)
    $('#elenaImagen').attr('src',imgElena);
    $('.instTxt').empty().html(txt);
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
    alert('!OVER¡');
}