$(document).ready(function() {
		playReady();
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate(
			{'left': '1750px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '600px');
			}
		);
		
	})
	.mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	})

  $(document).keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-still').hide();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-cool').show();
    }   
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
    }

	});

});
	function playHadouken() {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
	function playReady() {
		$('#ready-sound')[0].volume = 0.5;
		$('#ready-sound')[0].load();
		$('#ready-sound')[0].play();
	}

