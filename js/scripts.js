/* to get the value from the form inputs, insert them into the <span>s where the information should go, and then un-hide the story itself */

$(document).ready(function() {
    $("#blanks form").submit(function(event) {
        event.preventDefault();

        var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

        blanks.forEach(function(blank) {
            var userInput = $("input#" + blank).val();
            $("." + blank).text(userInput);
        });

        $("#story").show();
    });
});
