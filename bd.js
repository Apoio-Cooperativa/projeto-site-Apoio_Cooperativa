let json = [], json2 = [], tbIsRead = true,
    idUpdate, crud;

const read = async () => {
    crud = 'select'
    $(document).ready(function () {
        $.ajax({
            url: '../bd.php',
            type: 'POST',
            data: { operacao: crud },
            dataType: 'json',
            success: function (data) {
                json = data;
                tables(data);
            },
            error: function (xhr, status, error) {
                console.error(status + ': ' + error);
                console.log('Como não funcionou puxar do banco, está usando a gambiarra')
                gamb();
            }
        });
    });
}

const update = async (id) => {
    console.log(id)
    crud = 'update';
    let idUpdate = 100, horaUpdate = '01:00', diaUpdate = 5;
    $(document).ready(function () {
        $.ajax({
            url: '../bd.php',
            type: 'POST',
            data: { operacao: crud, id: idUpdate, hour: horaUpdate, dia: diaUpdate },
            dataType: 'json',
            success: function (data) {
                console.log(data); // Manipule a resposta do PHP, se necessário
            },
            error: function (xhr, status, error) {
                console.error(status + ': ' + error);
            }
        });
    });
}

// const create = async () =>{}

function gamb() {
    document.getElementById("tables").innerHTML = `<div class="table_horarios_row"><div class="table_horarios_cell">
    <input type="button" value="Editar" onclick="edit(0, 4)"><table>
        <caption>Água Espraiada</caption>
        <thead>
            <tr>
                <th>Dia da Semana</th>
                <th>Horários</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Segunda-feira</td>
                <td>07:00</td>
            </tr>
        </tbody>
        
    </table>
    </div><div class="table_horarios_cell">
    <input type="button" value="Editar" onclick="edit(1, 5)"><table>
        <caption>Água Verde</caption>
        <thead>
            <tr>
                <th>Dia da Semana</th>
                <th>Horários</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Quarta-feira</td>
                <td>18:00</td>
            </tr>
        </tbody>
        
    </table>
    </div><div class="table_horarios_cell">
    <input type="button" value="Editar" onclick="edit(2, 6)"><table>
        <caption>Alto da Floresta</caption>
        <thead>
            <tr>
                <th>Dia da Semana</th>
                <th>Horários</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sexta-feira</td>
                <td>07:00</td>
            </tr>
        </tbody>
        
    </table>
    </div></div><div class="table_horarios_row"><div class="table_horarios_cell">
    <input type="button" value="Editar" onclick="edit(3, 2)"><table>
        <caption>Alvinópolis</caption>
        <thead>
            <tr>
                <th>Dia da Semana</th>
                <th>Horários</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Terça-feira</td>
                <td>07:00</td>
            </tr>
        </tbody>
        
    </table>
    </div><div class="table_horarios_cell">
    <input type="button" value="Editar" onclick="edit(4, 7)"><table>
        <caption>Alvinópolis II </caption>
        <thead>
            <tr>
                <th>Dia da Semana</th>
                <th>Horários</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sábado</td>
                <td>07:00</td>
            </tr>
        </tbody>
        
    </table>
    </div><div class="table_horarios_cell">
    <input type="button" value="Editar" onclick="edit(5, 8)"><table>
        <caption>Atibaia Jardim</caption>
        <thead>
            <tr>
                <th>Dia da Semana</th>
                <th>Horários</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Terça-feira</td>
                <td>07:00</td>
            </tr>
        </tbody>
        
    </table>
    </div></div>`;
}