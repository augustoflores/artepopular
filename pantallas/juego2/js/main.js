var alebrije={
  cabeza: {
      id: '',
      x:0,
      y:0
  }
};
$(document).ready(empezarJuego);

function empezarJuego(){
    $('.btnNav').on('click', abrirMneu);
    $('.footer').fadeOut('slow');

    interact('#dropzone').dropzone({
      ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        
      },
      ondragenter: function(event){
        
        if(alebrije.cabeza.id!=''){
          console.log(alebrije.cabeza.id);
          idCabeza = '#'+alebrije.cabeza.id;
          $(idCabeza).removeAttr('style').data('x',0).data('y',0);
        }
      },
      ondragleave: function (event) {
        //console.log('no està dentro de dropzone');
        event.relatedTarget.style.transform='translate(0px, 0px)';
        // update the posiion attributes
        event.target.setAttribute('data-x', 0);
        event.target.setAttribute('data-y', 0);
      },
      ondrop: function(event){
         alebrije.cabeza.id = event.relatedTarget.id;
      }
    });

    interact('.dragg').draggable({
      inertia: true,
      onstart: recordPosition,
      onmove: dragMoveListener
    });
}
function abrirMneu(){
    if($(this).hasClass('activo')){ return false; }
    $('.submenus').find('.activo').removeClass('activo');
    $('.menuJ2').find('.activo').removeClass('activo');

    $(this).addClass('activo');
    var $submenu = '#'+$(this).data('sbmenu');
    $($submenu).addClass('activo');
 
}
function recordPosition(event){
  console.log(event.dx+', '+event.dy);
   

}
function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
    // translate the element
    target.style.webkitTransform =
      target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)'
  
    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
    
  }