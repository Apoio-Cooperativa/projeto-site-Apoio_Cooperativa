<?php 

$usuario = 'coopsj';
$senha = 'sexonopelo';
$database = 'dbcooperativa';

$mysqli =  new mysqli($host, $usuario, $senha, $database);

if($mysqli->error){
    die("Falha burro tonto: " . $mysqli->error);
}

?>