var order = [];
var product = [];
var complete = false;
var cartnum = 0;

$(function() {

  $('.blue').click(function() {

    $(this).css('border',"solid 6px #234164");

    product.push(this);

    $("#product_pic").attr('src',"assets/images/collar.jpg");
    return false;

  })

  $('.medium').click(function() {
    $(this).css('background-color',"#F28A91");
    product.push(this);
    complete = true;
  })

})



function cart() {
  if (complete == false) {
    alert('Please fill out all options!');
    console.log('hi');
  }
  if (complete == true) {
    cartnum += 1;
    product.push(cartnum);

    if (order.length == 0) {
      order.push(product);
    }

    else {
      for (i = 0; i < order.length; i++) {
        for (j = 0; j < order[i].length; i++) {
          if (product[0] != order[i][j]) {
            order.push(product);

          }
          else {
            product[3] = cartnum;
            order.push(product);

          }
        }
      }
    }

    console.log(product);
    console.log(order);





    document.getElementById("cart_num").innerHTML = cartnum;
  }
}
