<?php
    session_start();
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тест</title>
</head>
<body>
    <p><h2>Вопрос 1</h2></p>
    <p>Для вставки изображения в документ HTML используется тег:</p>
    <form action="task2.php" method="post">
        <input type="radio" name="t1" value="1" />
        &ltbody back="image.jpg"&gt
        <br /><br />
        <input type="radio" name="t1" value="2" />
        &lta tgt="image.jpg"&gt
        <br /><br />
        <input type="radio" name="t1" value="3" />
        &ltimg src="image.jpg"&gt
        <br /><br />
        <input type="radio" name="t1" value="4" />
        &ltinput="image.jpg"&gt
        <br /><br />
        <input type="submit" value="Ответить" />
    </form>
    <style>
        body {
            background-color: rgb(255, 194, 209);
            font-family: 'consolas', Arial, sans-serif, bold;
        }
    </style>
</body>
</html>
