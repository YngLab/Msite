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

<h2 class="logoApp_h2">送信が完了しました。</h2>
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

<div class = "wrap">
  <footer>
    <img src = "/images/common/pagetop.png" class = "pagetop move-page-top" alt = "ページトップに戻る">
    <div class = "foot">
      <div class ="footerLinks">
        <a href = "member.html" class="links">メンバー</a>
        <a href = "notice.html" class="links">お知らせ</a>
        <a href = "recruit.html" class="links">求人情報</a>
        <a href = "FAQ.html" class="links">よくあるご質問</a>
        <a href = "relatedlinks.html" class="links">関連リンク</a>
        <a href = "sitemap.html" class="links">サイトマップ</a>
        <a href = "sitepolicy.html" class="links">サイトポリシー</a>
      </div>
      <div class = "SNSbutton">
        <a href = "https://www.facebook.com/hakodatemiraiproject/" target="_blank">
          <img src = "/images/common/fb.png" alt="公式Facebook" class = "SNS">
        </a>
        <!-- <a href = "https://www.instagram.com/instagramjapan/?hl=ja">
          <img src = "images/common/ig.png" alt="Instagram" class = "SNS">
        </a> -->
      </div>
      <div class = "copyright">
        <p>@2016 Hakodate Mirai Project</p>
      </div>
    </div>
  </footer>
  <div class="overlay"></div>
</div>
<div id="drawer">
  <!-- ドロワー部分 -->
  <div class = "sp_language">
    <p><a href = "#">English</p></a>
  </div>
  <div class = "navBox">
    <ul class = "gNav_sp">
      <a href = "index.html"><li>ホーム</li></a>
      <a href = "concept.html"><li>コンセプト</li></a>
      <a href = "event.html"><li>イベント</li></a>
      <a href = "HMP.html"><li>みらいプロジェクト</li></a>
      <a href = "FCH.html"><li>はこだてみらい館</li></a>
      <a href = "KPH.html"><li>はこだてキッズプラザ</li></a>
    </ul>
    <ul class = "pNav_sp">
      <a href = "access.html"><li>アクセス</li></a>
      <a href = "contact.html"><li>お問い合わせ</li></a>
    </ul>
  </div>
</div>
HTML;

echo $content;
exit();
