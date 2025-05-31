<?php
	$fio = $_POST["fio"];
	$to = $_POST["email"];
	$phone = $_POST["phone"];

	mail($to, $fio, $phone);
?>
