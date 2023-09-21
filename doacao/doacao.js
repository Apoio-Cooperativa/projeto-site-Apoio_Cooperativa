function mudarImagem() {
    var radios = document.getElementsByName('radio');
    var imagem = document.getElementById('imagemExibida');

    for (var i = 0; i < radios.length; i++) {
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
