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
    });
}