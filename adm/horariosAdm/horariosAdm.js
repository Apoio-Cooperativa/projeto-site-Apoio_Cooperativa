function tables(data) {
    const tabelasContainer = document.getElementById("tables");

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
            <input type="button" value="Editar" onclick="edit(${item.id})">
        </table>
        `;

        // Adicione a tabela ao div de tabelas
        tabelaDiv.appendChild(tabela);

        // Se este é o terceiro div de tabela, adicione-o ao container de tabelas
        if (index % 3 === 2) {
            tabelasContainer.appendChild(tabelaDiv);
        }
    });
}

/*modal*/

const edit = (table) => {
    let modal = document.getElementById('myModal');
    console.log(table);
    modal.style.display = 'block';
}

const closeModal = () => {
    let modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

window.addEventListener('click', (event) => {
    let modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
