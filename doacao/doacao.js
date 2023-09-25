const formatarMoeda = (valor) => {
    const valorFormatado = parseFloat(valor).toFixed(2);
    return `R$ ${valorFormatado.replace('.', ',')}`;
}

const confirm = (valor) => {
    const cash = formatarMoeda(valor);
    const vlr = document.getElementById("valor-cash");
    const imagem = document.getElementById("image");
    const msg = document.getElementById("msg-verificacao");

    imagem.src = "";
    vlr.innerHTML = cash;
    msg.style.display = "flex";
}

const qrcode = (cond) => {
    const msg = document.getElementById("msg-verificacao");
    const radios = document.getElementsByName('radio');
    const imagem = document.getElementById('image');

    if (cond) {
        msg.style.display = "none";

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
                    case 3:
                        imagem.src = 'img/lindo.jpg';
                        break;
                    case 4:
                        imagem.src = 'img/qrcode2.png';
                        break;
                    default:
                        break;
                }
            }
        }
    } else {
        uncheck();
    }
}

const uncheck = () => {
    const msg = document.getElementById("msg-verificacao");
    const radios = document.getElementsByName('radio');

    msg.style.display = "none";

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }
}