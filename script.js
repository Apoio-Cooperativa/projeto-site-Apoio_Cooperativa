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
        setaAoTopo.style.display = 'block'; // Mostra a seta quando a rolagem é maior que o limite
    } else {
        setaAoTopo.style.display = 'none'; // Oculta a seta quando a rolagem está no topo
    }
    setaAoTopo.addEventListener('click', () => {
        goUp();
    });
}