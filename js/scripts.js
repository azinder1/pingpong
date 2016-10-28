var loopRepository = "";

var pingPong = function (input) {
  var counter = 1;

  if ( isNaN(input) === true) {
    alert("Please put in a number");
  }
  else {
    //debugger
    while (counter <= input) {
      if (counter % 3 === 0 && counter % 5 !== 0) {
        loopRepository = loopRepository.concat("<li> ping! </li>");
        counter += 1;
      }
      else if (counter % 3 !== 0 & counter % 5 === 0) {
        loopRepository = loopRepository.concat("<li> pong! </li>");
        counter += 1;
      }
      else if (counter % 3 === 0 && counter % 5 === 0) {
        loopRepository =loopRepository.concat("<li> pingpong! </li>");
        counter += 1;
      }
      else {
        loopRepository = loopRepository.concat("<li>" + counter + "</li>");
        counter += 1;
      }
    }
  }
};

$(document).ready(function(){
  $(".blanks form").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    var pingPongConverter = pingPong(inputNumber);
    $("ul").text(loopRepository);
  });
});
