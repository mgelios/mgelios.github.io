async function JSONFromURL(url) {
    let response = await fetch(url);
    let body = await response.json();
    return body;
}

function JSONFromLocalStorage(name) {
    return JSON.parse(window.localStorage.getItem(name));
}

function getURLParam(name) {
    let params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function renderTemplateWithData(data, templateName, targetElementID) {
    let $ = window.jsrender;
    let tmpl = $.templates("#" + templateName);
    let html = tmpl.render(data);
    document.getElementById(targetElementID).innerHTML = html;
}

function renderTemplateWithDataAndApplyMasonry(data, templateName, targetElementID) {
    let $ = window.jsrender;
    let tmpl = $.templates("#" + templateName);
    let html = tmpl.render(data);
    document.getElementById(targetElementID).innerHTML = html;
    new Masonry("#" + targetElementID);
}

function updateCategoryPageWithName(name) {
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById("home-link-name").innerText = capitalizedName;
    document.title = capitalizedName;
}