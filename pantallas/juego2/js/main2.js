var alebrije = {
    cabeza: [],
    cuerpo: [],
    patas: [],
    colas: [],
    orejas: [],
    stickers: []
};
var txtFooter = [
    'Inicio',
    '<p>Muy bien, ahora crea un personaje con los elementos disponibles. Puedes <span class="colorAmarillo">mover, girar, voltear (doble click) y escalar</span> las piezas del alebrije como desees.<br>También se puedes eliminarlas arrastrándolas al ícono de la basura.</p>',
    '<p>Imagina un animal fantástico, elige las partes que lo componen y arrástalas hacia abajo para ir formando tu alebrije. Puedes añadir tantos elementos quieras o bien, eliminarlos.</p><p>Pulsa <span class="colorVerde">Finalizar</span> cuando te guste el resultado de lo que ves.</p>',
    '<p>Muchas gracias, eres un gran aprendiz. Te ofrezco este reconocimiento por tu creatividad.<br><span class="colorVerde">Alebrije Psicodélico</span></p><p>Esto te convierte en un maestro artesano por estas tierras. Vuelve cuando quieras.</p>',
    '<p>Yo, de igual forma he enseñado el oficio a mi hijo Felipe y a mi nieto Leonardo…<br> Sé que con el tiempo también se han convertido en grandes artistas.</p><p>¡Mucha suerte en tu camino!</p>'
];
var angle = 0;
var AquiVas = 0;

var screenPosition = {
    x: 0,
    y: 0
};
var categoriaSelecc = 'menuCabezas';
var dentroDropzone = false;

$(document).ready(inicio);

function inicio() {
    typingSound = new buzz.sound("../../audios/UX_Interaccion/blip.mp3", {
        loop: true,
        volume: 1
    });
    aplausos = new buzz.sound("../../audios/juegos/Win_SergiodelaCruzHernan.mp3", {
        loop: false,
        volume: 1
    });
    borrar = new buzz.sound("../../audios/UX_Interaccion/BubblePop_BenjaminVogelzan.mp3", {
        loop: false,
        volume: 1
    });
    flip = new buzz.sound("../../audios/UX_Interaccion/hollow_dog .mp3", {
        loop: false,
        volume: 1
    });

    animartexto('.txtFooter');
    empezarJuego();
}

function animartexto(selector, texto) {
    if (!texto) texto = $(selector).html();
    var app = $(selector)[0];
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: 10,
        cursor: ""
    });

    typingSound.play();
    typewriter.typeString(texto)
        .callFunction(function() {
            typingSound.pause()
        })
        .pauseFor(0)
        .start();

}

function empezarJuego() {
    $('.btnNav').on('click', abrirMneu);
    $('.menuJ2').removeAttr('style');
    $('#menuCabezas').addClass('activo');

    // B o r r a r r
    interact('#borrarDrop').dropzone({
        accept: '.canErrase',
        ondragenter: function(event) {
            var draggableElement = event.relatedTarget;
            var dropzoneElement = event.target;


            // feedback the possibility of a drop
            dropzoneElement.classList.add('animated');
            dropzoneElement.classList.add('bounce');
            draggableElement.style.opacity = '.3';
        },
        ondragleave: function(event) {
            // remove the drop feedback style

            event.target.classList.remove('animated');
            event.target.classList.remove('bounce');
            event.relatedTarget.style.opacity = '1';
        },
        ondrop: function(event) {
            borrar.play();
            event.target.classList.remove('animated');
            event.target.classList.remove('bounce');

            child = $(event.relatedTarget).find('img');

            id = child[0].id;
            txtId = id.split('-');
            cat = txtId[0];
            nId = txtId[1] - 1;
            indice = event.relatedTarget.getAttribute('data-indice');


            switch (cat) {
                case 'pata':
                    idpata = '#' + alebrije.patas[indice].id;
                    origen = alebrije.patas[indice].origen;
                    $(origen).removeClass('empty').html(alebrije.patas[indice].image);
                    $(idpata).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.patas[indice].ancho);
                    break;
                case 'cola':
                    idcola = '#' + alebrije.colas[indice].id;
                    origen = alebrije.colas[indice].origen;

                    $(origen).removeClass('empty').html(alebrije.colas[indice].image);
                    $(idcola).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.colas[indice].ancho);
                    break;
                case 'oreja':
                    idOreja = '#' + alebrije.orejas[indice].id;
                    origen = alebrije.orejas[indice].origen;

                    $(origen).removeClass('empty').html(alebrije.orejas[indice].image);
                    $(idOreja).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.orejas[indice].ancho);
                    break;
                case 'cuerpo':
                    idcuerpo = '#' + alebrije.cuerpo[indice].id;
                    origen = alebrije.cuerpo[indice].origen;

                    $(origen).removeClass('empty').html(alebrije.cuerpo[indice].image);
                    $(idcuerpo).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.cuerpo[indice].ancho);
                    break;
                case 'stick':
                    idStick = '#' + alebrije.stickers[indice].id;
                    origen = alebrije.stickers[indice].origen;

                    $(origen).removeClass('empty').html(alebrije.stickers[indice].image);
                    $(idStick).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.stickers[indice].ancho);
                    break;
                case 'cabeza':
                    idCabeza = '#' + alebrije.cabeza[indice].id;
                    origen = alebrije.cabeza[indice].origen;

                    $(origen).removeClass('empty').html(alebrije.cabeza[indice].image);
                    $(idCabeza).removeAttr('style').data('x', 0).data('y', 0).css('width', alebrije.cabeza[indice].ancho);
                    break;
            }

            $(event.relatedTarget).remove();

        }
    });

    interact('#dropzone').dropzone({
        accept: '.dropIN',
        checker: function(
            dragEvent, // related dragmove or dragend
            event, // Touch, Pointer or Mouse Event
            dropped, // bool default checker result
            dropzone, // dropzone Interactable
            dropElement, // dropzone element
            draggable, // draggable Interactable
            draggableElement) { // draggable element

            screenPosition.x = event.x;
            screenPosition.y = event.y;


            dentroDropzone = dropped;

        },
        ondropactivate: function(event) {
            // add active dropzone feedback
            event.target.classList.add('drop-active');
        },
        ondropdeactivate: function(event) {
            // remove active dropzone feedback
            event.target.classList.remove('drop-active');
            event.relatedTarget.classList.remove('can-drop');
            event.relatedTarget.dataset.x = 0;
            event.relatedTarget.dataset.y = 0;
            width = event.relatedTarget.width;
            var i = 0;
            if (dentroDropzone) {
                // El objeto se ha depositado en la zona
                borrar.play();
                // Avanzar al siguiente paso (cambio de Textos, paso 2)
                if (AquiVas < 2) {
                    $('.txtFooter').empty();
                    AquiVas++;
                    animartexto('.txtFooter', txtFooter[AquiVas]);

                    if (AquiVas === 2) {
                        // Cambiamos la imágen por el alebrije
                        $('.pedro').removeClass('animated zoomIn').css('display', 'none');
                        $('#personajeFooter').attr('src', 'img/alebrije.png');
                        $('.pedro').fadeIn();
                        $('#btnDescripcion').css('display', 'block').on('click', finaliza);

                    }
                }

                if (categoriaSelecc === 'menuCabezas') {
                    // Insertamos datos en el objeto

                    i = alebrije.cabeza.length;
                    alebrije.cabeza[i] = new Object();
                    alebrije.cabeza[i].id = event.relatedTarget.id;
                    alebrije.cabeza[i].image = event.relatedTarget.outerHTML;
                    alebrije.cabeza[i].origen = event.relatedTarget.offsetParent;
                    alebrije.cabeza[i].ancho = width;
                    indiceClass = 'in8';
                } else if (categoriaSelecc === 'menuCuerpo') {
                    // Insertamos datos en el objeto

                    i = alebrije.cuerpo.length;
                    alebrije.cuerpo[i] = new Object();
                    alebrije.cuerpo[i].id = event.relatedTarget.id;
                    alebrije.cuerpo[i].image = event.relatedTarget.outerHTML;
                    alebrije.cuerpo[i].origen = event.relatedTarget.offsetParent;
                    alebrije.cuerpo[i].ancho = width;
                    indiceClass = 'in3';
                } else if (categoriaSelecc === 'menuPatas') {
                    i = alebrije.patas.length;
                    alebrije.patas[i] = new Object();
                    alebrije.patas[i].id = event.relatedTarget.id;
                    alebrije.patas[i].image = event.relatedTarget.outerHTML;
                    alebrije.patas[i].origen = event.relatedTarget.offsetParent;
                    alebrije.patas[i].ancho = width;
                    indiceClass = 'in5';

                    event.relatedTarget.dataset.indice = i;

                } else if (categoriaSelecc === 'menuColas') {
                    i = alebrije.colas.length;
                    alebrije.colas[i] = new Object();
                    alebrije.colas[i].id = event.relatedTarget.id;
                    alebrije.colas[i].image = event.relatedTarget.outerHTML;
                    alebrije.colas[i].origen = event.relatedTarget.offsetParent;
                    alebrije.colas[i].ancho = width;
                    indiceClass = 'in2';
                    event.relatedTarget.dataset.indice = i;

                } else if (categoriaSelecc === 'menuOrejas') {
                    i = alebrije.orejas.length;
                    alebrije.orejas[i] = new Object();
                    alebrije.orejas[i].id = event.relatedTarget.id;
                    alebrije.orejas[i].image = event.relatedTarget.outerHTML;
                    alebrije.orejas[i].origen = event.relatedTarget.offsetParent;
                    alebrije.orejas[i].ancho = width;
                    indiceClass = 'in10';
                    event.relatedTarget.dataset.indice = i;
                } else if (categoriaSelecc === 'menuStickers') {
                    i = alebrije.stickers.length;
                    alebrije.stickers[i] = new Object();
                    alebrije.stickers[i].id = event.relatedTarget.id;
                    alebrije.stickers[i].image = event.relatedTarget.outerHTML;
                    alebrije.stickers[i].origen = event.relatedTarget.offsetParent;
                    alebrije.stickers[i].ancho = width;
                    indiceClass = 'in15';
                    event.relatedTarget.dataset.indice = i;
                }


                imgDropped = event.relatedTarget;
                wObj = event.relatedTarget.width;
                n = wObj * 2;
                scale = n + 'px';
                hObj = event.relatedTarget.height;

                dropPosition = $('#dropzone').offset();

                xik = (screenPosition.x - dropPosition.left) - wObj;
                yik = (screenPosition.y - dropPosition.top) - hObj;

                event.relatedTarget.offsetParent.classList.add('empty');
                event.relatedTarget.classList.remove('dropIN');
                event.relatedTarget.classList.remove('dragg');
                event.relatedTarget.classList.add('interaccion');

                event.relatedTarget.dataset.x = xik;
                event.relatedTarget.dataset.y = yik;

                if (!$(imgDropped).data('volteado')) {
                    event.relatedTarget.dataset.volteado = 0;
                    event.relatedTarget.removeAttribute('style');
                    event.relatedTarget.removeAttribute('data-x');
                    event.relatedTarget.removeAttribute('data-y');
                    event.relatedTarget.style.width = scale;
                }
                var idFake = Date.now();

                $('#dropzone').append('<div class="gestos canErrase ' + indiceClass + '" id="' + idFake + '" data-x="' + xik + '" data-y="' + yik + '" data-indice="' + i + '"></div>');
                $('#dropzone #' + idFake).css('transform', 'translate(' + xik + 'px, ' + yik + 'px)').append(imgDropped);

            } else {
                event.relatedTarget.style.transform = 'translate(0px, 0px)';
                // update the posiion attributes
                event.relatedTarget.setAttribute('data-x', 0);
                event.relatedTarget.setAttribute('data-y', 0);
            }

        },
        ondrop: function(event) {
            console.log('drop works');

        }
    });

    interact('.dragg').draggable({
        inertia: false,
        onmove: dragMoveWindowListener
    })

    function makegesturable() {}

    // INTERACCIÓN PRINCIPAL
    var angleScale = {
        angle: 0,
        scale: 1
    }
    interact('.gestos').gesturable({
            onstart: function(event) {
                angleScale.angle -= event.angle

            },
            onmove: function(event) {

                img = $('.gestos img');
                var currentAngle = event.angle + angleScale.angle
                var currentScale = event.scale * angleScale.scale
                flipped = event.currentTarget.getAttribute('data-volteado');

                if (flipped === '1') {
                    $(event.currentTarget).find("img").css('transform', 'rotate(' + currentAngle + 'deg)' + 'scale(' + currentScale + ') scaleX(-1)');
                } else {
                    $(event.currentTarget).find("img").css('transform', 'rotate(' + currentAngle + 'deg)' + 'scale(' + currentScale + ')');
                }
                dragMoveListener(event);
            },
            onend: function(event) {
                angleScale.angle = angleScale.angle + event.angle
                angleScale.scale = angleScale.scale * event.scale
            }
        })
        .draggable({
            onmove: dragMoveListener
        }).on('doubletap', function(event) {
            event.preventDefault();
            flip.play();
            flipped = event.currentTarget.getAttribute('data-volteado');

            if (flipped === '0') {
                $(event.currentTarget).find("img").css('transform', 'scaleX(-1)');
                event.currentTarget.setAttribute('data-volteado', 1);
            } else {
                $(event.currentTarget).find("img").css('transform', 'scaleX(1)');
                event.currentTarget.setAttribute('data-volteado', 0);
            }

        });

}

function abrirMneu() {
    if ($(this).hasClass('activo')) {
        return false;
    }
    $('.submenus').find('.activo').removeClass('activo');
    $('.menuJ2').find('.activo').removeClass('activo');

    $(this).addClass('activo');
    categoriaSelecc = $(this).data('sbmenu');
    var $submenu = '#' + $(this).data('sbmenu');
    $($submenu).addClass('activo');

}

function dragMoveListener(event) {

    var target = event.target;

    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    var v = target.getAttribute('data-volteado');

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)


}

function dragMoveWindowListener(event) {

    var target = event.target
    move = $(target).offset();

    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';


    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)


}

function finaliza() {
    $('.txtFooter').empty();
    AquiVas++;
    // Cambiamos la imágen por el alebrije
    switch (AquiVas) {
        case 3:
            aplausos.play();
            confeti();
            animartexto('.txtFooter', txtFooter[AquiVas]);
            $('.pedro').css('display', 'none');
            $('#personajeFooter').attr('src', 'img/pedro.png');
            $('.pedro').fadeIn();
            $('#btnDescripcion span').empty().html('Siguiente');
            // Desaparecer Menú!
            $('.navGame').addClass('animated fadeOutUp');
            $('#borrarDrop').addClass('animated fadeOutUp');
            // Eliminamos interacción de las imágenes
            $('#dropzone img').each(function() {
                $(this).removeClass('canErrase dragg interaccion').css('position', 'absolute');
            });
            break;
            case 4:
                animartexto('.txtFooter', txtFooter[AquiVas]);
                $('#btnDescripcion').click(
                    function() {
                        window.location.href = '../../pantallas/escena2-conclusion/index.html';
                    }
                );
            break
        default:
            break
    }


}

function confeti() {
    $('#my-canvas').fadeIn();
    confettiSettings = {
        "target": "my-canvas",
        "max": "300",
        "size": "1",
        "animate": true,
        "props": ["circle", "square", "triangle", "line"],
        "colors": [
            [165, 104, 246],
            [230, 61, 135],
            [0, 199, 228],
            [253, 214, 126]
        ],
        "clock": "25",
        "rotate": true,
        "width": "1908",
        "height": "925"
    };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}