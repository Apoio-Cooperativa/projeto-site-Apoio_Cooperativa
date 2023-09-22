/* const confirm = () => {
    let
} */

const qrcode = () => {
    let radios = document.getElementsByName('radio');
    let imagem = document.getElementById('image');

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            switch (i) {
                case 0:
                    imagem.src = 'img/lindo.jpg';
                    break;
                case 1:
                    imagem.src = 'img/qrcode2.png';
                    break;
                case 2:
                    imagem.src = 'img/sergio.jpg';
                    break;
                default:
                    break;
            }
        }
    }
}