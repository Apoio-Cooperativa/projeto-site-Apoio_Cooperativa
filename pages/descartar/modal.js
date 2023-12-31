let idModal = '';

window.onkeydown = function (event) {
    if (event.keyCode === 27 && !idModal == '') {
        if (document.getElementById(`modal-${idModal}`).style.display === 'flex') closeModal(true);
    }
};

const closeModal = async (teste) => {
    const modal = document.getElementById(`modal-${idModal}`);
    triangle(idModal);
    modal.style.display = 'none';
    if(teste){goCenter(); }
    if (!idModal == ''){idModal = ''; return}
}

const modal = async (id) => {
    if (id == idModal) { goModal(id); return; }
    if (!idModal == ''){ closeModal(false);}

    const modal = document.getElementById(`modal-${id}`);
    triangle(id);
    modal.style.display = 'flex';
    idModal = id;
    goModal(id)
}

const triangle = (id) => {
    const card = document.getElementById(`card-${id}`);
    card.classList.toggle("show_triangle");
}

const goModal = (id) => {
    const modal = document.getElementById(`modal-${id}`);
    modal.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
    });
}

const goCenter = async () => {
    const corpo = document.getElementById('corpo_index');
    corpo.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}