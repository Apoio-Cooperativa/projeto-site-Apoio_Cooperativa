let url = '';

const formatarMoeda = (valor) => {
    const valorFormatado = parseFloat(valor).toFixed(2);
    return `R$ ${valorFormatado.replace('.', ',')}`;
}

const confirm = (valor) => {
    const cash = formatarMoeda(valor);
    const vlr = document.getElementById("valor-cash");
    const imagem = document.getElementById("image");
    const msg = document.getElementById("msg-verificacao");
    const btn = document.getElementById('copy');

    imagem.src = "";
    vlr.innerHTML = cash;
    msg.style.display = "flex";

    btn.style.display = "none"; url = '';
}

const qrcode = (cond) => {
    const msg = document.getElementById("msg-verificacao");
    const radios = document.getElementsByName('radio');
    const imagem = document.getElementById('image');
    const btn = document.getElementById('copy');
    let qr = 'https://chart.googleapis.com/chart?cht=qr&chl=', qr2 = '&chs=500x500&choe=UTF-8&chld=L|2';

    if (cond) {
        msg.style.display = "none";

        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                switch (i) {
                    case 0: //2
                        url = '00020126330014br.gov.bcb.pix01115268627880352040000530398654042.005802BR5925PAULO HENRIQUE DO AMARAL 6009Sao Paulo62070503***63048910';
                        imagem.src = qr + url + qr2;
                        break;
                    case 1: //5
                        url = '00020126330014br.gov.bcb.pix01115268627880352040000530398654045.005802BR5925PAULO HENRIQUE DO AMARAL 6009Sao Paulo62070503***6304EAE8'
                        imagem.src = qr + url + qr2;
                        break;
                    case 2: //10
                        url = '00020126330014br.gov.bcb.pix011152686278803520400005303986540510.005802BR5925PAULO HENRIQUE DO AMARAL 6009Sao Paulo62070503***63042B6B'
                        imagem.src = qr + url + qr2;
                        break;
                    case 3: //25
                        url = '00020126330014br.gov.bcb.pix011152686278803520400005303986540525.005802BR5925PAULO HENRIQUE DO AMARAL 6009Sao Paulo62070503***63042B1A'
                        imagem.src = qr + url + qr2;
                        break;
                    case 4: //50
                        url = '00020126330014br.gov.bcb.pix011152686278803520400005303986540550.005802BR5925PAULO HENRIQUE DO AMARAL 6009Sao Paulo62070503***6304C0B7'
                        imagem.src = qr + url + qr2;
                        break;
                    default:
                        break;
                }
                btn.style.display = 'flex';
            }
        }
    } else {
        uncheck();
    }
}

const uncheck = () => {
    const msg = document.getElementById("msg-verificacao");
    const radios = document.getElementsByName('radio');
    const btn = document.getElementById('copy');

    msg.style.display = "none";

    for (let i = 0; i < radios.length; i++) {
        radios[i].checked = false;
    }

    url = '';  btn.style.display = 'none';
}

const copy = () => {
    if (url === '') return;
    // Selecionar o elemento ou texto que você deseja copiar
    const textToCopy = url;

    // Criar um elemento de área de transferência
    const clipboard = navigator.clipboard;

    clipboard.writeText(textToCopy)
        .then(() => {
            console.log("Pix copiado com sucesso!"); alert("Pix copiado com sucesso!")
        })
        .catch(err => {
            console.error("Erro ao copiar texto:", err);
        });
}

// function createPercentageBar(current, goal, barWidth = 200) {
//     if (goal <= current) {
//         return 'Meta alcançada!';
//     }

//     const percentage = (current / goal) * 100;
//     const bar = document.getElementById('percentageBar');
//     bar.innerHTML = '<div style="background-color: #f3f3f3; border: 1px solid #c3c3c3; width: ' + barWidth + 'px;">' +
//                         '<div style="background-color: #4CAF50; width: ' + Math.round(percentage) + '%;">' +
//                         '</div>' +
//                     '</div>';
// }

// // Exemplo de dados - atualize conforme necessário
// const currentDonation = 500;
// const goalDonation = 1000;

// // Exibir a barra de porcentagem
// createPercentageBar(currentDonation, goalDonation);