
var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=se&' +
          'apiKey=5cd1a5286d9e453abceee179a6446b54';
var req = new Request(url);
fetch(req)
    .then(function(response) {
      
      var data = JSON.parse(this.response) // kanske ska va (response) ist för this.response
      
    })
