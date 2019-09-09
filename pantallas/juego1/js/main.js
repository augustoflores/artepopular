var gradSort=[];
var idImg = ['recta-bca.png','codo-bco.png','recta-azul.png','codo-azul.png','circulo-vde.png','circulo-rojo.png'];
var valG = [0,90,180,270];
var imgRoute = "img/";
var nivel = 0;
var gameData=[
    // Nivel 1
    {
        rowA: [
            {
                img: idImg[1],
                grad: [0,360],
                imgOk: idImg[3]
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2]
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2]
            }, {
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2]
            }
        ],
        rowB: [
            {
                img: idImg[0],
                grad: [90,270],
                imgOk: idImg[2]
            }, {
                img: idImg[4],
                grad: [0],
                imgOk: idImg[4]
            }, {
                img: idImg[4],
                grad: [0],
                imgOk: idImg[4]
            }, {
                img: idImg[4],
                grad: [0],
                imgOk: idImg[4]
            }
        ],
        rowC: [
            {
                img: idImg[1],
                grad: [270],
                imgOk: idImg[3]
            },{
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2]
            },{
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2]
            },{
                img: idImg[0],
                grad: [0,180],
                imgOk: idImg[2]
            }
        ],
        rowD: [
            {
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5]
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5]
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5]
            },{
                img: idImg[5],
                grad: [0],
                imgOk: idImg[5]
            }
        ]
        
    }
]

$(document).ready(inicio);
function inicio(){
    $('.gameActionWrp img').on('click', rotar);
    cargarJuego(0);
}

function cargarJuego(n) {
    nivel = n;
    function duplicarArray(){
        array=[];
        for(var t=0;t<valG.length;t++){
            array.push(valG[t]);
        }
        return array;
    }
    $('.gameActionWrp #A .col').each(function(i){
        // Copiamos Array de gradianes
        temporal=duplicarArray();
        
        // Eliminamos gradianes que se repitan para tener una lista sin los correctos
        temporal.find(function(item, index){
            for(var t1=0;t1<gameData[n].rowA[i].grad.length; t1++){
                if(item===gameData[n].rowA[i].grad[t1]){
                    e=temporal.splice(index,1);
                }
            }
        });
        // Número aleatorio para elegir los gradianes del array
        randm = Math.floor(Math.random() * temporal.length); 
        num = temporal[randm];
        
        $(this).find('img').data('grado',num).css('transform','rotate('+num+'deg)').attr('src',imgRoute+gameData[n].rowA[i].img);
    });
    $('.gameActionWrp #B .col').each(function(i){
        // Copiamos Array de gradianes
        temporal=duplicarArray();
        
        // Eliminamos gradianes que se repitan para tener una lista sin los correctos
        temporal.find(function(item, index){
            for(var t1=0;t1<gameData[n].rowB[i].grad.length; t1++){
                if(item===gameData[n].rowB[i].grad[t1]){
                    e=temporal.splice(index,1);
                }
            }
        });
        // Número aleatorio para elegir los gradianes del array
        randm = Math.floor(Math.random() * temporal.length); 
        num = temporal[randm];

        $(this).find('img').data('grado',num).css('transform','rotate('+num+'deg)').attr('src',imgRoute+gameData[n].rowB[i].img);
    });
    $('.gameActionWrp #C .col').each(function(i){
        // Copiamos Array de gradianes
        temporal=duplicarArray();
        
        // Eliminamos gradianes que se repitan para tener una lista sin los correctos
        temporal.find(function(item, index){
            for(var t1=0;t1<gameData[n].rowC[i].grad.length; t1++){
                if(item===gameData[n].rowC[i].grad[t1]){
                    e=temporal.splice(index,1);
                }
            }
        });
        // Número aleatorio para elegir los gradianes del array
        randm = Math.floor(Math.random() * temporal.length); 
        num = temporal[randm];

        $(this).find('img').data('grado',num).css('transform','rotate('+num+'deg)').attr('src',imgRoute+gameData[n].rowC[i].img);
    });
    $('.gameActionWrp #D .col').each(function(i){
        // Copiamos Array de gradianes
        temporal=duplicarArray();
        
        // Eliminamos gradianes que se repitan para tener una lista sin los correctos
        temporal.find(function(item, index){
            for(var t1=0;t1<gameData[n].rowD[i].grad.length; t1++){
                if(item===gameData[n].rowD[i].grad[t1]){
                    e=temporal.splice(index,1);
                }
            }
        });
        // Número aleatorio para elegir los gradianes del array
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
    // console.log(g);

    validarAccion($(this),row);
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
                ok = true;
                $img.attr('src', imgRoute+gameData[nivel].rowA[idImg].imgOk);
            }
        });
    } else  if(row==='B'){
        gradOkArr = gameData[nivel].rowB[idImg].grad;
        gradOkArr.forEach(function(item){
            if(item===gradData){
                ok = true;
                $img.attr('src', imgRoute+gameData[nivel].rowB[idImg].imgOk);
            }
        });
    } else  if(row==='C'){
        gradOkArr = gameData[nivel].rowC[idImg].grad;
        gradOkArr.forEach(function(item){
            if(item===gradData){
                ok = true;
                $img.attr('src', imgRoute+gameData[nivel].rowC[idImg].imgOk);
            }
        });
    } else  if(row==='D'){
        gradOkArr = gameData[nivel].rowD[idImg].grad;
        gradOkArr.forEach(function(item){
            if(item===gradData){
                ok = true;
                $img.attr('src', imgRoute+gameData[nivel].rowD[idImg].imgOk);
            }
        });
    }
    if(ok){
        $img.off('click');
    }
}