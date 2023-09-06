let id;

const verif = () => {
    if (sessionStorage.getItem('reloaded')) {
        switch (valor) {
            case ("inicio"): inicio(); break
            case ("reciclar"): reciclar(); break
            case ("doacao"): doacao(); break
            case ("horarios"): horarios(); break
            //case ("adm"): adm(); break
            default: alert("tenho que programar ainda!"); inicio()
        }
    } else inicio()
    sessionStorage.setItem('reloaded', 'true');
}

const nav = () => {
    const url = "navbar/navbar.html",
        nav = document.getElementById("nav");

    fetch(url)
        .then(res => res.text())
        .then(text => nav.innerHTML = text)
}

const inicio = () => {
    const url = "inicio/inicio.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            body.innerHTML = "<p>Página indisponível</p>"
        });

    id = "inicio";
}

const doacao = () => {
    const url = "doacao/doacao.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    id = "doacao";
}

const horarios = () => {
    const url = "horarios/horarios.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    id = "horarios"
}

const reciclar = () => {
    const url = "comoReciclar/comoReciclar.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    id = "reciclar";
}

const foot = () => {
    const url = "footer/footer.html",
        footer = document.getElementById("footer");

    fetch(url)
        .then(res => res.text())
        .then(text => footer.innerHTML = text)
}