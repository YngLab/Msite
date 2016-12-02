<?php
session_start();

$add_header = "From: info@hakodate-miraiproject.jp\n";//送信者の情報(メールヘッダー)
$add_header .= "Reply-to: info@hakodate-miraiproject.jp\n";//送信者の情報(メールヘッダー)
$add_header .= "X-Mailer: PHP/". phpversion();

if($_SESSION['id'] == "0"){ $about = "はこだてみらい館 先行体験会";
}else if($_SESSION['id'] == "1"){ $about = "はこだてキッズプラザ 先行体験会";
}else if($_SESSION['id'] == "2"){ $about = "オドロクチカラ トークセッション";
}else if($_SESSION['id'] == "3"){ $about = "井上涼さんアニメーションワークショップ";
}else if($_SESSION['id'] == "4"){ $about = "Whiteaフリースタイルパフォーマンス";
}else if($_SESSION['id'] == "5"){ $about = "親子ワークショップ「光を感じよう！~見える？見えない？光と色~」";
}else if($_SESSION['id'] == "6"){ $about = "FabLabワークショップ";
}else if($_SESSION['id'] == "7"){ $about = "せかいをはかるワークショップ";
}else if($_SESSION['id'] == "8"){ $about = "おもしろ写真deアニメーション";
}else if($_SESSION['id'] == "10"){ $about = "「空気を感じよう！」〜大気圧ってスゴい〜";
}else if($_SESSION['id'] == "14"){ $about = "親子ワークショップ「レンズのしくみを調べよう！」";
}else if($_SESSION['id'] == "18"){ $about = "キャンパスワークショップ「新聞紙で遊ぼう！～ヒーローに変身～ 」";
}

if(isset($_SESSION['old'])){//年齢入力があればメールに入れる
  $old = "
ご年齢：
".$_SESSION['old']."
";
}else{
  $old = "";
}

if(isset($_SESSION['tel'])){//電話番号入力あればメールに入れる
  $tel = "
お電話番号：
".$_SESSION['tel']."
";
}else{
  $tel = "";
}

if($_SESSION['id'] == 0){$date = '
日時：10月12日(水)　15:00-18:00
';
}else if($_SESSION['id'] == 1){$date = '
日時：10月12日(水)　15:00-18:00
';
}else if($_SESSION['id'] == 2){$date = '
日時：10月15日(土)　10:30-12:00
';
}else if($_SESSION['id'] == 3){$date = '
日時：10月16日(日)　10:30-16:30
';
}else if($_SESSION['id'] == 4){$date = '
日時：10月16日(日)　13:00-14:00
';
}else if($_SESSION['id'] == 5){$date = '
日時：10月23日(日) 10:30-12:30(1回目)14:00-16:00(2回目)
';
}else if($_SESSION['id'] == 6){$date = '
日時：10月29日(土) 10:00-15:00 ハロウィンキャンドル 10月30日(日) 10:00-15:00 ボトルキャップ
';
}else if($_SESSION['id'] == 7){$date = '
日時：10月29日(土) 30日(日)10:30-12:30(1回目) 14:00-16:00(2回目)
';
}else if($_SESSION['id'] == 8){
  if($_SESSION['date'] == 1){$date = '
日時：11月12日(土) 10:30-12:30(1回目)
';}else if($_SESSION['date'] == 2){$date = '
日時：11月12日(土) 14:00-16:00(2回目)
';}else if($_SESSION['date'] == 3){$date = '
日時：11月13日(日) 10:30-12:30(1回目)
';}else if($_SESSION['date'] == 4){$date = '
日時：11月13日(日) 14:00-16:00(2回目)
';}
}else if($_SESSION['id'] == 10){
  if($_SESSION['date'] == 1){$date = '
日時：11月27日(日) 10:30-12:30(1回目)
';}else if($_SESSION['date'] == 2){$date = '
日時：11月27日(日) 14:00-16:00(2回目)
';}
}else if($_SESSION['id'] == 14){
  if($_SESSION['date'] == 1){$date = '
日時：12月25日(日) 10:30-12:30(1回目)
';}else if($_SESSION['date'] == 2){$date = '
日時：12月25日(日) 14:00-16:00(2回目)
';}
}else if($_SESSION['id'] == 18){$date = '
日時：12月3日(土) 13:00-14:30
';
}

if($_SESSION['id'] == 0){$place = 'はこだてみらい館';
}else if($_SESSION['id'] == 1){$place = 'はこだてキッズプラザ';
}else if($_SESSION['id'] == 2){$place = 'はこだてみらい館';
}else if($_SESSION['id'] == 3){$place = 'はこだてみらい館';
}else if($_SESSION['id'] == 4){$place = 'はこだてキッズプラザ';
}else if($_SESSION['id'] == 5){$place = 'はこだてみらい館';
}else if($_SESSION['id'] == 6){$place = 'はこだてみらい館';
}else if($_SESSION['id'] == 7){$place = 'はこだてみらい館';
}else if($_SESSION['id'] == 8){$place = 'はこだてみらい館';
}else if($_SESSION['id'] == 10){$place = 'はこだてみらい館';
}else if($_SESSION['id'] == 14){$place = 'はこだてみらい館';
}else if($_SESSION['id'] == 18){$place = 'はこだてみらい館';
}

if($place == 'はこだてみらい館'){
  $f = '3F';
}else{
  $f = '4F';
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
{$tel}

お問い合わせ内容：
{$_SESSION['comment']}

内容確認後、担当者より折り返しご連絡をさせていただきます。

-----
{$place}
〒040-0063函館市若松町20番1号 キラリス函館{$f}
TEL : 0138-26-6000
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
{$tel}

お問い合わせ内容：
{$_SESSION['comment']}

----------
【自動追加】内容確認後、処理をお願いします。
HTML;

// echo $return;

mb_language("ja");
mb_internal_encoding("UTF-8");

if(mb_send_mail($_SESSION['email'],"イベントを申し込み頂きありがとうございます。",$return,$add_header)&&mb_send_mail('info@hakodate-miraiproject.jp',"【イベント申込】".$about,$message,$add_header)){
header('Location: recieve_join.html');
session_destroy();
}else{
  echo "error";
  session_destroy();
}
?>
