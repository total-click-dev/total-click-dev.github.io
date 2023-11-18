async function getgames(){return JSON.parse(await (await fetch("/games.json")).text())};
function makebutton(e){newbutton=document.createElement("a"),document.body.getElementsByClassName('container')[0].append(newbutton),newbutton.outerHTML=' <a class="'+e+'" rel="noreferrer noopener" target="_blank" href="/games/'+e+'/game"><img alt="'+e+'" style="border-radius: 30%;" src="/games/'+e+'/icon" width="100" height="100"></img></a>'};

getgames().then(e=>{for(let t=0;t<e.length;t++)makebutton(e[t])});