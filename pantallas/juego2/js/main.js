var alebrije={
  cabeza: {
      id: '',
      x:0,
      y:0,
      image: '',
      origen: '',
      ancho: 0
  },
  cuerpo: {
    id: '',
    x: 0,
    y: 0,
    image: '',
    origen: '',
    ancho: 0
  },
  patas: [],
  colas: [],
  orejas: [],
  stickers: []
};
var txtFooter=[
  'Inicio',
  '<p>Muy bien, ahora crea un personaje con los elementos disponibles. Puedes <span class="colorAmarillo">mover, voltear (doble click) y escalar</span> las piezas del alebrije como desees.<br>También se puedes eliminarlas arrastrándolas al ícono de la basura.</p>',
  '<p>Imagina un animal fantástico, elige las partes que lo componen y arrástalas hacia abajo para ir formando tu alebrije. Puedes añadir tantos elementos quieras o bien, eliminarlos.</p><p>Pulsa <span class="colorAmarillo">Finalizar</span> cuando te guste el resultado de lo que ves.</p>',
  '<p>Muchas gracias, eres un gran aprendiz. Te ofrezco este reconocimiento por tu creatividad.<br><span class="colorVerde">Alebrije Psicodélico</span></p><p>Esto te convierte en un maestro artesano por estas tierras. Vuelve cuando quieras.</p>',
  '<p>Yo, de igual forma he enseñado el oficio a mi hijo Felipe y a mi nieto Leonardo…<br> Sé que con el tiempo también se han convertido en grandes artistas.</p><p>¡Mucha suerte en tu camino!</p>'
];

var AquiVas=0;

var screenPosition = {
  x: 0,
  y: 0
};
var categoriaSelecc='menuCabezas';
var dentroDropzone = false;
var anchoAntesBorrar = []; // Guardamos el ancho para animar al borrar
var typingSound;

$(document).ready(inicio);

function inicio(){
  typingSound = new buzz.sound("../../audios/UX_Interaccion/blip.mp3",{loop: true,volume: 0.5});
  aplausos = new buzz.sound("../../audios/juegos/Win_SergiodelaCruzHernan.mp3", {loop: false, volume: 0.5});
  borrar = new buzz.sound("../../audios/UX_Interaccion/BubblePop_BenjaminVogelzan.mp3", {loop: false, volume: 1});
  flip = new buzz.sound("../../audios/UX_Interaccion/hollow_dog .mp3", {loop: false, volume: 0.7});
  
  animartexto('.txtFooter');
  empezarJuego();
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
function empezarJuego(){
    $('.btnNav').on('click', abrirMneu);
    $('.menuJ2').removeAttr('style');
    $('#menuCabezas').addClass('activo');

    // Borrarr
    interact('#borrarDrop').dropzone({
      accept: '.canErrase',
      overlap: 0.1,
      ondragenter: function (event) {
        var draggableElement = event.relatedTarget;
        var dropzoneElement = event.target;
        // console.log(event);
        
    
        // feedback the possibility of a drop
        dropzoneElement.classList.add('animated');
        dropzoneElement.classList.add('bounce');
        draggableElement.style.opacity='.3';
      },
      ondragleave: function (event) {
        // remove the drop feedback style

        event.target.classList.remove('animated');
        event.target.classList.remove('bounce');
        event.relatedTarget.style.opacity = '1';
      },
      ondrop: function (event) {
        borrar.play();
        event.target.classList.remove('animated');
        event.target.classList.remove('bounce');

        id = event.relatedTarget.id;
        txtId = id.split('-');
        cat=txtId[0];
        nId=txtId[1]-1;
        indice=event.relatedTarget.getAttribute('data-indice');
        
        
        switch(cat){
          case 'pata':
              idpata = '#'+alebrije.patas[indice].id;
              origen = alebrije.patas[indice].origen;
              
              $(idpata).remove();
              $(origen).removeClass('empty').html(alebrije.patas[indice].image);
              $(idpata).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.patas[indice].ancho);
            break;
          case 'cola':
              idcola = '#'+alebrije.colas[indice].id;
              origen = alebrije.colas[indice].origen;
              
              $(idcola).remove();
              $(origen).removeClass('empty').html(alebrije.colas[indice].image);
              $(idcola).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.colas[indice].ancho);
            break;
          case 'oreja':
              idOreja = '#'+alebrije.orejas[indice].id;
              origen = alebrije.orejas[indice].origen;
              
              $(idOreja).remove();
              $(origen).removeClass('empty').html(alebrije.orejas[indice].image);
              $(idOreja).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.orejas[indice].ancho);
            break;
          case 'cuerpo':
              idcuerpo = '#'+alebrije.cuerpo.id;
              origen = alebrije.cuerpo.origen;
              
              $(idcuerpo).remove();
              $(origen).removeClass('empty').html(alebrije.cuerpo.image);
              $(idcuerpo).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.cuerpo.ancho);
            break;
          case 'stick':
              idStick = '#'+alebrije.stickers[indice].id;
              origen = alebrije.stickers[indice].origen;
              
              $(idStick).remove();
              $(origen).removeClass('empty').html(alebrije.stickers[indice].image);
              $(idStick).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.stickers[indice].ancho);
            break;
          case 'cabeza':
            idCabeza = '#'+alebrije.cabeza.id;
            origen = alebrije.cabeza.origen;
            
            $(idCabeza).remove();
            $(origen).removeClass('empty').html(alebrije.cabeza.image);
            $(idCabeza).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.cabeza.ancho);
            break;
        }
        
      }
    });

    interact('#dropzone').dropzone({
      accept: '.dropIN',
      checker: function (
        dragEvent,         // related dragmove or dragend
        event,             // Touch, Pointer or Mouse Event
        dropped,           // bool default checker result
        dropzone,          // dropzone Interactable
        dropElement,       // dropzone element
        draggable,         // draggable Interactable
        draggableElement) {// draggable element
        
        var obj = event.target;
        screenPosition.x = event.x;
        screenPosition.y = event.y;
        // console.log(screenPosition.x+' ,'+screenPosition.y);
        
        
        dentroDropzone = dropped;

        // if(dentroDropzone) {
        //   obj.classList.add('can-drop');
        // } else {
        //   obj.classList.remove('can-drop');
          
        // }

      },
      ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
        
        //console.log(event.relatedTarget.offsetLeft+', '+event.relatedTarget.offsetTop);
        if(categoriaSelecc === 'menuCabezas'){
          
          // EVITAMOS QUE SE INSERTEN DOS OBJETOS
          if(alebrije.cabeza.id!=='' && alebrije.cabeza.id !== event.relatedTarget.id){ 
            // No es el primer objeto y no es el mismo objeto
            idCabeza = '#'+alebrije.cabeza.id;
            origen = alebrije.cabeza.origen;
            
            $(idCabeza).remove();
            $(origen).removeClass('empty').html(alebrije.cabeza.image);
            $(idCabeza).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.cabeza.ancho);
            
          }
        }else if(categoriaSelecc === 'menuCuerpo'){
          if(alebrije.cuerpo.id!=='' && alebrije.cuerpo.id !== event.relatedTarget.id){ 
            // No es el primer objeto y no es el mismo objeto
            idcuerpo = '#'+alebrije.cuerpo.id;
            origen = alebrije.cuerpo.origen;
            
            $(idcuerpo).remove();
            $(origen).removeClass('empty').html(alebrije.cuerpo.image);
            $(idcuerpo).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.cuerpo.ancho);
            
          }
        }
      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.relatedTarget.classList.remove('can-drop');
        event.relatedTarget.dataset.x=0;
        event.relatedTarget.dataset.y=0;
        width=event.relatedTarget.width;
        
        //event.relatedTarget.
        if(dentroDropzone){
          // El objeto se ha depositado en la zona
          borrar.play();
          // Avanzar al siguiente paso (cambio de Textos, paso 2)
          if(AquiVas < 2){
            $('.txtFooter').empty();
            AquiVas++;
            animartexto('.txtFooter', txtFooter[AquiVas]);
            
            if(AquiVas === 2){
              // Cambiamos la imágen por el alebrije
              $('.pedro').removeClass('animated zoomIn').css('display','none');
              $('#personajeFooter').attr('src', 'img/alebrije.png');
              $('.pedro').fadeIn();
              $('#btnDescripcion').css('display','block').on('click', finaliza);

            }
          }

          imgPos=[];
          imgPos.push( screenPosition.x - 160 );
          imgPos.push( screenPosition.y - 290 );
          
          if(categoriaSelecc==='menuCabezas'){
            // Insertamos datos en el objeto
            
            alebrije.cabeza.id = event.relatedTarget.id;
            alebrije.cabeza.image = event.relatedTarget.outerHTML;
            alebrije.cabeza.origen = event.relatedTarget.offsetParent;
            alebrije.cabeza.ancho = width;
          }else if(categoriaSelecc==='menuCuerpo'){
            // Insertamos datos en el objeto
            
            alebrije.cuerpo.id = event.relatedTarget.id;
            alebrije.cuerpo.image = event.relatedTarget.outerHTML;
            alebrije.cuerpo.origen = event.relatedTarget.offsetParent;
            alebrije.cuerpo.ancho = width;
          }else if(categoriaSelecc==='menuPatas') {
            i=alebrije.patas.length;
            alebrije.patas[i] = new Object();
            alebrije.patas[i].id = event.relatedTarget.id;
            alebrije.patas[i].image = event.relatedTarget.outerHTML;
            alebrije.patas[i].origen = event.relatedTarget.offsetParent;
            alebrije.patas[i].ancho = width;

            event.relatedTarget.dataset.indice=i;

          }else if(categoriaSelecc==='menuColas') {
            i=alebrije.colas.length;
            alebrije.colas[i] = new Object();
            alebrije.colas[i].id = event.relatedTarget.id;
            alebrije.colas[i].image = event.relatedTarget.outerHTML;
            alebrije.colas[i].origen = event.relatedTarget.offsetParent;
            alebrije.colas[i].ancho = width;
            event.relatedTarget.dataset.indice=i;

          }else if(categoriaSelecc==='menuOrejas') {
            i=alebrije.orejas.length;
            alebrije.orejas[i] = new Object();
            alebrije.orejas[i].id = event.relatedTarget.id;
            alebrije.orejas[i].image = event.relatedTarget.outerHTML;
            alebrije.orejas[i].origen = event.relatedTarget.offsetParent;
            alebrije.orejas[i].ancho = width;
            event.relatedTarget.dataset.indice=i;
          }else if(categoriaSelecc==='menuStickers') {
            i=alebrije.stickers.length;
            alebrije.stickers[i] = new Object();
            alebrije.stickers[i].id = event.relatedTarget.id;
            alebrije.stickers[i].image = event.relatedTarget.outerHTML;
            alebrije.stickers[i].origen = event.relatedTarget.offsetParent;
            alebrije.stickers[i].ancho = width;
            event.relatedTarget.dataset.indice=i;
          }
          
          imgDropped=event.relatedTarget;
          
          event.relatedTarget.offsetParent.classList.add('empty');
          event.relatedTarget.classList.remove('dropIN');
          event.relatedTarget.classList.add('interaccion');
          event.relatedTarget.classList.add('canErrase');

          
          event.relatedTarget.dataset.x=imgPos[0];
          event.relatedTarget.dataset.y=imgPos[1];
          //console.log($(imgDropped).data('volteado'));
          if(!$(imgDropped).data('volteado')){
            event.relatedTarget.dataset.volteado=0;
            event.relatedTarget.style.transform="translate("+imgPos[0]+"px, "+imgPos[1]+"px)";
            //event.relatedTarget.style.transform="translate("+screenPosition.x+"px, "+screenPosition.y+"px)";
          }

          $('#dropzone').append(imgDropped);
          
        }else{
          event.relatedTarget.style.transform='translate(0px, 0px)';
          // update the posiion attributes
          event.relatedTarget.setAttribute('data-x', 0);
          event.relatedTarget.setAttribute('data-y', 0);
        }
        
      }
    });

    interact('.dragg').draggable({
      inertia: true,
      onmove: dragMoveListener
    }).resizable({
      // resize from all edges and corners
      edges: { left: true, right: true, bottom: true, top: true },
      modifiers: [
        // keep the edges inside the parent
        interact.modifiers.restrictEdges({
          outer: 'parent',
          endOnly: true
        }),
  
        // minimum size
        interact.modifiers.restrictSize({
          min: { width: 40, height: 50 }
        })
      ],
  
      inertia: true
    }).on('resizemove', function (event) {
      
      var target = event.target
      var x = (parseFloat(target.getAttribute('data-x')) || 0)
      var y = (parseFloat(target.getAttribute('data-y')) || 0)
  
      // update the element's style
      target.style.width = event.rect.width + 'px'
      target.style.height = event.rect.height + 'px'
  
      // translate when resizing from top or left edges
      x += event.deltaRect.left
      y += event.deltaRect.top
      v=target.getAttribute('data-volteado');
      if(v && v>0){
        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px) scaleX(-1)';
      }else{
        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      }
          
  
      target.setAttribute('data-x', x)
      target.setAttribute('data-y', y)
      target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
    });;

    interact('.interaccion').on('doubletap', function (event) {
      event.preventDefault();
      flip.play();
      x=event.currentTarget.getAttribute('data-x');
      y=event.currentTarget.getAttribute('data-y');
      flipped=event.currentTarget.getAttribute('data-volteado');

      if(flipped==='0'){
        event.currentTarget.style.transform='translate('+x+'px,'+y+'px) scaleX(-1)';
        event.currentTarget.setAttribute('data-volteado', 1);
      }else{
        event.currentTarget.style.transform='translate('+x+'px,'+y+'px)';
        event.currentTarget.setAttribute('data-volteado', 0);
      }

    });
    // interact('.interaccion').resizable({
    //   // resize from all edges and corners
    //   edges: { left: true, right: true, bottom: true, top: true },
  
  
    //   inertia: true
    // })
    //.on('resizemove', function (event) {
    //   var target = event.target
    //   var x = (parseFloat(target.getAttribute('data-x')) || 0)
    //   var y = (parseFloat(target.getAttribute('data-y')) || 0)
  
    //   // update the element's style
    //   target.style.width = event.rect.width + 'px'
    //   target.style.height = event.rect.height + 'px'
  
    //   // translate when resizing from top or left edges
    //   x += event.deltaRect.left
    //   y += event.deltaRect.top
  
    //   target.style.webkitTransform = target.style.transform =
    //       'translate(' + x + 'px,' + y + 'px)'
  
    //   target.setAttribute('data-x', x)
    //   target.setAttribute('data-y', y)
    //   target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
    // });
}
function abrirMneu(){
    if($(this).hasClass('activo')){ return false; }
    $('.submenus').find('.activo').removeClass('activo');
    $('.menuJ2').find('.activo').removeClass('activo');

    $(this).addClass('activo');
    categoriaSelecc = $(this).data('sbmenu');
    var $submenu = '#'+$(this).data('sbmenu');
    $($submenu).addClass('activo');
 
}
function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    var v = target.getAttribute('data-volteado');

    if(target.getAttribute('data-volteado') && v>0){
      target.style.transform = 'translate(' + x + 'px, ' + y + 'px)  scaleX(-1)';
    }else{
      target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    }

  
    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
    
    
  }
  function finaliza() {
      $('.txtFooter').empty();
      AquiVas++;
      // Cambiamos la imágen por el alebrije
      switch(AquiVas){
        case 3:
          aplausos.play();
          confeti();
          animartexto('.txtFooter', txtFooter[AquiVas]);
            $('.pedro').css('display','none');
            $('#personajeFooter').attr('src', 'img/pedro.png');
            $('.pedro').fadeIn();
            $('#btnDescripcion span').empty().html('Siguiente');
            // Desaparecer Menú!
            $('.navGame').addClass('animated fadeOutUp');
            $('#borrarDrop').addClass('animated fadeOutUp');
            // Eliminamos interacción de las imágenes
            $('#dropzone img').each(function(){
              $(this).removeClass('canErrase dragg interaccion').css('position','absolute');
            });
          break;
        case 4:
            animartexto('.txtFooter', txtFooter[AquiVas]);
          break
        default:
          break
      }

    
  }

  function confeti(){
    $('#my-canvas').fadeIn();
    confettiSettings = {"target":"my-canvas","max":"300","size":"1","animate":true,"props":["circle","square","triangle","line"],"colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],"clock":"25","rotate":true,"width":"1908","height":"925"};
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }
