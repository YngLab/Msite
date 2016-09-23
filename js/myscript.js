$(function(){
  w_size = $(window).width();
  latestBox_size = w_size * .209259;
  logoBox_size = w_size * .126851;
  logoBox_margin = w_size * .035185;
  institution_size = w_size * .224074;
  $(".latestBox_future").css("width", latestBox_size + "px");
  $(".latestBox_future").css("height", latestBox_size + "px");
  $(".future_logo, .kids_logo").css("height", logoBox_size + "px");
  $(".future_logo img, .kids_logo img").css("margin-top", logoBox_margin + "px");
  $(".future_contents, .future_informaion, .kids_contents, .kids_informaion").css("height", institution_size + "px");
  $(window).resize(function () {
    w_size = $(window).width();
    latestBox_size = w_size * .209259;
    logoBox_size = w_size * .126851;
    logoBox_margin = w_size * .035185;
    institution_size = w_size * .224074;
    logoapp_margin = w_size * .029629;
    $(".latestBox_future").css("width", latestBox_size + "px");
    $(".latestBox_future").css("height", latestBox_size + "px");
    $(".future_logo, .kids_logo").css("height", logoBox_size + "px");
    $(".future_logo img, .kids_logo img").css("margin-top", logoBox_margin + "px");
    $(".future_contents, .future_informaion, .kids_contents, .kids_informaion").css("height", institution_size + "px");
  });

  //ページトップに戻るボタン
  $(".move-page-top").click(function(){
    $("html, body").animate({scrollTop:0},"slow");
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
      $("#modal-overlay,#modal-close").unbind().click( function(e){
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
});