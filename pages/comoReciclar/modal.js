let idModal;

window.onkeydown = function (event) {
    if (event.keyCode === 27) {
        if (document.getElementById(`modal-${idModal}`).style.display === 'flex') closeModal()
    }
};

const closeModal = () => {
    const modal = document.getElementById(`modal-${idModal}`);
    modal.style.display = 'none';
}

const modal = async (id) => {
    const modal = document.getElementById(`modal-${id + 1}`);
    modal.style.display = 'flex';

    idModal = id + 1;
}