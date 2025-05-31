<?php
    session_start();
    $correct_login = "cleo";
    $correct_password = "password";
    if ($_POST['Submit'] && $_SESSION['cooldown'] != 1) {
        if ($_POST['user_name'] == $correct_login &&
            $_POST['user_pass'] == $correct_password) {
            $_SESSION['logged_user'] = $_POST['user_name'];
            header("Location: secretplace.php");
            exit();
        } else {
            $_SESSION['attempts']++;
            header("Location: index.php");
            exit();
        }
    } else if ($_SESSION['cooldown'] == 1) {
        header("Location: index.php");
        exit();
    }
?>

<html>
    <head>
        <title>Введите пароль</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <p> Вы ввели неверный пароль! </p>
    </body>
</html>
