
// So the 'click to learn more about me' button is automatically clicked
// hides info first
jQuery(function(){
   jQuery('#hide').click();
});

// animated effect to make extended bio more visible
// about me page
$("#hide").on("click", function() {
	$(".info").toggle(1000);
});

// outbreak page
$("#big_pic").on("click", function() {
  // enlarging the picture
	$("#board_pic").animate({
    width: "80%",
    height: "80%",
    marginLeft: "10%"
  });
});


$("#small_pic").on("click", function() {
	$("#board_pic").animate({
    // bringing the picture back to the original size
    width: "60%",
    height: "60%",
    marginLeft: "20%"
  });
});

// wilbur page
// primary research
$("#big_pic").on("click", function() {
  // enlarging the picture
	$("#pic_size").animate({
    width: "100%",
    height: "100%",
    marginLeft: "0%"
  });
});


$("#small_pic").on("click", function() {
	$("#pic_size").animate({
    // bringing the picture back to original size
    width: "75%",
    height: "75%",
    marginLeft: "10%"
  });
});

// model
$("#big_model_pic").on("click", function() {
  // enlarging the picture
	$("#model").animate({
    width: "100%",
    height: "100%",
    marginLeft: "0%"
  });
});


$("#small_model_pic").on("click", function() {
	$("#model").animate({
    // bringing the picture back to original size
    width: "75%",
    height: "75%",
    marginLeft: "10%"
  });
});

// storyboard 1
$("#big_story1_pic").on("click", function() {
  // enlarging the picture
	$("#story1").animate({
    width: "100%",
    height: "100%",
    marginLeft: "0%"
  });
});


$("#small_story1_pic").on("click", function() {
	$("#story1").animate({
    // bringing the picture back to original size
    width: "75%",
    height: "75%",
    marginLeft: "10%"
  });
});

// storyboard 2
$("#big_story2_pic").on("click", function() {
  // enlarging the picture
	$("#story2").animate({
    width: "100%",
    height: "100%",
    marginLeft: "0%"
  });
});


$("#small_story2_pic").on("click", function() {
	$("#story2").animate({
    // bringing the picture back to original size
    width: "75%",
    height: "75%",
    marginLeft: "10%"
  });
});


// storyboard 3
$("#big_story3_pic").on("click", function() {
  // enlarging the picture
	$("#story3").animate({
    width: "100%",
    height: "100%",
    marginLeft: "0%"
  });
});


$("#small_story3_pic").on("click", function() {
	$("#story3").animate({
    // bringing the picture back to original size
    width: "75%",
    height: "75%",
    marginLeft: "10%"
  });
});


// storyboard4
$("#big_story4_pic").on("click", function() {
  // enlarging the picture
	$("#story4").animate({
    width: "100%",
    height: "100%",
    marginLeft: "0%"
  });
});


$("#small_story4_pic").on("click", function() {
	$("#story4").animate({
    // bringing the picture back to original size
    width: "75%",
    height: "75%",
    marginLeft: "10%"
  });
});
