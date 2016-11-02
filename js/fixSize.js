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
  latestBox_size = Math.floor( latestBox_size );
  institution_size = $(".future_contents").width() * .5; //各施設の体験メニュー、施設案内の縦幅
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
});
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