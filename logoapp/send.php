<?php
require('set_db.php');
$rand_line_array = mysqli_query($link, "SELECT * FROM `line` ORDER BY RAND()");
$rand_dot =  mysqli_fetch_array(mysqli_query($link, "SELECT * FROM `dot` ORDER BY RAND()"));//ランダム順用SQL
$rand_line = mysqli_fetch_array($rand_line_array);//ランダム順用SQL
/*
while(true){
  $rand_line = mysqli_fetch_array($rand_line_array);//ランダム順用SQL
  if(!file_exists("logoapp/upload/dot/$rand_line[ID].gif")){
    continue;
  }else{
    break;
  }
}
*/
$content =<<<HTML
<!DOCTYPE html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
<link rel="shortcut icon" href="../img/favicon16.ico">
<link rel="stylesheet" href="../css/style.css">
<title>はこだてみらい館・はこだてキッズプラザ 告知サイト</title>

<h2>送信が完了しました。</h2>
<div class="logoApp_send">
  <p>送信していただいたうごくロゴは<br>
    施設オープン時のイベントでの使用や<br>
    ウェブサイト上での公開を予定しています。<br>
    期待してお待ちください。
  </p>

  <div class = "guide_logoApp">
    <a href = "../logoapp/line_index.html">
      <div class = "guide_logoApp_future">
        <img src = "upload/line/$rand_line[ID].gif" alt = "はこだてみらい館のうごくロゴをつくる">
        <p>はこだてみらい館の<br>
          うごくロゴをつくる</p>
      </div>
    </a>
    <a href = "../logoapp/dot_index.html">
      <div class = "guide_logoApp_kids">
        <img src = "upload/dot/$rand_dot[ID].gif" alt = "はこだてキッズプラザのうごくロゴをつくる">
        <p>はこだてキッズプラザの<br>
          うごくロゴをつくる</p>
      </div>
    </a>
  </div>
  <a href = "../">
    <p>トップページに戻る</p>
  </a>
</div>

<footer>
  <div class="footer_inner">
    <a href="https://www.facebook.com/hakodatemiraiproject/" target="_blank"><img src="../img/sns_facebook.png" alt="公式facebook" class="footer_snsButton"></a>
    <p class="footer_text">〒040-0063函館市若松町20番1号 キラリス函館</p>
    <p class="footer_text">TEL : 0138-23-1131（NAアーバンデベロップメント）</p>
    <p class="footer_text">E-Mail : info@<span class="contact-spamBlock">spamblock</span>hakodate-miraiproject.jp</p>
    <p class="footer_text-copyright">©2016 Hakodate Mirai Project</p>
  </div>
</footer>
HTML;

echo $content;
exit();
