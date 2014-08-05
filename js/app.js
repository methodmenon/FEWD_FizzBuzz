$(document).ready(function(){
	$("#btn_val").click(function(e){
		e.preventDefault(e);
		fB_val = fizzBuzz($("#val").val());
		fB_li = $("<li></li>").text(fB_val);
		$("#fb_list").append(fB_li);
	});

});

function fizzBuzz(x) {

	for (var i = x; i < 100; i++) {
		if ((i % 3) == 0 && ((i % 5) == 0)) {
			console.log("fizz buzz");
		}
		else if ((i % 3) == 0) {
			console.log("fizz");
		}
		else if ((i % 5) == 0) {
			console.log("buzz");
		}
		else
		{
			console.log(i);
		}
	}
}
