//When .toggle() btn is clicked the div should appear and disappear
$("#toggleFunc").on("click", function() {
	$(".outer").toggle();
});

//When smooth .toggle() is clicked, the div should toggle slow
$("#toggleSmooth").on("click", function() {
	$(".outer").toggle(2000);
});

//When .slideUp() is clicked, the div should swipe up to disappear slowly
$("#slidingUp").on("click", function() {
	$(".outer").slideUp(500);
});

//When .slideDown() btn is clicked, the div should swipe down to appear slowly
$("#slidingDown").on("click", function() {
	$(".outer").slideDown(500);
});

/* You can customize your own animation with .animate() */

//When .animate() slide up to height btn is clicked, the div should swipe up to change height to 20px
$("#slidingUpHeight").on("click", function() {
	$(".outer").animate({height: "20px"});
});

//When .animate() slide down to height btn is clicked, the div should swipe down to change height to 300px
$("#slidingDownHeight").on("click", function() {
    $(".outer").animate({height: "300px"});
});

//When the .animate() slide up and down to height btn is clicked, the div should swipe up to change height to 20px and then back down to change height to 50px
$("#slidingUpDownHeight").on("click", function() {
    $(".outer").animate({height: "20px"},1000);
		$(".outer").animate({height: "300px"},1000);
		$(".outer").animate({height: "10px"},1000);
		$(".outer").animate({height: "400px"},1000);
		$(".outer").animate({height: "5px"},1000);
		$(".outer").animate({height: "600px"},1000);
		$(".outer").animate({height: "300px"},1000);
});
