<?php
if(!$_POST){
  header('Location: ../');
}

session_start();
$_SESSION = $_POST;
?>

<!DOCTYPE html>
<meta charset = "utf-8">
<meta name = "viewport" content="width=device-width,initial-scale=1.0" />  <!-- なんだこの宣言文は -->

<!-- 以下多分テキスト変えたほうがいいよね案件 -->
<meta name = "keywords" content="はこだてみらいプロジェクト,はこだてみらい館,はこだてキッズプラザ,函館,未来館,future center,kids plaza,施設">
<meta name = "description" content="はこだてみらいプロジェクトは、オドロクチカラを育む施設「はこだてみらい館」「はこだてキッズプラザ」を中心に、函館の街の明るい未来につながるアイデアをみんなで実現するプロジェクトです。">
<title>はこだてみらいプロジェクト</title>
<!-- たぶんここまで -->

<link rel = "stylesheet" href="css/style.css">
<link rel = "shortcut icon" href="images/common/hmp.ico">
<script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src = "js/myscript.js"></script>
<div id="wrapper">
  <div id = "header_sp">　</div>
  <div id="header">
      <div id="drawer-toggle">
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </div>
  </div>
  <header>
    <div class = "gHeader">
      <div class = "wrap">
        <div class = "pNav">
          <a href = "http://hakodate-miraiproject.jp/" class="pNavli language">JP | EN</a>
          <a href = "contact.html" class="pNavli rightpNav">お問い合わせ</a>
          <a href = "access.html" class="pNavli rightpNav">アクセス</a>
        </div>
        <div class = "gNav">
          <li class = "gNavli">
            <a href="index.html">ホーム</a>
          </li>
          <li class = "gNavli">
            <a href="concept.html">コンセプト</a>
          </li>
          <li class = "gNavli">
            <a href="event.html">イベント</a>
          </li>
          <li class = "gNavli">
            <a href="FCH.html">はこだてみらい館</a>
          </li>
          <li class = "gNavli">
            <a href="KPH.html">はこだてキッズプラザ</a>
          </li>
          <li class = "gNavli">
            <a href="HMP.html">みらいプロジェクト</a>
          </li>
        </div>
      </div>
    </div>
  </header>
  <div class = "pageTitle">
    <div class = "wrap">
      <p class = "titleText">お問い合わせの確認</p>
    </div>
  </div>
  <div class = "wrap">
  <!-- 以下body -->
    <div class = "autoHeight">
      <div class = "inputForm">
        <form class = "form" action = "send_contact.php" method = "post">
          <div class = "radio">
            <input type = "radio" name = "radio" id = "fch" value = "fch" readonly <?php if($_POST['radio'] == fch)echo "checked"; ?>>
              <label for = "fch"><span class = "radioFont">はこだてみらい館</span></label>
            <input type = "radio" name = "radio" id = "hkp" value = "hkp" readonly <?php if($_POST['radio'] == hkp)echo "checked"; ?>>
              <label for = "hkp"><span class = "radioFont">はこだてキッズプラザ</span></label>
            <input type = "radio" name = "radio" id = "both" value = "both" readonly <?php if($_POST['radio'] == both)echo "checked"; ?>>
              <label for = "both"><span class = "radioFont">どちらとも</span></label>
          </div>
          <table class = "inputBox_conf">
            <tr>
              <th>お名前</th>
              <td>
                <input type="text" name ="name" maxlength = "255" value=<?php echo htmlspecialchars($_POST['name']);?> readonly>
              </td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>
                <input type = "email" name ="email" maxlength = "255" value=<?php echo htmlspecialchars($_POST['email']);?> readonly>
              </td>
            </tr>
            <tr>
              <th class = "textareaLabel">問い合わせ内容</th>
              <td>
                <textarea name = "comment" id = "comment" cols = "40" rows = "5" readonly><?php echo htmlspecialchars($_POST['comment']);?></textarea>
              </td>
            </tr>
            <tr>
              <th>
                <a href = "javascript:history.back();">
                  <div class = "confirm revision">
                    <input type="button" value="訂正" class = "backbutton">
                  </div>
                </a>
              </th>
              <td>
                <div class = "confirm">
                  <input type="submit" value="送信" class = "sendbutton">
                </div>
              </td>
            </tr>
          </table>
        </form>
      </div>
      <div class = "inputForm_sp">
        <form class = "form" action = "send_contact.php" method = "post">
          <div class = "radio">
            <span class = "radioElement">
              <input type = "radio" name = "radio" id = "fch" value = "fch" readonly <?php if($_POST['radio'] == fch)echo "checked"; ?>>
              <label for = "fch">
                <span class = "radioFont">はこだてみらい館</span>
              </label>
            </span>
            <span class = "radioElement">
              <input type = "radio" name = "radio" id = "hkp" value = "hkp" readonly <?php if($_POST['radio'] == hkp)echo "checked"; ?>>
              <label for = "hkp">
                <span class = "radioFont">はこだてキッズプラザ</span>
              </label>
            </span>
            <span class = "radioElement">
              <input type = "radio" name = "radio" id = "both" value = "both" readonly <?php if($_POST['radio'] == both)echo "checked"; ?>>
              <label for = "both">
                <span class = "radioFont">どちらとも</span>
              </label>
            </span>
          </div>
          <div class = "inputBox_conf_sp">
            <p>お名前</p>
            <input type="text" name ="name" maxlength = "255" value=<?php echo htmlspecialchars($_POST['name']);?> readonly>
          </div>
          <div class = "inputBox_conf_sp">
            <p>メールアドレス</p>
            <input type = "email" name ="email" maxlength = "255" value=<?php echo htmlspecialchars($_POST['email']);?> readonly>
          </div>
          <div class = "inputBox_conf_sp_b">
            <p>問い合わせ内容</p>
            <textarea name = "comment" id = "comment" cols = "40" rows = "5" readonly><?php echo htmlspecialchars($_POST['comment']);?></textarea>
          </div>
          <table>
            <tr>
              <th>
                <a href = "javascript:history.back();">
                  <input type="button" value="訂正" class = "rev_button">
                </a>
              </th>
              <td class = "send">
                <input type="submit" value="送信" class = "button">
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  <!-- ここまで -->
  </div>
  <footer>
    <img src = "images/common/pagetop.png" class = "pagetop move-page-top" alt = "ページトップに戻る">
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
          <img src = "images/common/fb.png" alt="公式Facebook" class = "SNS">
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
      <a href = "FCH.html"><li>はこだてみらい館</li></a>
      <a href = "KPH.html"><li>はこだてキッズプラザ</li></a>
      <a href = "HMP.html"><li>みらいプロジェクト</li></a>
    </ul>
    <ul class = "pNav_sp">
      <a href = "access.html"><li>アクセス</li></a>
      <a href = "contact.html"><li>お問い合わせ</li></a>
    </ul>
  </div>
</div>