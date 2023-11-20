const tables = (data) => {
    const tabelasContainer = document.getElementById("tables");
    let cont = 0;
    let tabelaDiv; // Variável para armazenar o div de tabelas
    data.forEach(function (item, index) {
        if (index % 3 === 0) {
            // Crie um novo div para cada conjunto de três tabelas
            tabelaDiv = document.createElement("div");
            tabelaDiv.className = "table_horarios_row";
        }

        // Crie a tabela dentro do div
        const tabela = document.createElement("div");
        tabela.className = "table_horarios_cell";
        tabela.innerHTML = `
        <table>
            <caption>${item.bairro}</caption>
            <thead>
                <tr>
                    <th>Dia da Semana</th>
                    <th>Horários</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${item.semana}</td>
                    <td>${item.hora.slice(0, 5)}</td>
                </tr>
            </tbody>
            <i class="fa-regular fa-pen-to-square edit_icon" onclick="edit(${item.id}, '${item.bairro}', '${weekToNumber[item.semana.toLowerCase()]}', '${item.hora.slice(0, 5)}')"></i>
        </table>
        `;

        // Adicione a tabela ao div de tabelas
        tabelaDiv.appendChild(tabela);

        // Se este é o último item do loop, adicione o div ao container de tabelas
        if (index === data.length - 1) {
            tabelasContainer.appendChild(tabelaDiv);
        } else if (index % 3 === 2) {
            // Se este é o terceiro div de tabela, adicione-o ao container de tabelas
            tabelasContainer.appendChild(tabelaDiv);
        }

        idTb = [item.id];
        cont++;
    });
};


const weekToNumber = {
    'domingo': 1,
    'segunda-feira': 2,
    'terça-feira': 3,
    'quarta-feira': 4,
    'quinta-feira': 5,
    'sexta-feira': 6,
    'sábado': 7,
};

/*modal*/

const edit = (id, nome, week, hour) => {
    const modal = document.getElementById('modal'),
        modalScreen = document.getElementById('myModal');

    document.getElementById('bairro').innerText = nome
    document.getElementById('diaSemana').value = week
    document.getElementById('hora').value = hour

    modal.style.display = 'block';
    modalScreen.style.display = 'flex';

    document.getElementById("confirmar").onclick = function () {
        let semana = document.getElementById('diaSemana').value;
        let hora = document.getElementById('hora').value;

        if (semana === week && hora === hour) { return; }
        console.log(semana + " " + hora);

        console.log("O botão foi clicado! " + id + " \nSemana: " + week + " \nHora: " + hour);
        console.log("O botão foi clicado! " + id + " \nSemana: " + semana + " \nHora: " + hora);
        update(id, semana, hora)
    };
    document.getElementById("deletar").onclick = function () {
        decisao = window.confirm(`Deseja realmente apagar o registro de ${nome}?`)
        if (decisao) {
            del(`${id}`)
        } else return;
    }
}

const add = () => {
    const modal = document.getElementById('modal2'),
        modalScreen = document.getElementById('myModal');

    modal.style.display = 'block';
    modalScreen.style.display = 'flex';

    document.getElementById("confirmar-create").onclick = function () {
        let nome = document.getElementById("nome").value
        let sem = document.getElementById("diaSemana2").value
        let hor = document.getElementById("hora2").value

        create(nome, sem, hor);
    }
}

const closeModal = () => {
    let modal = document.getElementById('modal'),
        modalScreen = document.getElementById('myModal'),
        modal2 = document.getElementById('modal2');
    modal.style.display = 'none';
    modalScreen.style.display = 'none';
    modal2.style.display = 'none';
}

window.addEventListener('click', (event) => {
    let modal = document.getElementById('modal'),
        modalScreen = document.getElementById('myModal'),
        modal2 = document.getElementById('modal2');
    if (event.target === modalScreen) {
        modal.style.display = 'none';
        modalScreen.style.display = 'none';
        modal2.style.display = 'none';
    }
});
