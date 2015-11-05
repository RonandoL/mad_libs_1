/* to get the value from the form inputs, insert them into the <span>s where the information should go, and then un-hide the story itself */

$(document).ready(function() {
  $("#blanks form").submit(function(event) {  /* Take input, shove into variables. 1st select the form using ID="blanks", then inside the id="blanks" we grab the form. .submit() event listener */
    var person1Input = $("input#person1").val();  /*  we need to actually get the values from the form */
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);  /* .person1 of the output text. text, not append, to prevent additional inputs, inputs variable from above */
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();  /* it was hidden at first */

    event.preventDefault();
  });
});
