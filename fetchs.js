let valor = sessionStorage.getItem("id");

const verif = () => {
    if (sessionStorage.getItem('reloaded')) {
        alert(valor)
        if (typeof window[valor] === 'function') {
            window[functionName](); // Chama a função com o nome armazenado em 'functionName'
          } else {
            console.log('A função não existe.');
          }
    }
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
    const url = "inicio.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            body.innerHTML = "<p>Página indisponével</p>"
        });
    sessionStorage.setItem("id", "inicio");
}

const doacao = () => {
    alert("aaaaaaa")
    const url = "doacao.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    sessionStorage.setItem("id", "doacao");
}

const horarios = () => {
    const url = "horarios.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    sessionStorage.setItem("id", "horarios");
}

const reciclar = () => {
    const url = "comoReciclar.html",
        body = document.getElementById("corpo");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    sessionStorage.setItem("id", "reciclar");
}

const foot = () => {
    const url = "footer/footer.html",
        footer = document.getElementById("footer");

    fetch(url)
        .then(res => res.text())
        .then(text => footer.innerHTML = text)
}