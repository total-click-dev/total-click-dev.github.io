async function getGames() {
    const response = await fetch("/games.json");
    const data = await response.json();
    return data;
}

function makeButton(gameName) {
    const newButton = document.createElement("a");
    newButton.className = gameName;
    newButton.rel = "noreferrer noopener";
    newButton.target = "_blank";
    newButton.onclick = function() {
        window.location.href = `play.html?game=${gameName}`;
    };
    newButton.style.borderRadius = "30%";
    
    const img = document.createElement("img");
    img.style.border = "20px solid transparent"
    img.alt = gameName;
    img.style.borderRadius = "30%";
    img.src = "/games/" + gameName + "/icon";
    img.width = 100;
    img.height = 100;
    
    newButton.appendChild(img);
    document.querySelector('.container').appendChild(newButton);
}

getGames().then(gameNames => {
    gameNames.forEach(gameName => makeButton(gameName));
});
