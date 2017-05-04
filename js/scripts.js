var value = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]

var array = [];


function getInput(input) {
  if (input === 0) {
    return "null";
  }
  else if (input < 0) {
    return "We only recognize whole numbers."
  }
  else if (input > 3999) {
    return "Please enter a number between 0 and 4,000."
  }
  else if (input >= 1) {
    for(var index = 0; index <= value.length; index ++){
      if(input >= value[index][0]){
        array.push(value[index][1]);
        input -= value[index][0]
        getInput(input)
        return array.join("");
      }
    }
  }

}


$(document).ready(function(){
  $("form#userNumber").submit(function(event) {
  event.preventDefault();


  var userInput = parseInt($("#userNumberInput").val());
  var result = getInput(userInput);
  $("#result").text(result);
  });
});
