window.addEventListener("load", function() {
    let json =[];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);
        });
    });
    
});