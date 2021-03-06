$(function(){
  //latestBox_sizeのサイズを決める
  w_size = $(window).width(); //ウィンドウ幅を取得
  if(w_size >= 1440){
    w_size = 1440;
  }
  if(w_size > 768 && w_size <= 1080){
    w_size = 1080;
  }
  latestBox_size =  w_size * 226 / 1080 - 2; //画面幅1080pxの時に226pxの比率から四方のborderを引いている
  if(w_size <= 768){
    latestBox_size =  w_size * 728 / 768 - 2; //画面幅768pxの時に728pxの比率から四方のborderを引いている
  }
  latestBox_size = latestBox_size * 10; //1度、値を10倍にする
  latestBox_size = Math.floor( latestBox_size ); //少数を切り捨てる
  latestBox_size = latestBox_size / 10; //1/10にして少数第3位が切り捨てられた値になる
  institution_size = $(".future_contents").width() * .5;
  $(".latestBox_future, .latestBox_kids").css("width", latestBox_size + "px");
  $(".latestBox_future, .latestBox_kids").css("height", latestBox_size + "px");
  $(".future_contents, .future_informaion, .kids_contents, .kids_informaion").css("height", institution_size + "px");
  //pcビューの時latestEventを一覧表示に
  if(w_size > 768){
    //直近のイベントをスライドショーから一覧表示にするための処理
    $(".latestEvent .flexslider .slides").unwrap();
    $(".latestEvent .slides li").unwrap();
    $(".latestEvent li a").unwrap();
  }
  $(window).resize(function () { //ウィンドウ幅がリサイズされた時の処理
    w_size = $(window).width();
    if(w_size >= 1440){
      w_size = 1440;
    }
    if(w_size > 768 && w_size <= 1080){
      w_size = 1080;
    }
    latestBox_size =  w_size * 226 / 1080 - 2; //画面幅1080pxの時に226pxの比率から四方のborderを引いている
    if(w_size <= 768){
      latestBox_size =  w_size * 728 / 768 -2; //画面幅768pxの時に728pxの比率から四方のborderを引いている
    }
    institution_size = $(".future_contents").width() * .5;
    $(".latestBox_future, .latestBox_kids").css("width", latestBox_size + "px");
    $(".latestBox_future, .latestBox_kids").css("height", latestBox_size + "px");
    $(".future_contents, .future_informaion, .kids_contents, .kids_informaion").css("height", institution_size + "px");
      //pcビューの時latestEventを一覧表示に
    if(w_size > 768){
      $(".latestEvent .flexslider .slides").unwrap();
      $(".latestEvent .slides li").unwrap();
      $(".latestEvent li a").unwrap();
    }
  });

  // スクロールしたら発動
  $(window).scroll(function() {
    // スクロール量を変数に格納
    var sc = $(this).scrollTop();
  });

  //latestEvent内の文章が長い時末尾に...を追記
  var $setElm = $(".latestEvent .eventtitle");
  var cutFigure = 23; // カットする文字数
  var afterTxt = "..."; // 文字カット後に表示するテキスト
  var i = 330;
  var j = 0;
  if(320 <= w_size  &&  w_size < 330){
      cutFigure = "31";
    }
  while(i < 768){
    if(i <= w_size  &&  w_size < i + 23){
      cutFigure = 31 + j;
      break;
    }
    i = i + 23;
    j++;
  }
  if(1156 <= w_size  &&  w_size < 1257){
    cutFigure = "24";
  }
  if(1257 <= w_size  &&  w_size < 1358){
    cutFigure = "25";
  }
  if(1358 <= w_size){
    cutFigure = "26";
  }
  $setElm.each(function(){
    var textLength = $(this).text().length;
    var textTrim = $(this).text().substr(0,(cutFigure));
    if(cutFigure < textLength) {
      $(this).html(textTrim + afterTxt).css({visibility:"visible"});
    } else if(cutFigure >= textLength) {
        $(this).css({visibility:"visible"});
    }
  });

  //ページトップに戻るボタン
  $(".move-page-top").click(function(){
    $("html, body").animate({scrollTop:0},"slow");
  });

  //アコーディオンの中身の縦幅を取得して開く長さを指定
  $(".Panel1").on('click',function(){
    $(".Panel1 .menu_text").toggleClass("active").slideToggle(400);
    $(".Panel1").toggleClass("active");
  });
  $(".Panel2").on('click',function(){
    $(".Panel2 .menu_text").toggleClass("active").slideToggle(400);
    $(".Panel2").toggleClass("active");
  });
  $(".Panel3").on('click',function(){
    $(".Panel3 .menu_text").toggleClass("active").slideToggle(400);
    $(".Panel3").toggleClass("active");
  });
  $(".Panel4").on('click',function(){
    $(".Panel4 .menu_text").toggleClass("active").slideToggle(400);
    $(".Panel4").toggleClass("active");
  });
  $(".Panel5").on('click',function(){
    $(".Panel5 .menu_text").toggleClass("active").slideToggle(400);
    $(".Panel5").toggleClass("active");
  });
    $(".Panel6").on('click',function(){
    $(".Panel6 .menu_text").toggleClass("active").slideToggle(400);
    $(".Panel6").toggleClass("active");
  });
  $(".Panel7").on('click',function(){
    $(".Panel7 .menu_text").toggleClass("active").slideToggle(400);
    $(".Panel7").toggleClass("active");
  });
  var nowModalSyncer = null;//現在開かれているモーダルコンテンツ
  var modalClassSyncer = "modal-syncer";//モーダルを開くリンクに付けるクラス名
  var current_scrollY;

  //モーダルのリンクを取得する
  var modals = document.getElementsByClassName(modalClassSyncer);

  //モーダルウィンドウを出現させるクリックイベント
  for(var i = 0,l = modals.length; l > i; i++){

    //全てのリンクにタッチイベントを設定する
    modals[i].onclick = function(){

    //モーダルウィンドウを開いている時に背景のスクロールを不可にする
    current_scrollY = $( window ).scrollTop(); 
    $("body").css({
      position: 'fixed',
      width: '100%',
      top: -1 * current_scrollY
    });

    $("#modal").show();
      //ボタンからフォーカスを外す
      this.blur() ;
      //ターゲットとなるコンテンツを確認
      var target = this.getAttribute("data-target");
      //ターゲットが存在しなければ終了
      if(typeof( target ) == "undefined" || !target || target == null){
        return false;
      }
      //コンテンツとなる要素を取得
      nowModalSyncer = document.getElementById(target);
      //ターゲットが存在しなければ終了
      if(nowModalSyncer == null){
        return false;
      }
      //キーボード操作などにより、オーバーレイが多重起動するのを防止する
      if($("#modal-overlay")[0]) return false;//新しくモーダルウィンドウを起動しない
      //オーバーレイを出現させる
      $("body").append('<div id="modal-overlay"></div>');
      $("#modal-overlay").fadeIn("fast");
      //コンテンツをセンタリングする
      centeringModalSyncer();
      //コンテンツをフェードインする
      $(nowModalSyncer).fadeIn("slow");
      //[#modal-overlay]、または[#modal-close]をクリックしたら…
      $("#modal-overlay, #modal-close").unbind().click( function(e){
        //[#modal-content]と[#modal-overlay]をフェードアウトした後に…
        $("#" + target + ",#modal-overlay").fadeOut("fast", function(){
          //[#modal-overlay]を削除する
          $("#modal-overlay").remove();
        });
        //現在のコンテンツ情報を削除
        nowModalSyncer = null;
        //止めていた背景を再度スクロールできるように
        $("body").removeAttr("style");
        $("html, body").prop({scrollTop: current_scrollY});
        $("#modal-overlay").hide();
      });
    }
  }
    //リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
  $(window).resize(centeringModalSyncer);
  //センタリングを実行する関数
  function centeringModalSyncer(){
    //モーダルウィンドウが開いてなければ終了
    if(nowModalSyncer == null) return false;
    //画面(ウィンドウ)の幅、高さを取得
    var w = $(window).width();
    var h = $(window).height();
    //コンテンツ(#modal-content)の幅、高さを取得
    var cw = $(nowModalSyncer).outerWidth(true);
    var ch = $(nowModalSyncer).outerHeight(true);
    //センタリングを実行する
    $(nowModalSyncer).css({"left": ((w - cw)/2) + "px", "top": 5 + "%"});
  }

  var $content = $('.g_allArea, footer'),
      $drawer = $('.g_drawer'),
      $button = $('.g_drawerToggle'),
      isOpen = false;
    
  //ボタンをタップ、クリックした時
  $button.on('touchstart click', function () {
    if(isOpen) {
      drawerClose();
      isOpen = false;
    } else {
      $drawer.addClass('open');
      $content.addClass('open');
      $button.addClass('open');
      current_scrollY = $( window ).scrollTop(); 
      $("html, body").css({
        position: 'fixed',
        width: '100%',
        top: -1 * current_scrollY
      });
      isOpen = true;
    }
    return false; //親要素へのイベント伝播、aタグのURLクリックによる画面遷移を防ぐ
  });

  //コンテンツ部分をタップ、クリックした時
  $content.on('touchstart click', function (e) {
    if(isOpen) {
      drawerClose();
      e.preventDefault();
      isOpen = false;
    }
  });
  //ドロワーメニューを閉じる
  function drawerClose(){
    $drawer.removeClass('open');
    $content.removeClass('open');
    $button.removeClass('open');
    $("html, body").removeAttr("style");
    $("html, body").prop({scrollTop: current_scrollY});
  }
});