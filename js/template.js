function showBundeslaenderHTML(element) {
    return `
    <div class="bundeslaender-box">
    <span>${element['name']}</span>
    <span>${element['population']}</span>
    </div>
    `
}