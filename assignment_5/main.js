
var cartnum = 0;


var color;
var size;

// make product when user selects

function add_Collar(name,color,size,qty) {
  this.name = 'Dog GPS Tracker Collar';
  this.color = color;
  this.size = size;
  this.qty = cartnum;
  this.image = "assets/images/collar.jpg";
}


$(document).ready(function() {
  // start with empty array for user's order
  var order = [];

  // when user clicks blue button
  $('.blue').click(function() {
    // change the display of the blue button
    $(this).css('border',"solid 6px #234164");
    // assign a color
    color = 'Crazyberry';
    // change the picture
    $("#product_pic").attr('src',"assets/images/collar.jpg");
    return false;
  })

  // when the user clicks the medium button
  $('.medium').click(function() {
    // change the display
    $(this).css('background-color',"#F28A91");
    // assign a size
    size = 'medium';
  })

  // when the user clicks the add to cart button
  $('.add').click(function() {
    // increase the number of items in the cart
    cartnum += 1;
    // display this on the site by linking to the HTML via id
    document.getElementById("cart_num").innerHTML = cartnum;

    // assign user's product to a variable
    var cur_product = new add_Collar(name,color,size,1);
    // push that variable to the user's entire order
    order.push(cur_product);
    // add this to local storage
    localStorage.setItem("order",JSON.stringify(order));
  })

  // display attributes on the website
  // parses through objects in localStorage
  // indexes at the first one to access the first object in localStorage
  // accesses attributes by calling the first object's parameter
  $("#idv_pic").attr("src", JSON.parse(localStorage["order"])[0].image);
  $("#item_name").text(JSON.parse(localStorage["order"])[0].name);
  $("#item_color").text(JSON.parse(localStorage["order"])[0].color);
  $("#item_size").text(JSON.parse(localStorage["order"])[0].size);
  // figures out how many items the user ordered assuming the user only orders the exact same item
  $("#qty").text('Quantity : ' + JSON.parse(localStorage["order"])[Math.floor(localStorage.order.length/113 -1)].qty);





})
