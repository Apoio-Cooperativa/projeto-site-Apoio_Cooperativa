function fetchs() {
    var nav = document.getElementById("nav")
    var navbar = "navbar.html"
    fetch(navbar)
        .then(res => res.text())
        .then(text => nav.innerHTML = text)
}