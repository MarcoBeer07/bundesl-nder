let letters = [];

function init() {
    loadBundeslaender();
}

function loadBundeslaender(filter) {
    let bundesLaender = document.getElementById('bundeslaenderContent');
    bundesLaender.innerHTML = '';
    for (let i = 0; i < bundeslaender.length; i++) {
        const land = bundeslaender[i];
        const firstLetter = land['name'].charAt(0);


        if (!filter || filter == firstLetter) {
            bundesLaender.innerHTML += showBundeslaenderHTML(land);
        }

        if (!letters.includes(firstLetter)) {
            letters.push(firstLetter);
        }

    }
    renderLetters();
}

function renderLetters() {
    let letterbox = document.getElementById('letterBox');
    letterbox.innerHTML = '';
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        letterbox.innerHTML += `<div onclick="setFilter('${letter}')">${letter}</div>`

    }
}

function setFilter(letter) {
    loadBundeslaender(letter);
}