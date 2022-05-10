function showBundeslaenderHTML(element) {
    return `
    <a href="${element['url']}" class="bundeslaender-box">
    <div class="bundeslaender-spans">
        <span>${element['name']}</span>
        <span class="population">${element['population']} Millionen</span>
    </div>
    </a>
    `
}