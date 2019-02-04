

function init(){
    const word = window.prompt('Get a word to start the game').toLowerCase();
    const matches = new Array(word.length).fill('_');
    let fails = 0;

    function onkeypress (event) {
        let finded = false;
        for (let i=0; i<word.length; i++) {
            if (event.key === word.charAt(i)) {
                matches[i] = event.key;
                finded = true;
            }
        }
        if (!finded) {
            fails++;
            if (fails === 10) {
                alert ('Your prisioner is dead');  
                document.body.onkeypress = null;
            }
        }

        document.getElementById('word').innerText = matches.join(' ');
        document.getElementById('img').setAttribute('src', fails + '.png');
    }
    document.getElementById('word').innerText = matches.join(' ');
    document.body.onkeypress = onkeypress;
}

document.body.onload = init;