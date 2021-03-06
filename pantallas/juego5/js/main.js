var score=0;

function toSelect(attrId){//Select Items
	if($(attrId + '> .item').hasClass("off")){
		$(attrId + '> .item').removeClass("off").addClass("on");
		$(attrId + '> .item').fadeIn();	
		//$(attrId).css("background","#FFFFFF");//Change background color
	}else{
		$(attrId + '> .item').hide();
		$(attrId + '> .item').removeClass("on").addClass("off");
	}	
}
function toCheck(){//Check items selectedIndex
	//Global variables
	var totalCheck = 0;
	$(".item").each(function(){
		if($(this).hasClass("toCheck")){
			totalCheck++;
		}
	});
	if(totalCheck==2){
		return true;
	}else{
		return false;
	}
}
function toShow(){//To show items checked
	var item = 0;
	var src = Array();
	var alt;

	var canvas1Settings = {
        target: 'canvas1',
        max: 100,
        props: ["circle","square","triangle","line"],
        colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
        clock:25,
        rotate:false
        
      };
	var canvas1 = new ConfettiGenerator(canvas1Settings);

	$(".item").each(function(){
		if($(this).hasClass("toCheck")){
			src[item] = $(this).html();
			item++;
		}
	});
	for(var cont = 0; cont<2; cont++){
		src[cont] = src[cont].split('data-title="');
		var total=(src[cont][1].length)-2;
		src[cont] = src[cont][1].substr(0,total);
	}
	if(src[0]==src[1]){
		$(".item").each(function(){
			if($(this).hasClass("toCheck")){
				$(this).removeClass("toCheck").addClass("checked");
				$(this).removeClass("active");
				//
				$(this).removeClass("flipped");
				//
			}
		});
		if(src[0]<6){
			try {
			    var mySound = new buzz.sound("../../audios/juegos/bell_crowxxx.mp3");
			    mySound.play();
			} catch (e) {}
			score++;
			$('#msg-game-over').html('Score: '+score);
		}

		if(score>=5){
			$('#reloj').attr('data','OFF');
			try {
			    var mySound = new buzz.sound("../../audios/juegos/Win_SergiodelaCruzHernan.mp3");
			    mySound.play();
			} catch (e) {}
			$('#msg-game-over').append(" Muy Bien");
			canvas1.render();
			$(".globonext").click();
			$(".globonext").removeClass("hidden");
			$(".textnext").removeClass("hidden");
			

		}
		
		console.log('score:'+score);
		console.log(src[0]);
		console.log(src[1]);
		return true;
	}else{
		return false;
	}
}
function toHide(){//To hide items
	$(".item").each(function(){
	  if($(this).hasClass("toCheck")){
		  $(this).removeClass("toCheck").removeClass("on").addClass("off").css("display","none");
	  }
	});
	try {
      var mySound = new buzz.sound("../../audios/UX_Interaccion/blip.mp3");
      mySound.play();
    } catch (e) {}
	$(".wrapper-item").each(function(){
		var attrId = $(this).attr("id");
		attrId = '#'+attrId;
		if($(attrId + '> .item').hasClass("checked")){
			//Do nothing
		}else{
			//$(this).css("background-image", 'url("./img/piedra@1,25x.png")');//Change background color
		}
	});	
}

function reloj() {
      var s = 0;
      var m = 0;
    var seg = document.getElementById("segundos");
    var min = document.getElementById("minutos");
        
	//window.setInterval(function(){

	var intervalo = setInterval(function() {	
	      if($('#reloj').attr("data")=="OFF"){
      			clearInterval(intervalo);
    	  }
	      
		      if(s==60){
		        m++;
		        if (m.toString().length == 1){
		          minuto = "0" + m;
		        }else{
		          minuto = m;
		        }
		      

		        min.innerHTML = minuto;
		        s=0;
		      }
		      
		      if (s.toString().length == 1){
		          segundo = "0" + s;
		        }else{
		          segundo = s;
		        }
		      seg.innerHTML = segundo;
		      s++;
	      
	},1000);
	
}	

$(function(){//Main function

	$('.wrapper-item').click(function(event) {//Handle click event				
		var attrId = $(this).attr("id");
		attrId = '#'+attrId;

		$(attrId + '> .item').addClass("toCheck");//To handle comparison
		if($(attrId + '> .item').hasClass("active")){
			
			/*
			$(this).flip({
				direction:'tb',
				color:'white',
				speed: 200
			});
			*/
			try {
			    var mySound = new buzz.sound("../../audios/juegos/HammerOnMetal_PublicDomain.mp3");
			    mySound.play();
			} catch (e) {}
			if($(this).hasClass("flipped")){
				$(this).removeClass('flipped');
			}else{
				
				$(this).addClass('flipped').show().animate({ left: 1600 + "px" , top : 2370 + "px"}, 5000, 'linear');
			}	

			
			
			toSelect(attrId);//Selecting items
			if(toCheck()){
				// When two items are selected
				if(toShow()){
					//Everything fine
					
				}else{
					setTimeout("toHide()",900);

				}
			}
		}else{			
			$(attrId + '> .item').removeClass("toCheck");//To handle comparison
		}

	});



	$('#btn-comenzar').click(function(event) {//

	$(this).hide();
	$('#viewcards').hide();
	$('#reloj').fadeIn();
	$('#instructions').fadeIn();
	$('#msg-game-over').html("Score: 0");
	$('#container').fadeIn("slow");

	try {
      var mySound = new buzz.sound("../../audios/UX_Interaccion/Snooker_Publicdomain.mp3");
      mySound.play();
    } catch (e) {}

	$(".globonext").click();

	reloj('ON');

	});	


});


