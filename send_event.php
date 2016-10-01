<?php
session_start();

$add_header = "From: info@hakodate-miraiproject.jp\n";//送信者の情報(メールヘッダー)
$add_header .= "Reply-to: info@hakodate-miraiproject.jp\n";//送信者の情報(メールヘッダー)
$add_header .= "X-Mailer: PHP/". phpversion();

if($_SESSION['id'] == "0"){
  $about = "はこだてみらい館 先行体験会";
}else if($_SESSION['id'] == "1"){
  $about = "はこだてキッズプラザ 先行体験会";
}else if($_SESSION['id'] == "2"){
  $about = "オドロクチカラ トークセッション";
}else if($_SESSION['id'] == "3"){
  $about = "井上涼さんアニメーションワークショップ";
}else if($_SESSION['id'] == "4"){
  $about = "Whiteaフリースタイルパフォーマンス";
}

if(isset($_SESSION['old'])){
  $old = "
ご年齢：
".$_SESSION['old']."
";
}else{
  $old = "";
}

if($_POST[id] == 0){$date = '
日時：10月12日(水)　15:00-18:00
';
}else if($_POST[id] == 1){$date = '
日時：10月12日(水)　15:00-18:00
';
}else if($_POST[id] == 2){$date = '
日時：10月15日(土)　10:30-12:00
';
}else if($_POST[id] == 3){$date = '
日時：10月16日(日)　10:00-16:30
';
}else if($_POST[id] == 4){$date = '
日時：10月16日(日)　13:00-14:00
';
}

$return =<<<HTML
イベントを申し込み頂き、ありがとうございます。

お申し込みイベント：
{$about}
{$date}

お名前：
{$_SESSION['name']}
{$old}
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
イベント申し込み内容は以下の通りです。

お申し込みイベント：
{$about}
{$date}

お名前：
{$_SESSION['name']}
{$old}
E_mail：
{$_SESSION['email']}

お問い合わせ内容：
{$_SESSION['comment']}

内容確認後、処理をお願いします。
HTML;

mb_language("ja");
mb_internal_encoding("UTF-8");

if(mb_send_mail($_SESSION['email'],"【イベント申込】".$about,$return,$add_header)&&mb_send_mail('info@hakodate-miraiproject.jp',"イベントを申し込み頂きありがとうございます。",$message,$add_header)){
header('Location: recieve_contact.html');
session_destroy();
}else{
  echo "error";
  session_destroy();
}
?>