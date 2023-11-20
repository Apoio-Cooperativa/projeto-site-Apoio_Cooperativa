let isAdm = true;

const delay = async (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === "" ? 'horarios' : hash.replace('#', '');

const renderPage = async () => {
    const page = validateHash(window.location.hash);
    switch (page) {
        case ("doacoes"): doacao(); break
        case ("horarios"): horarios(); break;
        case ("usuarios"): user(); break
        default: /* lost(); */ horarios();
    }
    //await goUp(100)
}

const verif = () => {
    renderPage()
    init()
}

const paineladm = async () => {
    const url = "painelAdm/admPainel.html",
        body = document.getElementById("painel_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const user = () => {
    const url = "cadastroAdm/cadastroAdm.html",
        body = document.getElementById("content_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    uncheckBar();
}

const horarios = async () => {
    const url = "horariosAdm/horariosAdm.html",
        body = document.getElementById("content_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    await delay(350)
    if (tbIsRead) { await read(); tbIsRead = false }
    else { tables(json); }

    uncheckBar();
}

const doacao = () => {
    const url = "doacaoAdm/doacaoAdm.html",
        body = document.getElementById("content_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    uncheckBar();
}

const uncheckBar = () => {
    try {
        const check = document.getElementById("toogle");
        check.checked = false;
    }
    catch { }
}

const voltar = async () => {
    await delay(100)
    window.location.hash = "#horarios";
}

const goUp = async (t) => {
    await delay(t);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//Seta:

const verificarPosicaoRolagem = () => {
    const setaAoTopo = document.getElementById('topo');
    const limiteExibicao = 0; // Define a altura da página em pixels para mostrar a seta

    if (window.scrollY > limiteExibicao) {
        setaAoTopo.style.opacity = '1'; // Mostra a seta suavemente
        setaAoTopo.style.pointerEvents = 'auto'; // Ative a capacidade de clique quando visível
    } else {
        setaAoTopo.style.opacity = '0'; // Oculta a seta suavemente
        setaAoTopo.style.pointerEvents = 'none'; // Desative a capacidade de clique quando invisível
    }
    setaAoTopo.addEventListener('click', () => {
        goUp(0);
    });
}

window.addEventListener('scroll', verificarPosicaoRolagem);