const qrcode = (cond) => {
    let msg = document.getElementById("msg");
    let radios = document.getElementsByName('radio');
    let imagem = document.getElementById('image');

    if (cond) {
        msg.innerHTML = null;

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
    else {
        msg.innerHTML = null;
        for (let i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }
    }
}

const confirm = (valor) => {
    let msg = document.getElementById("msg");
    msg.innerHTML = "<p>Deseja doar " + valor + " para a Cooperativa?</p>";
    msg.innerHTML += "<input type='button' value='Sim' onclick='qrcode(true)'>"
        + "<input type='button' value='Não' onclick='qrcode(false)'>";
}