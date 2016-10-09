<?php
//echo "database setup...<br>";
$url = "mysql1501.xserver.jp";
$user = "miraiproject_usr";
$pass = "9x2LB7ekf6";
$db = "miraiproject_logoanimation1";

//echo "seting ok.<br>";

$link = mysqli_connect($url, $user, $pass, $db) or die("MySQLへの接続に失敗しました。");
//echo "make link key.<br>";

$sdb = mysqli_select_db($link, $db) or die("データベースの選択に失敗しました。");
//echo "make select key.<br>";

//echo "database ready<br><br>";
