onload = () => {
    const url = "navbar/navbar.html",
        url2 = "footer/footer.html";
    var nav = document.getElementById("nav"),
        footer = document.getElementById("footer");

    fetch(url)
        .then(res => res.text())
        .then(text => nav.innerHTML = text)
        .catch(error => {
            console.error("Ocorreu um erro:", error);
        });

    fetch(url2)
        .then(res => res.text())
        .then(text => footer.innerHTML = text)
        .catch(error => {
            console.error("Ocorreu um erro:", error);
        });
}