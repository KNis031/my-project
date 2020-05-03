
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=se&' +
          'apiKey=5cd1a5286d9e453abceee179a6446b54';
var req = new Request(url);
fetch(req)
    .then(response => response.json() )
    .then(data => {
          var data = JSON.parse(this.response.json() ) // kanske ska va (response) ist för this.response
        
          var title1 = data.articles[0].title;
          var title2 = data.articles[1].title;
          var title3 = data.articles[2].title;
          
          document.getElementById("headline1").innerHTML = title1;
          document.getElementById("headline2").innerHTML = title2;
          document.getElementById("headline3").innerHTML = title3;
          
      
    });
