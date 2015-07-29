

$(document).ready(function() { 

	for (var i = 1; i <= 100; i++) {
		//console.log(i);
		 //$('.list').append('<li class="fb">' + i + '</li>');

if (i % 15 == 0) {
	 $( ".list" ).append('<li class="fb">' + "fizzbuzz" + '</li>');
	
}
else if (i % 3 == 0) {
	 $( ".list" ).append('<li class="fb">' + "fizz" + '</li>');
	
}
else if (i % 5 == 0) {
	 $( ".list" ).append('<li class="fb">' + "buzz" + '</li>');

}
else{
$('.list').append('<li class="fb">' + i + '</li>');

}
}

});


/*	if(i % 3 == 0) {
		return i = "fizz";
	}
	else if(i % 5 == 0) {
		return i = "buzz";
	}
*/