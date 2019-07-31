$(function(){
		var win =$(window).innerWidth();
		if(win<=992){
			$(".header ul.nav").css("display","none");
			$(".nav_kg").css("display","block");
			
		}else{
			$(".header ul.nav").css("display","block");
			$(".nav_kg").css("display","none");
		}
		
		$(".nav_kg").click(function(){
			if($(this).hasClass("active")){
				$(this).removeClass("active");
				$(this).css("background","url(img/nav_dk.png) no-repeat center center");
				$(".yd_nav").fadeOut();
				$("body").css("overflow","auto");
			}else{
				$(this).addClass("active");
				$(this).css("background","url(img/nav_gb.png) no-repeat center center");
				$(".yd_nav").fadeIn();
				$("body").css("overflow","hidden");
			}
		})
		
	$(window).resize(function(){
		var win =$(window).innerWidth();
		if(win<=992){
			$(".header ul.nav").css("display","none");
			$(".nav_kg").css("display","block");
			
		}else{
			$(".header ul.nav").css("display","block");
			$(".nav_kg").css("display","none");
		}
	})
	
	
	
})
