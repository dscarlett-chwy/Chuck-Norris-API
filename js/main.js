
$("#start").on("click",function(){
  $("h2").remove();
  var apiURL = "https://api.chucknorris.io/jokes/random?category=" //+ apiKey //+ "&variants=" + keywordInput;

    $.ajax({

         url: apiURL,
         success: function(response){

           $(".joke").append("<h2>"+response.value+"</h2>");
         },
         error: function(r){
           console.log(r);
         }
    })

})
