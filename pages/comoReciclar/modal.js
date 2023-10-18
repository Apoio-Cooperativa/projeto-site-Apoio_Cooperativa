let idModal = '';

window.onkeydown = function (event) {
    if (event.keyCode === 27 && !idModal == '') {
        if (document.getElementById(`modal-${idModal}`).style.display === 'flex') closeModal();
    }
};

const closeModal = () => {
    const modal = document.getElementById(`modal-${idModal}`);
    triangle(idModal);
    modal.style.display = 'none';
    if (!idModal == '') idModal = '';
}

const modal = async (id) => {
    if (id == idModal) return;
    if (!idModal == '') closeModal();

    const modal = document.getElementById(`modal-${id}`);
    triangle(id);
    modal.style.display = 'flex';
    idModal = id;
}

const triangle = (id) => {
    const card = document.getElementById(`card-${id}`);
    card.classList.toggle("show_triangle");
}