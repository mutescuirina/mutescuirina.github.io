




// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });


    
    
$(() => {
$('button').on('click', ()=> {
    event.preventDefault()
    const userInput = $('#input').val().trim();
// userInput = userInput.replace(/ /g, "+");
const queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=BgZkpbDDpfxjmUaEPwZuc7w8yLfDZZPy';
    $.ajax({
        url: queryUrl,
        method: 'GET'
    }).done(function(response) {
        // console.log("Retrieved " + response.data + " records from the dataset!");
    const testGiphy = response.data[0].images.fixed_height.url;
    console.log(testGiphy);
 $('.content_img').attr('src',testGiphy);
    
})
    
})

})
