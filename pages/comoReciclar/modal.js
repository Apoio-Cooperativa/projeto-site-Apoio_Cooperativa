window.onkeydown = function (event) {
    if (event.keyCode === 27) {
        if (document.querySelector('.modal_reciclar').style.display === 'flex') closeModal()
    }
};

const closeModal = () => {
    const modal = document.querySelector('.modal_reciclar');
    modal.style.display = 'none';

    const titulo = document.getElementById("titulo-reciclar");
    const paragrafo = document.getElementById("paragrafo-reciclar");
    const foto = document.getElementById("foto-reciclar");

    titulo.innerHTML = ""
    paragrafo.innerHTML = ""
    foto.src = ""
}

const card = () => {/*aqui vai ficar a automatização do card*/

    const site = new XMLHttpRequest();

    site.addEventListener("load", function () {
        if (site.status === 200) { // Verificar se a solicitação foi bem-sucedida (status 200 OK)
            const dados = JSON.parse(site.responseText);

            const cardRows = [] = document.querySelectorAll(".card_row_reciclar");

            for (let i = 0; i < 2; i++) {
                
            }
            alert(cardRows[0].innerHTML)
            alert(cardRows[1].innerHTML)
            // const cardRow2 = document.getElementById("paragrafo-reciclar");
            // const foto = document.getElementById("foto-reciclar");

            // titulo.innerHTML = dados.conteudo.titulo[id]
            // paragrafo.innerHTML = dados.conteudo.texto[id]
            // foto.src = dados.conteudo.img[id]
        } else {
            console.error("Erro ao carregar o arquivo JSON");
        }
    });

    site.open("GET", 'pages/comoReciclar/comoReciclar.json');
    site.send();

    /* fim */
}


const modal = async (id) => {

    const site = new XMLHttpRequest();

    site.addEventListener("load", function () {
        if (site.status === 200) { // Verificar se a solicitação foi bem-sucedida (status 200 OK)
            const dados = JSON.parse(site.responseText);

            const titulo = document.getElementById("titulo-reciclar");
            const paragrafo = document.getElementById("paragrafo-reciclar");
            const foto = document.getElementById("foto-reciclar");

            titulo.innerHTML = dados.conteudo.titulo[id]
            paragrafo.innerHTML = dados.conteudo.texto[id]
            foto.src = dados.conteudo.img[id]

            const modal = document.querySelector('.modal_reciclar');
            modal.style.display = 'flex';

        } else {
            console.error("Erro ao carregar o arquivo JSON");
        }
    });

    site.open("GET", 'pages/comoReciclar/comoReciclar.json');
    site.send();

    //await delay(160);
}