let isAdmin;

const setaAoTopo = document.querySelector('.seta-ao-topo');

setaAoTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});