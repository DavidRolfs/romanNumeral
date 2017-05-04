function getInput(input) {
  if (input === 0){
    return "null";
  }
}



$(document).ready(function(){
  $("form#userNumber").submit(function(event) {
  event.preventDefault();


  var userInput = parseInt($("#userNumberInput").val());
  var result = getInput(userInput);
  $("#result").append(result);
  });
});
