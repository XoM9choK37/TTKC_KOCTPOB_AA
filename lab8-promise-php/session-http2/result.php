<?php
    session_start();
    $_SESSION['ans10'] = $_POST['t10'];

    $ans[1] = $_SESSION['ans1'];
    $ans[2] = $_SESSION['ans2'];
    $ans[3] = $_SESSION['ans3'];
    $ans[4] = $_SESSION['ans4'];
    $ans[5] = $_SESSION['ans5'];
    $ans[6] = $_SESSION['ans6'];
    $ans[7] = $_SESSION['ans7'];
    $ans[8] = $_SESSION['ans8'];
    $ans[9] = $_SESSION['ans9'];
    $ans[10] = $_SESSION['ans10'];

    $correct_str = "_3141112213_";

    $counter = 0;

    for ($i = 1; $i <= 10; $i++)
        if ($ans[$i] == $correct_str[$i])
            $counter++;

	echo "<p><h2>Результаты</h2></p>";
	echo "<p>Поздравляем!</p>";
		
    if (0 <= $counter && $counter <= 2)
        echo "<p>$counter / 10 — Вы отчислены!</p>";
    if (3 <= $counter && $counter <= 5)
		echo "<p>$counter / 10 — Вы отправляетесь на пересдачу!</p>";
    if (6 <= $counter && $counter <= 8)
        echo "<p>$counter / 10 — Вы получаете зачёт!</p>";
    if (9 <= $counter && $counter <= 10)
		echo "<p>$counter / 10 — Вы получаете оценку 'Отлично'!</p>";
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тест</title>
</head>
<body>
    <style>
        body {
            background-color: rgb(255, 194, 209);
            font-family: 'consolas', Arial, sans-serif, bold;
        }
    </style>
</body>
</html>
