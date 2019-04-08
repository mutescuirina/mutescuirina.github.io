
 //document ready  
 // fisher yates shuffle
 // https://bost.ocks.org/mike/shuffle/

 function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
  
//DATA GATHERING///////////////////////////////////////////////////////////////
    const apiData = () => {
       
        let userInput = $('#input').val();
    userInput = userInput.trim().replace(/ /g, "+");
    const queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=BgZkpbDDpfxjmUaEPwZuc7w8yLfDZZPy';
    // console.log(queryUrl)
    
    const queryData = $.get(queryUrl);
    queryData.done(function(response) { 
        shuffle(response.data)
        console.log("success got data", response); 
        queryResponse = response.data[0].images.fixed_height.url;

        const $img = $('<img>').attr('src',queryResponse)
        $('.content_img').append($img)
    });
    
    }
   



//things that i need the button to do 
// if user pressed on the yes button the current giphy will be added to the emply array
//if user presses on the no button then the shuffle goes to the next giphy



//DOCUMENT READY///////////////////////////////////////////
    $(() => {

//CREATE THE TWO NEW BUTTONS/////
const favBtn = $('#favBtn')
const passBtn = $('#passBtn')
const favoriteArr = [];

 

const addFavorite = () => {
    let favGify = $('.content_img').children()
    favoriteArr.push(favGify)
    apiData()
    
   
    

}
const renderArr = () => {
    for ( i = 0; i < favoriteArr.length; i++) {
        $('.favorites').append(favoriteArr[i]);
console.log(favoriteArr)
    }
    
} 


///CLIKING EVENTS///////////////////////////////////////////////////////////////////////        
$('#submit').on('click', ()=> {
    console.log('its working')
    event.preventDefault()
    apiData();
    
   


})

$(favBtn).on('click',() => {
    event.preventDefault()
    addFavorite();
    renderArr();

//if item is already in the favoriteArr then the button should not work 
// it should not add the same item twice
})
$('#reset').on('click', () => {
    console.log('hello')

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
