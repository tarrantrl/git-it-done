var getUserRepos = function(user) {
    // format github api url
    var apiUrl = "https://api.github.com/users/" + user+"/repos";
    // make a request to the url
    // fetch happens asynchronously to not slow everything down - AJAX asynch javascript and XML
    fetch(apiUrl).then(function(response){
        // response object has methods json() and text() for non json data
        // json() returns another Promise object with another then() method
        response.json().then(function(data){
            console.log(data);
        })
    })
};
  
getUserRepos("facebook");