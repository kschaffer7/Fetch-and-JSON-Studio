window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            // console.log(json);
            const container = document.getElementById("container");
            let astronauts = '';
            // Bonus Mission: to sort list by number of hours in space
            json.sort(function(a, b) {
                return b.hoursInSpace - a.hoursInSpace;
            });
            for(astronaut of json) {
                astronauts += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${checkIfActive(astronaut)}</li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>`;
            }
            container.innerHTML = astronauts;
            // Bonus Mission: Add a count of astronauts to the page
            container.innerHTML +=
            `<div class="astronautCount">
                <p>Astronaut Count: ${json.length}</p>
            </div>`
        });
    });
    
});
// Bonus Mission: turn active status to green if true
function checkIfActive(astronaut) {
    if(astronaut.active === true){
        return `<span style="color:green">${astronaut.active}</span>`;
    } else {
        return astronaut.active;
    }
}