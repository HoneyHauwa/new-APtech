fetch('https://jsonplaceholder.typicode.com/photos/1')
      .then(response => response.json())
      .then(json => console.log(json))