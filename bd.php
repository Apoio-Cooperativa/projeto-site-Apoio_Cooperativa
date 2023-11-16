<?php
// Parâmetros de conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbcooperativa";

/* $servername = "db4free.net";
$username = "coopsj";
$password = "@tcc2023";
$dbname = "dbcooperativa"; */

/* $servername = "carmine";
$username = "aluno";
$password = "etec@147";
$dbname = "dbcooperativa"; */

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

$operacao = $_POST['operacao'];

// Consulta SELECT
if ($operacao === 'select') {
    // Consulta SELECT
    $sql = "SELECT tb04_id AS id, tb07_nome AS bairro, tb04_horario AS hora, tb06_nome AS semana
    FROM tb04_informacoes
    JOIN tb06_dias_semana ON tb04_dias_semana = tb06_id
    JOIN tb07_bairros ON tb04_bairros = tb07_id
    ORDER BY tb07_nome ASC 
    LIMIT 6;";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Retorne os dados da consulta como um array
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data); // Retorna os dados em formato JSON
    } else {
        // Se não houver resultados, retorne um JSON vazio
        echo json_encode(array());
    }
} elseif ($operacao === 'update') {
    // Operação de UPDATE
    $id = $_POST['id'];
    $hora = $_POST['hour'];
    $dia = $_POST['dia'];
    // Execute a operação de UPDATE com base no novo valor
    // Substitua este bloco pela lógica do UPDATE apropriada
    $sql = "UPDATE tb04_informacoes 
    SET tb04_dias_semana = '$dia', tb04_horario = '$hora'
    WHERE tb04_id = '$id';";
    if ($conn->query($sql) === TRUE) {
        $data = array("resultado" => "Atualização realizada com sucesso");
    } else {
        $data = array("resultado" => "Erro na atualização: " . $conn->error);
    }
    echo json_encode($data);
} else {
    echo json_encode(array("erro" => "Operação não reconhecida"));
}

// Fecha a conexão
$conn->close();
?>