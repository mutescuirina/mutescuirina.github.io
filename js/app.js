
 //document ready  



    const apiData = () => {
       
        let userInput = $('#input').val();
    userInput = userInput.trim().replace(/ /g, "+");
    const queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=BgZkpbDDpfxjmUaEPwZuc7w8yLfDZZPy&=5';
    // console.log(queryUrl)
    
    const queryData = $.get(queryUrl);
    queryData.done(function(response) { 
        queryResponse = response.data[0].images.fixed_height.url;
        console.log("success got data", response); 
        $('.content_img').attr('src',queryResponse);});
    
    }
   



    $(() => {

$('#submit').on('click', ()=> {
    event.preventDefault()
    apiData();


})

$('#reset').on('click', () => {
    $(".content_img").attr('src', '')
        
    })











////////////////////////////////Graveyard//////////////////////////////////////////////////////////
// //     $.ajax({
// //         url: queryUrl,
// //         method: 'GET',
// //         limit: 5
// //     }).done(function(response) {
// //         console.log("Retrieved " + response.data + " records from the dataset!");
// //     const testGiphy = response.data[0].images.fixed_height.url;
// //     // console.log(testGiphy);
// //  
    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });
// })
    
// })
// 
});
