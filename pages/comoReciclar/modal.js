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

const card = async () => {
    if (window.location.hash !== "#reciclar") return

    const site = new XMLHttpRequest();

    site.addEventListener("load", function () {
        if (site.status === 200) {
            const dados = JSON.parse(site.responseText);
            const cardRows = document.querySelectorAll(".card_row_reciclar");
            const list = dados.card;
            const listSize = list.titulo.length;//8

            let qtdCard = 0; //variavel que conta a posição do card

            for (let i = 0; i < cardRows.length; i++) {//2
                let cardsHTML = '';

                for (let j = 0; j < listSize / 2; j++) {//4
                    if (qtdCard < listSize) {//8
                        cardsHTML += `
                            <div class="card_reciclar">
                                <h2>${list.titulo[qtdCard]}</h2>
                                <p>${list.texto[qtdCard]}</p>
                                <button class="modal-trigger" onclick="modal(${qtdCard})">Ver Detalhes</button>
                            </div>
                        `;
                        qtdCard++;
                    }
                }

                cardRows[i].innerHTML = cardsHTML;
            }
        } else {
            console.error("Erro ao carregar o arquivo JSON");
        }
    });

    site.open("GET", 'pages/comoReciclar/comoReciclar.json');
    site.send();
};
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

const cardIsSet = async () => {
    while (true) {
        if (document.getElementsByClassName('card_container_reciclar')) {
            await delay(100);
            await card();
            break;
        }
    }
}