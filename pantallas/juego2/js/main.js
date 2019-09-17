var alebrije={
  cabeza: {
      id: '',
      x:0,
      y:0,
      image: '',
      origen: ''
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
var categoriaSelecc;
var dentroDropzone = false;
$(document).ready(empezarJuego);

function empezarJuego(){
    $('.btnNav').on('click', abrirMneu);
    $('.footer').fadeOut('slow');

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
        
        dentroDropzone = dropped;
        if(dentroDropzone) {
          obj.classList.add('can-drop');
        } else {
          obj.classList.remove('can-drop');
          
        }

      },
      ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
        
        //console.log(event.relatedTarget.offsetLeft+', '+event.relatedTarget.offsetTop);
        if(categoriaSelecc === 'menuCabezas'){
          if(alebrije.cabeza.id!=='' && alebrije.cabeza.id !== event.relatedTarget.id){ // No es el primer objeto y no es el mismo objeto
            idCabeza = '#'+alebrije.cabeza.id;
            origen = alebrije.cabeza.origen;
            
            $(idCabeza).remove();
            $(origen).removeClass('empty').html(alebrije.cabeza.image);
            $(idCabeza).removeAttr('style').data('x', 0).data('y', 0);
            
          }
        }else if(categoriaSelecc === 'menuCabezas'){
          if(alebrije.patas.id!=='' && alebrije.patas.id !== event.relatedTarget.id){ // No es el primer objeto y no es el mismo objeto
            idPatas = '#'+alebrije.patas.id;
            origen = alebrije.patas.origen;
            
            $(idPatas).remove();
            $(origen).removeClass('empty').html(alebrije.patas.image);
            $(idPatas).removeAttr('style').data('x', 0).data('y', 0);
            
          }
        }
      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.relatedTarget.classList.remove('can-drop');
        event.relatedTarget.dataset.x=0;
        event.relatedTarget.dataset.y=0;
        // console.log(event);
        
        if(dentroDropzone){
          // El objeto se ha depositado en la zona

          imgPos=[];
          imgPos.push( screenPosition.x - 260 );
          imgPos.push( screenPosition.y - 290 );
          
          if(categoriaSelecc==='menuCabezas'){
            // Insertamos datos en el objeto
            
            alebrije.cabeza.id = event.relatedTarget.id;
            alebrije.cabeza.image = event.relatedTarget.outerHTML;
            alebrije.cabeza.origen = event.relatedTarget.offsetParent;
          }else if(categoriaSelecc==='menuPatas'){
            // Insertamos datos en el objeto
            
            alebrije.patas.id = event.relatedTarget.id;
            alebrije.patas.image = event.relatedTarget.outerHTML;
            alebrije.patas.origen = event.relatedTarget.offsetParent;
          }
          
          imgDropped=event.relatedTarget;
          
          event.relatedTarget.offsetParent.classList.add('empty');
          event.relatedTarget.classList.remove('dropIN');
          event.relatedTarget.dataset.x=imgPos[0];
          event.relatedTarget.dataset.y=imgPos[1];
          event.relatedTarget.style.transform="translate("+imgPos[0]+"px, "+imgPos[1]+"px)";
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
    });
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
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  
    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
    
  }