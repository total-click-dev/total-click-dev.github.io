import os
import requests
import urllib.parse
import json

urls = []

with open('C:\\Users\\cmdblock\\Downloads\\saved.har', 'r', encoding = 'cp850') as f:
    file = f.read()
    file = json.loads(file)['log']['entries']
    for entry in file:
        url = entry['request']['url']
        if url.find('https://4e634835-88c8-4de5-8ce4-341fe892a1e0.poki-gdn.com/e9056d93-d3b7-4235-be5c-21b4aa3484a9/') != -1 and url != 'https://4e634835-88c8-4de5-8ce4-341fe892a1e0.poki-gdn.com/e9056d93-d3b7-4235-be5c-21b4aa3484a9/':
            urls.append(url)

for url in urls:

    firstdir = os.getcwd()

    gameurl = 'https://4e634835-88c8-4de5-8ce4-341fe892a1e0.poki-gdn.com/e9056d93-d3b7-4235-be5c-21b4aa3484a9/'
    oldurl = url
    url = (url.split(gameurl)[1])

    filepath = (url.split('?')[0])

    print(filepath)

    splitfolders = filepath.split('/')

    for i in range(len(splitfolders)):
        print(splitfolders[i].find('.'))
        if splitfolders[i].find('.')  == -1:
            try:
                os.mkdir(splitfolders[i])
            except Exception:
                print(f'folder {splitfolders[i]} already exists')
            try:
                os.chdir(splitfolders[i])
            except Exception as e:
                print(e)
                print(splitfolders[i])
                print(oldurl)
                exit()
        else:
            with open(splitfolders[i], 'wb') as f:
                f.write(requests.get(gameurl+url).content)
    
    #http://127.0.0.1:5500/games/rainbowobby/game/files/assets/152113897/1/jetpack.mp3?t=c785f5a3bcd1a2f13c14ff79591fd61c

    os.chdir(firstdir)