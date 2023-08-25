const nav = () => {
    const url = "navbar/navbar.html",
        nav = document.getElementById("nav");

    fetch(url)
        .then(res => res.text())
        .then(text => nav.innerHTML = text)
}

const inicio = () => {
    const url = "inicio.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            body.innerHTML = "<p>Página indisponével</p>"
        });
}

const doacao = () => {
    const url = "doacao.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const horarios = () => {
    const url = "horarios.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const reciclar = () => {
    const url = "comoReciclar.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const foot = () => {
    const url = "footer/footer.html",
        footer = document.getElementById("footer");

    fetch(url)
        .then(res => res.text())
        .then(text => footer.innerHTML = text)
}