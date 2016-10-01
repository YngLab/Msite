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
<meta name = "description" content="2016年10月15日に函館駅前にOPENするはこだてみらい館・はこだてキッズプラザの告知サイトです。">
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
            <a href="HMP.html">みらいプロジェクト</a>
          </li>
          <li class = "gNavli">
            <a href="FCH.html">はこだてみらい館</a>
          </li>
          <li class = "gNavli">
            <a href="KPH.html">はこだてキッズプラザ</a>
          </li>
        </div>
      </div>
    </div>
  </header>
  <div class = "pageTitle">
    <div class = "wrap">
      <p class = "titleText">イベントの申し込み確認</p>
    </div>
  </div>
  <div class = "wrap">
  <!-- 以下body -->
    <div class = "autoHeight">
      <div class = "eventabout">
        <!-- ここからイベント情報 -->
        <img src = 
        <?php if($_POST[id] == 0){echo '"images/sq_event1_FCH.jpg"  alt = "先行体験会"';
        }else if($_POST[id] == 1){echo '"images/sq_event1_KPH.jpg"  alt = "先行体験会"';
        }else if($_POST[id] == 2){echo '"images/sq_event2_FCH.jpg" alt = "トークセッション"';
        }else if($_POST[id] == 3){echo '"images/sq_event3_FCH.jpg"  alt = "井上涼さんアニメーションワークショップ"';
        }else if($_POST[id] == 4){echo '"images/sq_event2_KPH.jpg"  alt = "Whiteaフリースタイルパフォーマンス"';
        }
        ?>>
        <p class = "FCHcolor eventabout_title">
        <?php if($_POST[id] == 0){echo 'はこだてみらい館先行体験会';
        }else if($_POST[id] == 1){echo 'はこだてキッズプラザ先行体験会';
        }else if($_POST[id] == 2){echo 'トークセッション';
        }else if($_POST[id] == 3){echo '井上涼さんアニメーションワークショップ';
        }else if($_POST[id] == 4){echo 'Whiteaフリースタイルパフォーマンス';
        }
        ?></p>
        <div class = "event_point">
          <table>
            <tr>
              <th class = "event_point_cap">日時</th>
              <td class = "event_point_contents">
                <?php if($_POST[id] == 0){echo '10月12日(水)　15:00-18:00';
                }else if($_POST[id] == 1){echo '10月12日(水)　15:00-18:00';
                }else if($_POST[id] == 2){echo '10月15日(土)　10:30-12:00';
                }else if($_POST[id] == 3){echo '10月16日(日)　10:00-16:30';
                }else if($_POST[id] == 4){echo '10月16日(日)　13:00-14:00';
                }
                ?></td>
            </tr>
            <tr>
              <th class = "event_point_cap">会場</th>
              <td class = "event_point_contents">
                <?php if($_POST[id] == 0){echo 'はこだてみらい館';
                }else if($_POST[id] == 1){echo 'はこだてキッズプラザ';
                }else if($_POST[id] == 2){echo 'はこだてみらい館';
                }else if($_POST[id] == 3){echo 'はこだてみらい館';
                }else if($_POST[id] == 4){echo 'はこだてキッズプラザ';
                }
                ?>
              </td>
            </tr>
            <tr>
              <th class = "event_point_cap">参加費</th>
              <td class = "event_point_contents">
                <?php if($_POST[id] == 0){echo '無料';
                }else if($_POST[id] == 1){echo '無料';
                }else if($_POST[id] == 2){echo '無料';
                }else if($_POST[id] == 3){echo '無料';
                }else if($_POST[id] == 4){echo '無料';
                }
                ?>
              </td>
            </tr>
            <tr>
              <th class = "event_point_cap">対象</th>
              <td class = "event_point_contents">
                <?php if($_POST[id] == 0){echo '小学生から中学生';
                }else if($_POST[id] == 1){echo '幼稚園児から小学生';
                }else if($_POST[id] == 2){echo '子どもから大人まで';
                }else if($_POST[id] == 3){echo '子どもから大人まで';
                }else if($_POST[id] == 4){echo '子どもから大人まで';
                }
                ?>
              </td>
            </tr>
          </table>
        </div>
        <!-- ここまでイベント情報 -->
      </div>
      <form class = "form" action = "php/hoge.php" method = "post">
        <table class = "inputForm inputBox_Econf">
          <tr>
            <th>お名前</th>
            <td>
              <input type="text" name ="name" maxlength = "255" placeholder = "未来太郎">
            </td>
          </tr>
          <tr>
            <th>メールアドレス</th>
            <td>
              <input type = "email" name ="email" maxlength = "255" placeholder="miraiproject@sample.com">
            </td>
          </tr>
          <tr>
            <th>参加者の年齢</th>
            <td>
              <input type="text" name ="name" maxlength = "255" placeholder = "10歳">
            </td>
          </tr>
          <tr>
            <th class = "textareaLabel">その他ご質問等</th>
            <td>
              <textarea name = "comment" id = "comment" cols = "40" rows = "5" placeholder = "ご不明点やご意見、ご要望などご自由にお書きください。"></textarea>
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
      <div class = "inputForm_sp">
        <form class = "form" action = "confirm_contact.php" method = "post">
          <div class = "inputBox_conf_sp">
            <p>お名前</p>
            <input type="text" name ="name" maxlength = "255" placeholder = "未来太郎">
          </div>
          <div class = "inputBox_conf_sp">
            <p>メールアドレス</p>
            <input type = "email" name ="email" maxlength = "255" placeholder="miraiproject@sample.com">
          </div>
          <div class = "inputBox_conf_sp_b">
            <p>その他ご質問等</p>
            <textarea name = "comment" id = "comment" cols = "40" rows = "5" placeholder = "ご不明点やご意見、ご要望などご自由にお書きください。"></textarea>
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
        <a href = "https://www.facebook.com/hakodatemiraiproject/">
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