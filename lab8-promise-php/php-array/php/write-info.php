<?php
    $name = $_POST["name"];
    $cost = $_POST["cost"];
    $amount = $_POST["amount"];
    $regexp = "#^\d+$#";
    if ($name != "" &&
        preg_match($regexp, $cost) &&
        preg_match($regexp, $amount)) {
        $data = "$name;$cost;$amount\n";
        file_put_contents("../data/data.txt", $data, FILE_APPEND);
    }
    else
        http_response_code(422);
?>
