const API_KEY = '';
const loserEl = document.querySelector('.loser');
const statsEl = document.querySelector('.stats');

fetch(`https://api.mozambiquehe.re/bridge?auth=${API_KEY}&player=thytrudragonking&platform=PC`)
.then(response => response.json())
.then(postResponse => {
    console.log(postResponse);
    loserEl.innerHTML += postResponse.global.name;

    const stats = postResponse.total;

    for (const property in stats) {
        const element = document.createElement('li');
        element.innerHTML += `${property}: ${stats[property].value}`;
        statsEl.appendChild(element);
    }
})
.catch(err => {
    console.log(err);
});

fetch(`https://api.mozambiquehe.re/games?auth=${API_KEY}&uid=1011802528201`)
.then(response => response.json())
.then(postResponse => {
    console.log(postResponse);
})
.catch(err => {
    console.log(err);
});