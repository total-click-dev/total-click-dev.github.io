async function getgames(){return JSON.parse(await (await fetch("/games.json")).text())};
function makebutton(e){newbutton=document.createElement("a"),document.body.append(newbutton),newbutton.innerHTML=' <a class="'+e+'" rel="noreferrer noopener" target="_blank" href="/games/'+e+'/game"><img src="/games/'+e+'/icon" width="50" height="50"></img></a>'};

getgames().then(e=>{for(let t=0;t<e.length;t++)makebutton(e[t])});