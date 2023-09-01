// Função para abrir o modal
function openModal(title, text, image) {
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalText = modal.querySelector('.modal-text');
    const modalImage = modal.querySelector('.modal-image');

    modalTitle.textContent = title;
    modalText.textContent = text;
    modalImage.src = image;

    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

// Adiciona ouvintes de eventos aos botões e cartões
function modal () {
    const modalTriggers = document.querySelectorAll('.modal-trigger');
    const cards = document.querySelectorAll('.card');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const card = this.closest('.card');
            const title = card.querySelector('h2').textContent;
            const text = card.querySelector('p').textContent;
            openModal(title, text, 'coloque_aqui_o_caminho_da_imagem.jpg');
        });
    });

    const modalCloseButton = document.querySelector('.modal-close');
    modalCloseButton.addEventListener('click', closeModal);

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            card.style.backgroundColor = '#ddd';
        });

        card.addEventListener('mouseleave', function () {
            card.style.backgroundColor = '#f7f7f7';
        });
    });
}