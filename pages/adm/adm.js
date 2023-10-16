const adm = async () => {
    const url = "admPainel.html",
        body = document.getElementById("corpo_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}