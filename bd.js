let json = [];
let tbIsRead = true;

const read = async () => {
    $(document).ready(function () {
        $.ajax({
            url: '../bd.php',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                json = data;
                tables(data);
            },
            error: function (xhr, status, error) {
                console.error(status + ': ' + error);
                gamb();
            }
        });
    });
}

function gamb() {
    document.getElementById("tables").innerHTML = `<div class="table_horarios_row">
    <div class="table_horarios_cell">
        <table>
            <caption>Alvinópolis</caption>
            <thead>
                <tr>
                    <th>Dia da Semana</th>
                    <th>Horários</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        terça-feira
                    </td>
                    <td>
                        07:00
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="table_horarios_cell">
        <table>
            <caption>Alvinópolis II</caption>
            <thead>
                <tr>
                    <th>Dia da Semana</th>
                    <th>Horários</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        sábado
                    </td>
                    <td>
                        07:00
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="table_horarios_cell">
        <table>
            <caption>Atibaia Jardim</caption>
            <thead>
                <tr>
                    <th>Dia da Semana</th>
                    <th>Horários</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        terça-feira
                    </td>
                    <td>
                        07:00
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
<div class="table_horarios_row">

    <div class="table_horarios_cell">
        <table>
            <caption>Caetetuba</caption>
            <thead>
                <tr>
                    <th>Dia da Semana</th>
                    <th>Horários</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        segunda-feira
                    </td>
                    <td>
                        18:00
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="table_horarios_cell">
        <table>
            <caption>Jardim Cerejeiras</caption>
            <thead>
                <tr>
                    <th>Dia da Semana</th>
                    <th>Horários</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        segunda-feira
                    </td>
                    <td>
                        18:00
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="table_horarios_cell">
        <table>
            <caption>Parque Arco-Íris</caption>
            <thead>
                <tr>
                    <th>Dia da Semana</th>
                    <th>Horários</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        terça-feira
                    </td>
                    <td>
                        07:00
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>`;
}