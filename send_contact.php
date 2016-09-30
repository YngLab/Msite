<?php
session_start();

$add_header = "From: info@hakodate-miraiproject.jp\n";//送信者の情報(メールヘッダー)
$add_header .= "Reply-to: info@hakodate-miraiproject.jp\n";//送信者の情報(メールヘッダー)
$add_header .= "X-Mailer: PHP/". phpversion();

if($_SESSION['radio'] == "fch"){
  $about = "はこだてみらい館について";
}else if($_SESSION['radio'] == "hkp"){
  $about = "はこだてキッズプラザについて";
}else if($_SESSION['radio'] == "both"){
  $about = "どちらとも言えないご質問"
}

$return =<<<HTML
お問い合わせありがとうございます。

ご要件：
{$about}

お名前：
{$_SESSION['name']}

E_mail：
{$_SESSION['email']}

お問い合わせ内容：
{$_SESSION['comment']}

内容確認後、担当者より折り返しご連絡をさせていただきます。

-----
はこだてみらいプロジェクト（はこだてみらい館・はこだてキッズプラザ）

〒040-0063函館市若松町20番1号 キラリス函館
TEL : 0138-23-1131(NAアーバンデベロップメント)
E-Mail : info@hakodate-miraiproject.jp
HTML;

$message =<<<HTML
お問い合わせ内容は以下の通りです。

ご要件：
{$about}

お名前：
{$_SESSION['name']}

E_mail：
{$_SESSION['email']}

お問い合わせ内容：
{$_SESSION['comment']}

内容確認後、折り返し連絡をお願いします。
HTML;

mb_language("ja");
mb_internal_encoding("UTF-8");

if(mb_send_mail($_SESSION['email'],"【お問い合わせ】確認メール",$return,$add_header)&&mb_send_mail('info@hakodate-miraiproject.jp',"問い合わせ：" .$about,$message,$add_header)){
header('Location: recieve_contact.html');
session_destroy();
}else{
  echo "error";
  session_destroy();
}
?>