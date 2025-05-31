<?php
    session_start();
    if ($_SESSION['attempts'] && $_SESSION['cooldown'] != 1) {
        $atts = (3 - $_SESSION['attempts']) % 3;
        if ($atts < 0)
            $atts += 3;
        if ($atts == 2)
            echo "Неверный пароль! Осталось $atts попытки до минутной задержки";
        if ($atts == 1)
            echo "Неверный пароль! Осталась $atts попытка до минутной задержки";
        if ($atts == 0) {
            $_SESSION['cooldown'] = 1;
            header("Location: authorize.php");
            exit();
        }
    } else if ($_SESSION['cooldown'] == 1) {
        $_SESSION['cooldown'] = 0;
        echo "a";
        echo "<script type='text/javascript'>
                alert('Подождите минуту перед следующей попыткой входа!');
                document.body.style.display = 'none';
                setTimeout(() => {
                    document.body.style.display = 'block';
                    document.body.innerHTML =
                        document.body.innerHTML.slice(1);
                }, 60000);
            </script>";
    }
?>

<html>
    <head>
        <title>Введите пароль</title>
        <meta charset="utf-8" />
    </head>
    <body>
        <form action="authorize.php" method="post">
            Логин: <input type="text" name="user_name" /><br />
            Пароль: <input type="password" name="user_pass" /><br />
            <input type="submit" name="Submit" />
        </form>
    </body>
</html>
