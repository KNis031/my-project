
var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=se&' +
          'apiKey=5cd1a5286d9e453abceee179a6446b54';
var req = new Request(url);
fetch(req)
    .then(response => response.json() )
    .then(data => {
          
        
          
          for (const article of data.articles.slice(0,4) ) {
          
          const headlnbox = document.createElement('div')
          headlnbox.setAttribute('class','headline')
                    
          const headln = document.createElement('h3')
          headln.innerHTML = article.title
          
          document.getElementById("headlines").appendChild(headlnbox)
          headlnbox.appendChild(headln)
          }
      
    });
