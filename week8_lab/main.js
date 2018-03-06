var animals = [new elephant(), new panda(), new lion()];
var names = ["BillyBob", "Arlu", "Jolene", "Chocolate", "Po", "Lancelot"];


function elephant(name, age) {
  this.name = name;
  this.age = age;
  this.type = "elephant";
  this.image = "ele.jpg";
}

function panda(name, age) {
  this.name = name;
  this.age = age;
  this.type = "panda";
  this.image = "panda.jpg";
}

function lion(name, age) {
  this.name = name;
  this.age = age;
  this.type = "lion";
  this.image = "lion.jpg";
}

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
  var ranIdx = generateRandomIndex(names.length);
  return names[ranIdx];
}

function generateRandomAge() {
  return generateRandomIndex(10);
}

function generateRandomAnimal() {
  var ranIdx = generateRandomIndex(animals.length);
  var ranAnimal = animals[ranIdx];
  if (ranAnimal instanceof elephant) {
    return new elephant(generateRandomName(), generateRandomAge());
  }
  if (ranAnimal instanceof panda) {
    return new panda(generateRandomName(), generateRandomAge());
  }
  if (ranAnimal instanceof lion) {
    return new lion(generateRandomName(), generateRandomAge());
  }
}

$(document).ready(function(){
  console.log('here');
  var myAnimal = generateRandomAnimal();

  localStorage.setItem("myAni", JSON.stringify(myAnimal));
  var myAnimal = JSON.parse(localStorage.getItem("savedAnimal"))

  var saved = false;

  if (myAnimal === null) {
    $("#button-action").text("Save Animal");
    myAnimal = generateRandomAnimal();
  } else {
    $("#button-action").text("Clear Animal");
    saved = true;
  }

  $("#ani-prop").text(myAnimal.name + " " + myAnimal.age + " years old");
  $("#ani-img").attr("src", myAnimal.image);

  $("#button-action").click(function() {
    if (saved == true) {
      localStorage.removeItem("savedAnimal");
      $("#button-action").css("display","none");
      $("#descrip").text("Cleared!");
    } else {
      localStorage.setItem("savedAnimal", JSON.stringify(myAnimal));
      $("#button-action").css("display","none");
      $("#descrip").text("Saved!");
    }
  })
});
