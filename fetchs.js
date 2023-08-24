const nav = () => {
    const url = "navbar/navbar.html",
        nav = document.getElementById("nav");

    fetch(url)
        .then(res => res.text())
        .then(text => nav.innerHTML = text)
        .catch(error => {
            console.error("Ocorreu um erro:", error);
        });
}

const body = () => {
    const url = "inicio.html",
        nav = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => nav.innerHTML = text)
        .catch(error => {
            console.error("Ocorreu um erro:", error);
        });
}

const foot = () => {

    const url = "footer/footer.html",
        footer = document.getElementById("footer");

    fetch(url)
        .then(res => res.text())
        .then(text => footer.innerHTML = text)
        .catch(error => {
            console.error("Ocorreu um erro:", error);
        });
}