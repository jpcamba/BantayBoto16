


$( document ).ready(function() {
	var index;
	var tempunit;
	var newcount;
	$(".heart").click( function(){
		index = $(".heart").index(this);
		tempunit = $("label").eq(index).text();
		newcount = parseInt(tempunit) + 1;
		$("label").eq(index).html('<i class="heart"></i>' + newcount);
	});

	$('.js-loading-bar').modal({
		backdrop: 'static',
		show: false
	});


	$('#load').click(function(e){
		e.preventDefault();
		var $modal = $('.js-loading-bar'),
		$bar = $modal.find('.progress-bar');

		$modal.modal('show');
		$bar.addClass('animate');

		setTimeout(function() {
			$bar.removeClass('animate');
			$modal.modal('hide');
		}, 1500);

		$('#reportform').trigger("reset");
	});

});


