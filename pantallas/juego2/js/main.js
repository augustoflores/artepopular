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
  patas: {
    id: '',
    x: 0,
    y: 0,
    image: '',
    origen: ''
  }
};
var screenPosition = {
  x: 0,
  y: 0
};
var categoriaSelecc='menuCabezas';
var dentroDropzone = false;
$(document).ready(empezarJuego);

function inicio(){
  $('#btnDescripcion').on('click', empezarJuego);
}

function empezarJuego(){
    $('.btnNav').on('click', abrirMneu);
    $('.footer').fadeOut('slow');
    $('#menuCabezas').addClass('activo');

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
          console.log(categoriaSelecc);
          
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
          }
          
          imgDropped=event.relatedTarget;
          
          event.relatedTarget.offsetParent.classList.add('empty');
          event.relatedTarget.classList.remove('dropIN');
          event.relatedTarget.classList.add('interaccion');

          
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
      
      x=event.currentTarget.getAttribute('data-x');
      y=event.currentTarget.getAttribute('data-y');
      flipped=event.currentTarget.getAttribute('data-volteado');
      console.log(flipped);

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