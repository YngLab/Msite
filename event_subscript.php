<?php
if(!$_GET){
  header('Location: ../');
}
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
<script src = "js/myscript.js"></script>
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
<div class = "g_allArea g_allArea-fullWidth">
  <div class="g_pageTitle">
    <p class = "titleText">イベントの申し込み</p>
  </div>
  <div class = "overlay"></div>
</div>
<div class = "g_allArea">
  <div class = "eventabout">
    <!-- ここからイベント情報 -->
    <img src = 
    <?php if($_GET['id'] == 0){echo '"images/sq_event1_FCH.jpg"  alt = "先行体験会"';
    }else if($_GET['id'] == 1){echo '"images/sq_event1_KPH.jpg"  alt = "先行体験会"';
    }else if($_GET['id'] == 2){echo '"images/sq_event2_FCH.jpg" alt = "トークセッション"';
    }else if($_GET['id'] == 3){echo '"images/sq_event3_FCH.jpg"  alt = "井上涼さんアニメーションワークショップ"';
    }else if($_GET['id'] == 4){echo '"images/sq_event2_KPH.jpg"  alt = "Whiteaフリースタイルパフォーマンス"';
    }else if($_GET['id'] == 5){echo '"images/sq_event4_FCH.jpg" alt = "親子ワークショップ「光を感じよう！」"';
    }else if($_GET['id'] == 6){echo '"images/sq_event6_FCH.jpg" alt = "FabLabワークショップ"';
    }else if($_GET['id'] == 7){echo '"images/sq_event7_FCH.jpg" alt = "せかいをはかるワークショップ"';
    }else if($_GET['id'] == 8){echo '"images/event/sq_event8_FCH.gif" alt = "おもしろ写真deアニメーション"';
    }else if($_GET['id'] == 10){echo '"images/event/c-inoue/02.jpg" alt = "「空気を感じよう！」〜大気圧ってスゴい〜"';
    }
    ?>>
    <p class = "FCHcolor eventabout_title">
    <?php if($_GET['id'] == 0){echo 'はこだてみらい館 先行体験会';
    }else if($_GET['id'] == 1){echo 'はこだてキッズプラザ 先行体験会';
    }else if($_GET['id'] == 2){echo 'オドロクチカラ トークセッション';
    }else if($_GET['id'] == 3){echo '井上涼さんアニメーションワークショップ';
    }else if($_GET['id'] == 4){echo 'Whiteaフリースタイルパフォーマンス';
    }else if($_GET['id'] == 5){echo '親子ワークショップ「光を感じよう！~見える？見えない？光と色~」';
    }else if($_GET['id'] == 6){echo 'FabLabワークショップ';
    }else if($_GET['id'] == 7){echo 'せかいをはかるワークショップ';
    }else if($_GET['id'] == 8){echo 'おもしろ写真deアニメーション';
    }else if($_GET['id'] == 10){echo '「空気を感じよう！」〜大気圧ってスゴい〜';
    }
    ?></p>
    <div class = "event_point">
      <table>
        <tr>
          <th class = "event_point_cap">日時</th>
          <td class = "event_point_contents">
            <?php if($_GET['id'] == 0){echo '10月12日(水)　15:00-18:00';
            }else if($_GET['id'] == 1){echo '10月12日(水)　15:00-18:00';
            }else if($_GET['id'] == 2){echo '10月15日(土)　10:30-12:00';
            }else if($_GET['id'] == 3){echo '10月16日(日)　10:30-16:30';
            }else if($_GET['id'] == 4){echo '10月16日(日)　13:00-14:00';
            }else if($_GET['id'] == 5){echo '10月23日(日) 10:30-12:30(1回目)14:00-16:00(2回目)';
            }else if($_GET['id'] == 6){echo '10月29日(土) 10:00-15:00 ハロウィンキャンドル<br>10月30日(日) 10:00-15:00 ボトルキャップ';
            }else if($_GET['id'] == 7){echo '10月29日(土) 30日(日)<br>10:30-12:30(1回目) 14:00-16:00(2回目)';
            }else if($_GET['id'] == 8){echo '11月12日(土)<br>10:30-12:30(1回目)14:00-16:00(2回目)';
            }else if($_GET['id'] == 10){echo '11月27日(日)<br>10:30-12:30(1回目)14:00-16:00(2回目)';
            }
            ?></td>
        </tr>
        <tr>
          <th class = "event_point_cap">会場</th>
          <td class = "event_point_contents">
            <?php if($_GET['id'] == 0){echo 'はこだてみらい館';
            }else if($_GET['id'] == 1){echo 'はこだてキッズプラザ';
            }else if($_GET['id'] == 2){echo 'はこだてみらい館';
            }else if($_GET['id'] == 3){echo 'はこだてみらい館';
            }else if($_GET['id'] == 4){echo 'はこだてキッズプラザ';
            }else if($_GET['id'] == 5){echo 'はこだてみらい館';
            }else if($_GET['id'] == 6){echo 'はこだてみらい館';
            }else if($_GET['id'] == 7){echo 'はこだてみらい館';
            }else if($_GET['id'] == 8){echo 'はこだてみらい館';
            }else if($_GET['id'] == 10){echo 'はこだてみらい館';
            }
            ?>
          </td>
        </tr>
        <tr>
          <th class = "event_point_cap">参加費</th>
          <td class = "event_point_contents">
            <?php if($_GET['id'] == 5){echo '300円(別途入場料がかかります)';//無料のとき以外は料金をidと追記
            }else if($_GET['id'] == 8){echo '300円(材料費)';
            }else{ echo '無料';//
            }
            ?>
          </td>
        </tr>
        <tr>
          <th class = "event_point_cap">対象</th>
          <td class = "event_point_contents">
            <?php if($_GET['id'] == 0){echo '小学生から中学生';
            }else if($_GET['id'] == 1){echo '幼稚園児から小学生';
            }else if($_GET['id'] == 2){echo '子どもから大人まで';
            }else if($_GET['id'] == 3){echo '【第1部】小学生<br>【第2部、第3部】子どもから大人まで';
            }else if($_GET['id'] == 4){echo '子どもから大人まで';
            }else if($_GET['id'] == 5){echo '小学生～中学生 ※保護者同伴必須';
            }else if($_GET['id'] == 6){echo '小学生以上 ※保護者同伴必須';
            }else if($_GET['id'] == 7){echo '小学生以上 ※保護者同伴必須';
            }else if($_GET['id'] == 8){echo '小学生以上 ※保護者同伴も可';
            }else if($_GET['id'] == 10){echo '小学生～中学生 ※保護者同伴必須';
            }
            ?>
          </td>
        </tr>
      </table>
    </div>
    <!-- ここまでイベント情報 -->
  </div>
  <form class = "inputForm form" action = "confirm_event.php" method = "post">
    <table class = "inputBox_sub">
      <tr>
        <th>お名前</th>
        <td>
          <input type="text" name = "name" maxlength = "255" placeholder = "未来太郎（必須）">
        </td>
      </tr>
      <tr>
        <th>電話番号</th>
        <td>
          <input type = "tel" name = "tel" maxlength = "255" placeholder="0123-45-6789 or 090-XXXX-XXXX（必須）" required>
        </td>
      </tr>
      <tr>
        <th>メールアドレス</th>
        <td>
          <input type = "email" name = "email" maxlength = "255" placeholder="miraiproject@sample.com（必須）">
        </td>
      </tr>
      <tr>
        <th>参加者の年齢</th>
        <td>
          <input type = "text" name = "old" maxlength = "255" placeholder="10歳（必須）">
        </td>
      </tr>
      <?php //日時選択
      if($_GET['id'] == 8){
        echo '
          <tr>
            <th>参加日時</th>
            <td>
              <select name="date">
                <option value="1">11月12日(土) 10:30-12:30(1回目)</option>
                <option value="2">11月12日(土) 14:00-16:00(2回目)</option>
              </select>
            </td>
          </tr>
        ';
      }else if($_GET['id'] == 10){
        echo '
          <tr>
            <th>参加日時</th>
            <td>
              <select name="date">
                <option value="1">11月27日(日) 10:30-12:30(1回目)</option>
                <option value="2">11月27日(日) 14:00-16:00(2回目)</option>
              </select>
            </td>
          </tr>
        ';
      }
      ?>
      <tr>
        <th class = "textareaLabel">その他ご質問等</th>
        <td>
          <textarea name = "comment" id = "comment" cols = "40" rows = "5" placeholder = "ご不明点やご意見、ご要望などご自由にお書きください。"></textarea>
        </td>
      </tr>
      <tr>
        <th>　</th>
        <td>
          <div class = "confirm">
            <input type="hidden" name="id" value="<?php echo $_GET['id'];?>">
            <input type="submit" value="確認" class = "sendbutton">
          </div>
        </td>
      </tr>
    </table>
  </form>
  <form class = "inputForm_sp form" action = "confirm_event.php" method = "post">
    <div class = "inputBox_sp">
      <p>お名前</p>
      <input type="text" name = "name" maxlength = "255" placeholder = "未来太郎（必須）">
    </div>
    <!-- 電話番号 -->
    <div class = "inputBox_sp">
      <p>電話番号</p>
      <input type = "tel" name = "tel" maxlength = "255" placeholder="0123-45-6789 or 090-XXXX-XXXX（必須）" required>
    </div>
    <!-- ここまで -->
    <div class = "inputBox_sp">
      <p>メールアドレス</p>
      <input type = "email" name = "email" maxlength = "255" placeholder="miraiproject@sample.com（必須）">
    </div>
    <div class = "inputBox_sp">
      <p>参加者の年齢</p>
      <input type = "text" name = "old" maxlength = "255" placeholder="10歳">
    </div>
    <?php //日時選択
      if($_GET['id'] == 8){
        echo '
        <div class = "inputBox_sp">
          <p>参加日時</p>
            <select name="date">
              <option value="1">11月12日(土) 10:30-12:30(1回目)</option>
              <option value="2">11月12日(土) 14:00-16:00(2回目)</option>
            </select>
        </div>';
      }else if($_GET['id'] == 10){
        echo '
        <div class = "inputBox_sp">
          <p>参加日時</p>
            <select name="date">
              <option value="1">11月27日(日) 10:30-12:30(1回目)</option>
              <option value="2">11月27日(日) 14:00-16:00(2回目)</option>
            </select>
        </div>';
      }
    ?>
    <div class = "inputBox_sp_b">
      <p>その他ご質問等</p>
      <textarea name = "comment" id = "comment" cols = "40" rows = "5" placeholder = "ご不明点やご意見、ご要望などご自由にお書きください。"></textarea>
    </div>
    <div>
      <div>
        <input type="hidden" name="id" value="<?php echo $_GET['id'];?>">
        <input type="submit" value="確認" class = "button">
      </div>
    </div>
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