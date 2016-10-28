var loopRepository = "";

var pingPong = function (input) {
  var counter = 1;

  if (input <= 0 || isNaN(input) === true) {
    alert("Please put in a number greater than 0");
  }
  else {
    while (counter <= input) {
      if (counter % 3 === 0 && counter % 5 !== 0) {
        loopRepository = loopRepository.concat("<li> Ping! </li>");
        counter += 1;
      }
      else if (counter % 3 !== 0 & counter % 5 === 0) {
        loopRepository = loopRepository.concat("<li> Pong! </li>");
        counter += 1;
      }
      else if (counter % 3 === 0 && counter % 5 === 0) {
        loopRepository =loopRepository.concat("<li class=\'ping-pong\'> Ping Pong! </li>");
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
    $("#output ul").append(loopRepository);
  });
});
