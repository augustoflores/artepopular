/*//////////////////////////////////////////////////////////////////////////
//
//  Author: Irvin Rangel, inherit.mx
//  Date: 01 Ene, 2012
//  En tiempos de ocio. (Cuando no hay algo que hacer en la chamba)
//  Version 1.0
//
*//////////////////////////////////////////////////////////////////////////
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
	$(".item").each(function(){
		if($(this).hasClass("toCheck")){
			src[item] = $(this).html();
			item++;
		}
	});
	for(var cont = 0; cont<2; cont++){
		src[cont] = src[cont].split('title="');
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

			try {
			    var mySound = new buzz.sound("../../audios/juegos/Win_SergiodelaCruzHernan.mp3");
			    mySound.play();
			} catch (e) {}
			$('#msg-game-over').append(" Muy Bien");
			$(".globonext").click();
			$(".globonext").removeClass("hidden");

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
	
	$(".wrapper-item").each(function(){
		var attrId = $(this).attr("id");
		attrId = '#'+attrId;
		if($(attrId + '> .item').hasClass("checked")){
			//Do nothing
		}else{
			$(this).css("background-image", 'url("./img/piedra@1,25x.png")');//Change background color
		}
	});	
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
	$('#instructions').fadeIn();
	$('#msg-game-over').html("Score: 0");
	$('#container').fadeIn("slow");

	try {
      var mySound = new buzz.sound("../../audios/UX_Interaccion/Snooker_Publicdomain.mp3");
      mySound.play();
    } catch (e) {}

	$(".globonext").click();

	

	});	
});


