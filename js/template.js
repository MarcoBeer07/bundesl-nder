function showBundeslaenderHTML(land) {
    return `
    <a href="${land['url']}"target="_blank" class="bundeslaender-box">
    <div class="bundeslaender-spans">
        <span>${land['name']}</span>
        <span class="population">${(land['population']+'').replace('.',',')} Millionen</span>
    </div>
    </a>
    `
}