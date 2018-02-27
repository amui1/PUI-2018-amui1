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
  var animal = generateRandomAnimal();
  $("#ani-prop").text(animal.name + " " + animal.age + " years old");
  $("#ani-img").attr("src", animal.image);
});
