<?php
header('Content-Type: application/json');

$data = file_get_contents('dischi.json');
echo $data;
?>