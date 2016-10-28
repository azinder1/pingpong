var pingPong = function (input) {
  if ( isNaN(input) === true) {
    alert("Please put in a number");
  }
  else {
    if (input % 3 === 0 || input % 5 !== 0) {
      alert("ping");
    }
    else {
      alert("this is not a multiple of 3")
    }
  }
};

$(document).ready(function(){
  $(".blanks form").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    var pingPongConverter = pingPong(inputNumber);
    console.log(inputNumber)
  });
});
