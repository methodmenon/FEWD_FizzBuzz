$(document).ready(function(){

	$("#btn_val").click(function(e){
		e.preventDefault(e);
		var num_to_fb = $("#val").val();
		fizzBuzz(num_to_fb);
		$("#val").val(" ");
	});

});

function fizzBuzz(x) {
	var gen_list = $("#fb_list");
	for (var i = 1; i <= x; i++) {
		if ((i % 3) == 0 && ((i % 5) == 0)) {
			gen_list.append("<li>fizz buzz</li>");
		}
		else if ((i % 3) == 0) {
			gen_list.append("<li>fizz</li>");
		}
		else if ((i % 5) == 0) {
			gen_list.append("<li>buzz</li>");
		}
		else
		{
			gen_list.append("<li>" + i + "</li>");
		}
	}
}
