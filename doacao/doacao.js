function mudarImagem() {
    let radios = document.getElementsByName('radio');
    let imagem = document.getElementById('imagemExibida');

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            switch (radios[i].value) {
                case 'imagem1':
                    imagem.src = 'img/lindo.jpg';
                    break;
                case 'imagem2':
                    imagem.src = 'img/qrcode2.png';
                    break;
                case 'imagem3':
                    imagem.src = 'img/sergio.jpg';
                    break;
                default:
                    break;
            }
        }
    }
}
