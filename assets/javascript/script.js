
var comediesArray = [
    "The Office",
    "Parks and Recreation",
    "Modern Family",
    "Rick and Morty",
    "The League",
    "It's Always Sunny In Philadelphia",
    "Brooklyn Nine-Nine",
    "Archer"
]

var animated = false;

//make buttons from the buttonArray

function makeButton() {
    for (i = 0; i < comediesArray.length; i++) {
        //create a button div
        var gifButton = $('<button>');
        //add a class, attributes, and the text to the button
        gifButton.addClass('button');
        gifButton.attr('data-name', comediesArray[i]);
        gifButton.attr('type', 'button');
        gifButton.text(comediesArray[i]);
        //append the button to the buttonArea div in the HTML
        $('.button-div').append(gifButton);
    }
};
//run the makeButton function
makeButton();
//click submit button to add a favorite comedy to the list of buttons
$('#submit-button').on('click', function () {
    event.preventDefault();
    $('.button-area').empty();
    comediesArray.push($("#new-button-input").val());
    makeButton();
    $('#new-button-input').val('');
});
//when you click a gif button...create 10 paused gifs
$(document).on('click', '.button', function () {
    var buttonName = $(this).val("data-name")
    var queryURL =


})