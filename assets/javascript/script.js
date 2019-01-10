
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
console.log(comediesArray[0])
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
//click submit button to add a favorite comedy to the comedyArray
$('#submit-button').on('click', function () {
    event.preventDefault();
    $('.button-div').empty();
    comediesArray.push($("#new-button-input").val());
    makeButton();
    $('#new-button-input').val('');
});
//when you click a gif button...create 10 paused gifs
$(document).on('click', '.button', function () {
    $('.gif-div-area').empty();
    // console.log('button-clicked');
    //set up the ajax method call
    //make a variable for the name of the button clicked
    var comedy = $(this).attr('data-name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    comedy + "&api_key=dc6zaTOxFJmzC&limit=10";
    // console.log(comedy);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
        //access the data array of the response
        var results = response.data;
        //create a for loop to display all 10 of the gifs in dynamically created divs
        for(i=0; i < results.length; i++) {
            var gifRating = $("<p>");
            gifRating.addClass('gif-rating');
            gifRating.text("Rating: " + results[i].rating);
            var gifDiv = $('<div>');
            gifDiv.addClass('gif');
            var comedyImage = $('<img>');
            comedyImage.attr('src', results[i].images.fixed_height_still.url);
            comedyImage.attr('alt', comediesArray[i]);
            comedyImage.attr('data-index', i)
            comedyImage.attr('data-state', 'still');
            comedyImage.addClass('gifImage');
            var imgDiv = $('<div>');
            imgDiv.addClass('gif-holder');
            imgDiv.append(comedyImage);
            gifDiv.append(imgDiv);
            gifDiv.append(gifRating);
            $('.gif-div-area').prepend(gifDiv);


            
    };
        $(document).on('click', '.gifImage', function() {
            console.log();
            var state = $(this).attr("data-state");
            var j = $(this).attr('data-index');
            
            if(state === 'still') {
                $(this).attr('src', results[j].images.fixed_height.url);
                $(this).attr('data-state', 'animated');
            }
            else {
                $(this).attr('src', results[j].images.fixed_height_still.url);
                $(this).attr('data-state', 'still');
            }
        });


});

  




    //make a dynamic div to hold the gif

})