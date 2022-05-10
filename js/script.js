function init() {
    loadBundeslaender();
}

function loadBundeslaender() {
    let bundesLaender = document.getElementById('bundeslaenderContent');
    for (let i = 0; i < bundeslaender.length; i++) {
        const element = bundeslaender[i];
        bundesLaender.innerHTML += showBundeslaenderHTML(element);
    }
}