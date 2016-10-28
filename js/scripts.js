var pingPong = function (input) {
  var counter = 1;
  var toLoopToString = "";
  if ( isNaN(input) === true) {
    alert("Please put in a number");
  }
  else {
    alert("This is a number")
  }
};

$(document).ready(function(){
  $(".blanks form").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    var pingPongConverter = pingPong(inputNumber);
    console.log(inputNumber)
  });
})
