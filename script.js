const delay = async (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

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