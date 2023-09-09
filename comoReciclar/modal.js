window.onkeydown = function (event) {
    if (event.keyCode === 27) {
        if (document.querySelector('.modal').style.display === 'flex') closeModal()
    }
};

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const closeModal = () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';

    const titulo = document.getElementById("titulo");
    const paragrafo = document.getElementById("paragrafo");
    const foto = document.getElementById("foto");

    titulo.innerHTML = ""
    paragrafo.innerHTML = ""
    foto.src = ""
}

const card = () => {/*aqui vai ficar a automatização do card*/ }

const modal = async (id) => {

    const site = new XMLHttpRequest();

    site.addEventListener("load", function () {
        if (site.status === 200) { // Verificar se a solicitação foi bem-sucedida (status 200 OK)
            const dados = JSON.parse(site.responseText);

            const titulo = document.getElementById("titulo");
            const paragrafo = document.getElementById("paragrafo");
            const foto = document.getElementById("foto");

            titulo.innerHTML = dados.conteudo.titulo[id]
            paragrafo.innerHTML = dados.conteudo.texto[id]
            foto.src = dados.conteudo.img[id]
        } else {
            console.error("Erro ao carregar o arquivo JSON");
        }
    });

    site.open("GET", 'comoReciclar/comoReciclar.json');
    site.send();

    await delay(155);

    const modal = document.querySelector('.modal');
    modal.style.display = 'flex';
}