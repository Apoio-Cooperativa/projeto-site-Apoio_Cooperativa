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


if ($operacao === 'login') {
    $email = $_POST['l'];
    $senha = $_POST['s'];

    // Consulta para verificar o login
    $sql = "SELECT * FROM tb03_usuario WHERE tb03_email = '$email' AND tb03_senha = '$senha' AND tb03_tipo = 0";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Login bem-sucedido
        $usuario = $result->fetch_assoc();
        $data = array("resultado" => "Login bem-sucedido", "usuario" => $usuario);
    } else {
        // Credenciais inválidas
        $data = array("resultado" => "Credenciais inválidas");
    }

    echo json_encode($data);
} elseif ($operacao === 'cad') {

} elseif ($operacao === 'select') {
    // Consulta SELECT
    $sql = "SELECT tb04_id AS id, tb07_nome AS bairro, tb04_horario AS hora, tb06_nome AS semana
    FROM tb04_informacoes
    JOIN tb06_dias_semana ON tb04_dias_semana = tb06_id
    JOIN tb07_bairros ON tb04_bairros = tb07_id
    ORDER BY tb07_nome ASC 
    /*LIMIT 6*/;";
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
} elseif ($operacao === 'insert') {
    $nome = $_POST['nome'];
    $hora = $_POST['hour'];
    $dia = $_POST['dia'];

    // Inserir o bairro na tabela tb07_bairros
    $sql = "INSERT INTO tb07_bairros (tb07_nome) VALUES ('$nome')";
    if ($conn->query($sql) === TRUE) {
        // Obter o ID do bairro recém-inserido
        $bairroId = $conn->insert_id;

        // Inserir os dados na tabela tb04_informacoes
        $sql = "INSERT INTO tb04_informacoes (tb04_horario, tb04_dias_semana, tb04_bairros) VALUES ('$hora', '$dia', '$bairroId')";
        if ($conn->query($sql) === TRUE) {
            $data = array("resultado" => "Inserção realizada com sucesso");
        } else {
            $data = array("resultado" => "Erro na inserção: " . $conn->error);
        }
    } else {
        $data = array("resultado" => "Erro na inserção do bairro: " . $conn->error);
    }

    echo json_encode($data);

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
} elseif ($operacao === 'delete') {
    $id = $_POST['id'];

    $sql = "DELETE FROM tb04_informacoes WHERE tb04_id = '$id';";

    if ($conn->query($sql) === TRUE) {
        $data = array("resultado" => "Exclusão realizada com sucesso");
    } else {
        $data = array("resultado" => "Erro na exclusão: " . $conn->error);
    }
    echo json_encode($data);
} else {
    echo json_encode(array("erro" => "Operação não reconhecida"));
}

// Fecha a conexão
$conn->close();
?>