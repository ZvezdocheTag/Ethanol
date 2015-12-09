
$(document).ready(function(){

$('.link').on('click', function(e){

  e.preventDefault();

  var linkItem = $(this).data('class');
  var item = $('body').find('.' + linkItem);

  if (item.length != 0) {
   $('html, body').animate({scrollTop:item.position().top}, 1400);
  }

    return false;
	});
	

	$('#slider').each(function(){

		var obj = $(this);

		$(obj).append('<div class="nav"></div>');

		$(obj).find('.slider__item').each(function(){
			$(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
  			 $(this).addClass("slider"+$(this).index());
  			 if ($(this).index() === 2) {
  			 	return false;
  			 }
		});
		$(obj).find("span").first().addClass('on');

		});

		$('.sphere-list__link').on('click', function(e){
			e.preventDefault();

			var sphereLink = $(this),
			linkItem = $(this).closest('.sphere-list__item'),
			linkActiveOff = $('.sphere-list__item').children();
		

			linkActiveOff.removeClass('sphere-list__link--active');
			sphereLink.addClass('sphere-list__link--active');

			
		});


		});

	function sliderOn (obj, sl) {
			var ul = $(sl).find('.slider');
			var bl = $(sl).find('li.slider' + obj);
			var step = $(bl).width();

			$(ul).animate({marginLeft: "-"+step*obj}, 500);
		}

		$(document).on('click', "#slider .nav span", function() {
			var sl = $(this).closest("#slider");

			$(sl).find("span").removeClass("on");
			$(this).addClass("on");
			var obj = $(this).attr("rel");


			sliderOn (obj, sl); // слайдим
 			return false

    });





