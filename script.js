// TODO: add code here
//TH (Requirements #1)
window.addEventListener('load', function() {
    // TH TODO: create object for container element
    const container = document.getElementById('container')

    //TH Fetch (Requirements #2)
    // fetch('https://handlers.education.launchcode.org/static/astronauts.json').then( function (response) {
    //     response.json().then( function (json) {
    //         console.log(json);

    //         //TH build HTML dynamically
    //         for (let i=0; i < json.length; i++) {
    //             let astronaut = json[i];
    //             container.innerHTML += `
    //             <div class="astronaut">
    //                 <div class="bio">
    //                     <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
    //                     <ul>
    //                      <li>Hours in space: ${astronaut.hoursInSpace}</li>
    //                      <li>Active: ${astronaut.active}</li>
    //                      <li>Skills: ${astronaut.skills.join(", ")}</li>
    //                     </ul>
    //                 </div>
    //                 <img class="avatar" src="${astronaut.picture}">
    //             </div>
    //             `
    //         }

    //     });
    // });


//TH Fetch with mdern async/await syntax
async function fetchAndDisplayAstronauts() {
    let response = await fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    let json  = await response.json(); //await unboxing the response to actually pull the data out of the json

    //Bonus Mission 1
    json.sort(function (a,b) {
        return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
    });

    //Bonus Mission 3
    const count = document.getElementById('count');
    count.innerHTML = `There are ${json.length} astronauts.`;

    for (let i=0; i < json.length; i++) {
                    let astronaut = json[i];
                    //Bonus Mission 2
                    let activeClass = astronaut.active ? "active" : "";

                    container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                             <li>Hours in space: ${astronaut.hoursInSpace}</li>
                             <li class="${activeClass}">Active: ${astronaut.active}</li>
                             <li>Skills: ${astronaut.skills.join(", ")}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}">
                    </div>
                    `
                }
    }

    //Call async function
    fetchAndDisplayAstronauts();

});