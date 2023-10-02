let isAdmin;

const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const goUp = async () => {
    await delay(10);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//Seta:

window.addEventListener('scroll', verificarPosicaoRolagem);
// Função para verificar a posição de rolagem e mostrar/ocultar a seta
function verificarPosicaoRolagem() {
    const setaAoTopo = document.querySelector('.seta-ao-topo');
    const limiteExibicao = 0; // Define a altura da página em pixels para mostrar a seta

    if (window.scrollY > limiteExibicao) {
        setaAoTopo.style.opacity = '1'; // Mostra a seta suavemente
        setaAoTopo.style.pointerEvents = 'auto'; // Ative a capacidade de clique quando visível
    } else {
        setaAoTopo.style.opacity = '0'; // Oculta a seta suavemente
        setaAoTopo.style.pointerEvents = 'none'; // Desative a capacidade de clique quando invisível
    }
    setaAoTopo.addEventListener('click', () => {
        goUp();
    });
}