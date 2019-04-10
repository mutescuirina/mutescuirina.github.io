  
 // fisher yates shuffle
 // https://bost.ocks.org/mike/shuffle/

 const shuffle = (array) =>  {
    let m = array.length, t, i;
  
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
    const queryUrl = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=BgZkpbDDpfxjmUaEPwZuc7w8yLfDZZPy&limit=10';
    // console.log(queryUrl)
    
    const queryData = $.get(queryUrl);

    queryData.done(function(response) { 
        console.log(response.data[0])
        shuffle(response.data)
        console.log(response.data[0])
    queryResponse = response.data[0].images.fixed_height.url
    embedURL = response.data[0].embed_url
    // console.log(embedURL);
    
    console.log("success got data", response); 
        const $img = $('<img>').attr('src',queryResponse)
        const $embedCode = $('<input>').val(embedURL)
        
        $('.content_img').append($img)
        $('.embeded_code').append($embedCode)
    });
    
    }
    
    // i need a function that will will remove the previous img and displays just one 
    const showOneImg = () => {
        currentImg = $('.content_img').children().last()
        if(('.content_img').length > 1)
        currentImg.remove();
        currentCode = $('.embeded_code').children().last()
        if(('.embeded_code').length > 1)
        currentCode.remove();
        
    }
   
// const showMore = () => {
//     const content = $('.content')
//     for ( let i in content) {

//     }
// }


//things that i need the button to do 
// if user pressed on the yes button the current giphy will be added to the emply array
//if user presses on the no button then the shuffle goes to the next giphy



//DOCUMENT READY///////////////////////////////////////////
    $(() => {
 $('#search').on('click', ()=> {
  // console.log('its working')
    event.preventDefault();
     apiData();
     showOneImg();
     $('#next').css('display', "block")
               
 })
            

$('#next').on('click', () => {
    event.preventDefault();
    apiData();
    showOneImg();
    
})



//Tuesday's obituaries/////////////////////////////////////



// const favBtn = $('#favBtn')
// const favoriteArr = [];

 
// const addFavorite = () => {
//     let favGify = $('.content_img').children()
//     favoriteArr.push(favGify)
//     apiData()
    
    
   
    

// }
// const renderArr = () => {
//     for ( i = 0; i < favoriteArr.length; i++) {
//         $('.favorites').append(favoriteArr[i]);
// console.log(favoriteArr)
//     }
    
// } 


// ///CLIKING EVENTS///////////////////////////////////////////////////////////////////////        
// 



// $(favBtn).on('click',() => {
//     event.preventDefault()
//     addFavorite();
//     renderArr();

// //if item is already in the favoriteArr then the button should not work 
// // it should not add the same item twice
// })
// $('#reset').on('click', () => {
//     console.log('hello')

//     $(".content_img").attr('src', '')
//     })





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