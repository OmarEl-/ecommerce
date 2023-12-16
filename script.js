	 	$(document).ready(function(){
	 		let kleding = true;
	 		//let setI;
	 		
  $(".btn0").click(function(){
    $(".navbar-vertical").slideToggle();
  
  		if(kleding == true){
    	$(this).html('Kleding <i class="fa-solid fa-angle-up ms-2"></i>');
    	kleding = false;
    }else{
    	$(this).html('Kleding <i class="fa-solid fa-angle-down ms-2"></i>');
    	kleding = true;
    }

  });


  ///======= Animated Rotation ====*//
    //  let rotation = 0;
 //  function rot(){
  	
 //      if(rotation < 180){
      	
	// rotation += 10;
 //  	$('.fa-angle-down').rotate(rotation);
	
   		
 //   		}

 //  }


 // jQuery.fn.rotate = function(degg){
 //    	$(this).css({'transform':"rotate("+degg+"deg)"});
 //    	return $(this);
 //    }

 ///======= Animated Rotation ====*//

  	if($(window).width() < 920){
  		$('.navbar-vertical ul.navbar-nav').addClass('text-center');
  	}else{
  		$('.navbar-vertical ul.navbar-nav').removeClass('text-center');
  	}



  	////========= searchbar call ====//

//   let searchbar = $('.second-searchbar').html();
// 	if($(window).width() >= 992){
// $('.first-searchbar').html(searchbar);
// $('.second-searchbar').html('');
// }else{
// 	$('.first-searchbar').html('');
// $('.second-searchbar').html(searchbar);
// }


/////=================================////


if (window.matchMedia("(max-width: 992px)").matches) {
	let searchbar = $('.first-searchbar').html();
  // Viewport is less or equal to 992 pixels wide


  $('.second-searchbar').html(searchbar);
$('.first-searchbar').html('');
} else {
  // Viewport is greater than 992 pixels wide
    
  $('.second-searchbar').html('');
$('.first-searchbar').html(searchbar);
}

// END jQuey Function
});















