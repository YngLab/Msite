<?php
if(!$_POST){
  header('Location: ../');
}

session_start();
$_SESSION = $_POST;
?>

<!DOCTYPE html>
<meta charset = "utf-8">
<meta name = "viewport" content="width=device-width,initial-scale=1.0" />
<meta name = "keywords" content="はこだてみらいプロジェクト,はこだてみらい館,はこだてキッズプラザ,函館,未来館,future center,kids plaza,施設">
<meta name = "description" content="オドロクチカラを育む施設「はこだてみらい館」「はこだてキッズプラザ」を通して、函館の街の明るい未来につながるアイデアをみんなで実現するプロジェクトが「はこだてみらいプロジェクト」です。">
<title>はこだてみらいプロジェクト</title>
<link rel = "stylesheet" href="css/style.css">
<link rel = "shortcut icon" href="images/common/hmp.ico">
<script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src = "js/drawer.js"></script>
<script src = "js/pageTop.js"></script>
<!-- pageTitleが存在するページの共通部分 -->
<div class="g_allArea">
  <div id = "header_sp"></div>
  <div class="overlay"></div>
</div>
<!-- 共通部分ここまで -->
<!-- 共通部分ここから -->
<div class = "g_drawerToggle">
  <span class="top"></span>
  <span class="middle"></span>
  <span class="bottom"></span>
</div>
<!-- 共通部分ここまで -->
<!-- 共通部分ここから -->
<header>
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
</header>
<!-- 共通部分ここまで -->
<!-- pageTitleが存在するページの共通部分(titleTextの中身は異なる) -->
<div class = "g_allArea g_allArea-fullWidth">
  <div class="g_pageTitle">
    <p class = "titleText">イベントの申し込み確認</p>
  </div>
  <div class = "overlay"></div>
</div>
<!-- 共通部分ここまで -->
<div class = "g_allArea">
  <div class = "eventabout">
    <!-- ここからイベント情報 -->
    <img src = 
    <?php if($_POST['id'] == 0){echo '"images/sq_event1_FCH.jpg"  alt = "先行体験会"';
    }else if($_POST['id'] == 1){echo '"images/sq_event1_KPH.jpg"  alt = "先行体験会"';
    }else if($_POST['id'] == 2){echo '"images/sq_event2_FCH.jpg" alt = "トークセッション"';
    }else if($_POST['id'] == 3){echo '"images/sq_event3_FCH.jpg"  alt = "井上涼さんアニメーションワークショップ"';
    }else if($_POST['id'] == 4){echo '"images/sq_event2_KPH.jpg"  alt = "Whiteaフリースタイルパフォーマンス"';
    }else if($_POST['id'] == 5){echo '"images/sq_event4_FCH.jpg" alt = "親子ワークショップ「光を感じよう！」"';
    }else if($_POST['id'] == 6){echo '"images/sq_event6_FCH.jpg" alt = "FabLabワークショップ"';
    }else if($_POST['id'] == 7){echo '"images/sq_event7_FCH.jpg" alt = "せかいをはかるワークショップ"';
    }else if($_POST['id'] == 8){echo '"images/event/sq_event8_FCH.gif" alt = "おもしろ写真deアニメーション"';
    }else if($_POST['id'] == 10){echo '"images/event/c-inoue/02.jpg" alt = "「空気を感じよう！」〜大気圧ってスゴい〜"';
    }else if($_POST['id'] == 14){echo '"images/event/sq_event14.jpg" alt = "親子ワークショップ「レンズのしくみを調べよう！」"';
    }else if($_POST['id'] == 18){echo '"images/event/sq_event18.jpg" alt = "キャンパスワークショップ「新聞紙で遊ぼう！～ヒーローに変身～ 」"';
    }else if($_POST['id'] == 19){echo '"images/event/sq_event19.jpg" alt = "第1回　おとなの学び講座「やさいのふしぎ」"';
    }else if($_POST['id'] == 20){echo '"images/event/sq_event8_FCH.gif" alt = "おもしろ写真deアニメーション"';
    }else if($_POST['id'] == 21){echo '"images/event/sq_event21.jpg" alt = "「マッチ棒の構造」"';
    }else if($_POST['id'] == 22){echo '"images/event/sq_event22.jpg" alt = "MESHワークショップ"';
    }
    ?>>
    <p class = "FCHcolor eventabout_title">
    <?php if($_POST['id'] == 0){echo 'はこだてみらい館 先行体験会';
    }else if($_POST['id'] == 1){echo 'はこだてキッズプラザ 先行体験会';
    }else if($_POST['id'] == 2){echo 'オドロクチカラ トークセッション';
    }else if($_POST['id'] == 3){echo '井上涼さんアニメーションワークショップ';
    }else if($_POST['id'] == 4){echo 'Whiteaフリースタイルパフォーマンス';
    }else if($_POST['id'] == 5){echo '親子ワークショップ「光を感じよう！~見える？見えない？光と色~」';
    }else if($_POST['id'] == 6){echo 'FabLabワークショップ';
    }else if($_POST['id'] == 7){echo 'せかいをはかるワークショップ';
    }else if($_POST['id'] == 8){echo 'おもしろ写真deアニメーション';
    }else if($_POST['id'] == 10){echo '「空気を感じよう！」〜大気圧ってスゴい〜';
    }else if($_POST['id'] == 14){echo '親子ワークショップ「レンズのしくみを調べよう！」';
    }else if($_POST['id'] == 18){echo 'キャンパスワークショップ「新聞紙で遊ぼう！～ヒーローに変身～ 」';
    }else if($_POST['id'] == 19){echo '第1回　おとなの学び講座「やさいのふしぎ」';
    }else if($_POST['id'] == 20){echo 'おもしろ写真deアニメーション';
    }else if($_POST['id'] == 21){echo '「マッチ棒の構造」';
    }else if($_POST['id'] == 22){echo 'MESHワークショップ';
    }
    ?></p>
    <div class = "event_point">
      <table>
        <tr>
          <th class = "event_point_cap">日時</th>
          <td class = "event_point_contents">
            <?php if($_POST['id'] == 0){echo '10月12日(水)　15:00-18:00';
            }else if($_POST['id'] == 1){echo '10月12日(水)　15:00-18:00';
            }else if($_POST['id'] == 2){echo '10月15日(土)　10:30-12:00';
            }else if($_POST['id'] == 3){echo '10月16日(日)　10:30-16:30';
            }else if($_POST['id'] == 4){echo '10月16日(日)　13:00-14:00';
            }else if($_POST['id'] == 5){echo '10月23日(日) 10:30-12:30(1回目)14:00-16:00(2回目)';
            }else if($_POST['id'] == 6){echo '10月29日(土) 10:00-15:00 ハロウィンキャンドル<br>10月30日(日) 10:00-15:00 ボトルキャップ';
            }else if($_POST['id'] == 7){echo '10月29日(土) 30日(日)<br>10:30-12:30(1回目) 14:00-16:00(2回目)';
            }else if($_POST['id'] == 8){echo '11月12日(土) 13(日)<br>10:30-12:30(1回目)14:00-16:00(2回目)';
            }else if($_POST['id'] == 10){echo '11月27日(日)<br>10:30-12:30(1回目)14:00-16:00(2回目)';
            }else if($_POST['id'] == 14){echo '12月25日(日)<br>10:30-12:30(1回目)14:00-16:00(2回目)';
            }else if($_POST['id'] == 18){echo '12月3日(土) 13:00-14:30';
            }else if($_POST['id'] == 19){echo '12月23日(金)10:30-12:30';
            }else if($_POST['id'] == 20){echo '12月27日(火) 、29日(木)<br>11:00-12:30（1回目）14:00-15:30（2回目）';
            }else if($_POST['id'] == 20){echo '12月11日(日) 11:00-12:00、14:00-15:00';
            }else if($_POST['id'] == 22){echo '12月10日(土) 10:30-12:30、14:00-16:00';
            }
            ?></td>
        </tr>
        <tr>
          <th class = "event_point_cap">会場</th>
          <td class = "event_point_contents">
            <?php if($_POST['id'] == 0){echo 'はこだてみらい館';
            }else if($_POST['id'] == 1){echo 'はこだてキッズプラザ';
            }else if($_POST['id'] == 2){echo 'はこだてみらい館';
            }else if($_POST['id'] == 3){echo 'はこだてみらい館';
            }else if($_POST['id'] == 4){echo 'はこだてキッズプラザ';
            }else if($_POST['id'] == 5){echo 'はこだてみらい館';
            }else if($_POST['id'] == 6){echo 'はこだてみらい館';
            }else if($_POST['id'] == 7){echo 'はこだてみらい館';
            }else if($_POST['id'] == 8){echo 'はこだてみらい館';
            }else if($_POST['id'] == 10){echo 'はこだてみらい館';
            }else if($_POST['id'] == 14){echo 'はこだてみらい館';
            }else if($_POST['id'] == 18){echo 'はこだてみらい館　シアター';
            }else if($_POST['id'] == 19){echo 'はこだてみらい館　シアター';
            }else if($_POST['id'] == 20){echo 'はこだてみらい館';
            }else if($_POST['id'] == 21){echo 'はこだてみらい館　シアター';
            }else if($_POST['id'] == 22){echo 'はこだてみらい館　シアター';
            }
            ?>
          </td>
        </tr>
        <tr>
          <th class = "event_point_cap">参加費</th>
          <td class = "event_point_contents">
            <?php if($_POST['id'] == 5){echo '300円(別途入場料がかかります)';//無料のとき以外は料金をidと追記
            }else if($_POST['id'] == 10){echo '300円(材料費)';
            }else if($_POST['id'] == 14){echo '300円(材料費)';
            }else{echo '無料';//
            }
            ?>
          </td>
        </tr>
        <tr>
          <th class = "event_point_cap">対象</th>
          <td class = "event_point_contents">
            <?php if($_POST['id'] == 0){echo '小学生から中学生';
            }else if($_POST['id'] == 1){echo '幼稚園児から小学生';
            }else if($_POST['id'] == 2){echo '子どもから大人まで';
            }else if($_POST['id'] == 3){echo '【第1部】小学生<br>【第2部、第3部】子どもから大人まで';
            }else if($_POST['id'] == 4){echo '子どもから大人まで';
            }else if($_POST['id'] == 5){echo '小学生～中学生 ※保護者同伴必須';
            }else if($_POST['id'] == 6){echo '小学生以上 ※保護者同伴必須';
            }else if($_POST['id'] == 7){echo '小学生以上 ※保護者同伴必須';
            }else if($_POST['id'] == 8){echo '小学生以上 ※保護者同伴も可';
            }else if($_POST['id'] == 10){echo '小学生～中学生 ※保護者同伴必須';
            }else if($_POST['id'] == 14){echo '小学生～中学生 ※保護者同伴必須';
            }else if($_POST['id'] == 18){echo '5歳～小学生 ※親子参加可';
            }else if($_POST['id'] == 19){echo '中学生～大人まで';
            }else if($_POST['id'] == 20){echo '中学生～大人まで';
            }else if($_POST['id'] == 21){echo '小学生～大人まで　※親子参加可';
            }else if($_POST['id'] == 22){echo '小学校3年生以上　※親子参加可';
            }
            ?>
          </td>
        </tr>
      </table>
    </div>
    <!-- ここまでイベント情報 -->
  </div>
  <form class = "inputForm form" action = "send_event.php" method = "post">
    <table class = " inputBox_Econf">
      <tr>
        <th>お名前</th>
        <td>
          <input type="text" name ="name" maxlength = "255" readonly value=<?php echo htmlspecialchars($_POST['name']);?>>
        </td>
      </tr>
      <!-- 電話番号 -->
      <tr>
        <th>電話番号</th>
        <td>
          <input type = "tel" name ="tel" maxlength = "255" readonly value=<?php echo htmlspecialchars($_POST['tel']);?>>
        </td>
      </tr>
      <!-- ここまで -->
      <tr>
        <th>メールアドレス</th>
        <td>
          <input type = "email" name ="email" maxlength = "255" readonly value=<?php echo htmlspecialchars($_POST['email']);?>>
        </td>
      </tr>
      <tr>
        <th>参加者の年齢</th>
        <td>
          <input type="text" name ="name" maxlength = "255" readonly value=<?php echo htmlspecialchars($_POST['old']);?>>
        </td>
      </tr>
      <?php
      if($_POST['id'] == 8){
        echo '
          <tr>
            <th>参加日時</th>
            <td>
              <select name="date" disabled class="select-confirm">
                <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>11月12日(土) 10:30-12:30(1回目)</option>
                <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>11月12日(土) 14:00-16:00(2回目)</option>
                <option value="3"'; if($_POST['date'] == 3){ echo " selected ";} echo '>11月13日(日) 10:30-12:30(3回目)</option>
                <option value="4"'; if($_POST['date'] == 4){ echo " selected ";} echo '>11月13日(日) 14:00-16:00(4回目)</option>
              </select>
            </td>
          </tr>
        ';
      }else if($_POST['id'] == 10){
        echo '
          <tr>
            <th>参加日時</th>
            <td>
              <select name="date" disabled class="select-confirm">
                <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>11月27日(日) 10:30-12:30(1回目)</option>
                <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>11月27日(日) 14:00-16:00(2回目)</option>
              </select>
            </td>
          </tr>
        ';
      }else if($_POST['id'] == 14){
        echo '
          <tr>
            <th>参加日時</th>
            <td>
              <select name="date" disabled class="select-confirm">
                <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>12月25日(日) 10:30-12:30(1回目)</option>
                <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>12月25日(日) 14:00-16:00(2回目)</option>
              </select>
            </td>
          </tr>
        ';
      }else if($_POST['id'] == 14){
        echo '
          <tr>
            <th>参加日時</th>
            <td>
              <select name="date" disabled class="select-confirm">
                <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>12月27日(火)  11:00-12:30（1回目）</option>
                <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>12月27日(火)  14:00-15:30（2回目）</option>
                <option value="3"'; if($_POST['date'] == 3){ echo " selected ";} echo '>12月29日(木) 11:00-12:30（1回目）</option>
                <option value="4"'; if($_POST['date'] == 4){ echo " selected ";} echo '>12月29日(木) 14:00-15:30（2回目）</option>
              </select>
            </td>
          </tr>
        ';
      }else if($_POST['id'] == 21){
        echo '
          <tr>
            <th>参加日時</th>
            <td>
              <select name="date">
                <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>12月11日(日)11:00-12:00</option>
                <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>12月11日(日)14:00-15:00</option>
              </select>
            </td>
          </tr>
        ';
      }else if($_POST['id'] == 22){
        echo '
          <tr>
            <th>参加日時</th>
            <td>
              <select name="date">
                <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>12月10日(土)10:30-12:30</option>
                <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>12月10日(土)14:00-16:00</option>
              </select>
            </td>
          </tr>
        ';
      }
      ?>
      <tr>
        <th class = "textareaLabel">その他ご質問等</th>
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
  <form class = "inputForm_sp form" action = "send_event.php" method = "post">
    <div class = "inputBox_conf_sp">
      <p>お名前</p>
      <input type="text" name ="name" maxlength = "255" readonly value=<?php echo htmlspecialchars($_POST['name']);?>>
    </div>
    <div class = "inputBox_conf_sp">
      <p>電話番号</p>
      <input type = "tel" name ="tel" maxlength = "255" readonly value=<?php echo htmlspecialchars($_POST['tel']);?>>
    </div>
    <div class = "inputBox_conf_sp">
      <p>メールアドレス</p>
      <input type = "email" name ="email" maxlength = "255" readonly value=<?php echo htmlspecialchars($_POST['email']);?>>
    </div>
    <div class = "inputBox_conf_sp">
      <p>参加者の年齢</p>
      <input type = "text" name = "old" maxlength = "255" readonly value=<?php echo htmlspecialchars($_POST['old']);?>>
    </div>
    <?php
      if($_POST['id'] == 8){
        echo '
        <div class = "inputBox_sp">
          <p>参加日時</p>
            <select name="date" disabled class="select-confirm">
              <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>11月12日(土) 10:30-12:30(1回目)</option>
              <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>11月12日(土) 14:00-16:00(2回目)</option>
              <option value="3"'; if($_POST['date'] == 3){ echo " selected ";} echo '>11月13日(日) 10:30-12:30(3回目)</option>
              <option value="4"'; if($_POST['date'] == 4){ echo " selected ";} echo '>11月13日(日) 14:00-16:00(4回目)</option>
            </select>
        </div>';
      }else if($_POST['id'] == 10){
        echo '
        <div class = "inputBox_sp">
          <p>参加日時</p>
            <select name="date" disabled class="select-confirm">
              <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>11月27日(日) 10:30-12:30(1回目)</option>
              <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>11月27日(日) 14:00-16:00(2回目)</option>
            </select>
        </div>';
      }else if($_POST['id'] == 14){
        echo '
        <div class = "inputBox_sp">
          <p>参加日時</p>
            <select name="date" disabled class="select-confirm">
              <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>12月25日(日) 10:30-12:30(1回目)</option>
              <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>12月25日(日) 14:00-16:00(2回目)</option>
            </select>
        </div>';
      }else if($_POST['id'] == 20){
        echo '
        <div class = "inputBox_sp">
          <p>参加日時</p>
            <select name="date" disabled class="select-confirm">
                <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>12月27日(火)  11:00-12:30（1回目）</option>
                <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>12月27日(火)  14:00-15:30（2回目）</option>
                <option value="3"'; if($_POST['date'] == 3){ echo " selected ";} echo '>12月29日(木) 11:00-12:30（1回目）</option>
                <option value="4"'; if($_POST['date'] == 4){ echo " selected ";} echo '>12月29日(木) 14:00-15:30（2回目）</option>
              </select>
        </div>';
      }else if($_POST['id'] == 21){
        echo '
        <div class = "inputBox_sp">
          <p>参加日時</p>
            <select name="date">
              <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>12月11日(日)11:00-12:00</option>
              <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>12月11日(日)14:00-15:00</option>
            </select>
        </div>';
      }else if($_POST['id'] == 22){
        echo '
        <div class = "inputBox_sp">
          <p>参加日時</p>
            <select name="date">
              <option value="1"'; if($_POST['date'] == 1){ echo " selected ";} echo '>12月10日(土)10:30-12:30</option>
              <option value="2"'; if($_POST['date'] == 2){ echo " selected ";} echo '>12月10日(土)14:00-16:00</option>
            </select>
        </div>';
      }
    ?>
    <div class = "inputBox_conf_sp_b">
      <p>その他ご質問等</p>
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
  <div class = "overlay"></div>
</div>
<!-- 共通部分ここから -->
<footer>
  <img src = "images/common/pagetop.png" class = "pagetop move-page-top" alt = "ページトップに戻る">
  <div class ="footerLinks">
    <!--<a href = "member.html" class="links">メンバー</a>-->
    <a href = "notice.html" class="links">お知らせ</a>
    <a href = "recruit.html" class="links">求人情報</a>
    <!--<a href = "FAQ.html" class="links">よくあるご質問</a> -->
    <a href = "relatedlinks.html" class="links">関連リンク</a>
    <a href = "sitemap.html" class="links">サイトマップ</a>
    <a href = "sitepolicy.html" class="links">サイトポリシー</a>
  </div>
  <div class = "SNSbutton">
    <a href = "https://www.facebook.com/hakodatemiraiproject/" target="_blank">
      <img src = "images/common/fb.png" alt="公式Facebook" class = "SNS">
    </a>
  </div>
  <div class = "copyright">
    <p>@2016 Hakodate Mirai Project</p>
  </div>
  <div class = "overlay"></div>
</footer>
<!-- 共通部分ここまで -->
<!-- 共通部分ここから -->
<div class = "g_drawer">
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
<!-- 共通部分ここまで -->