$(function(){
  //ページトップに戻るボタン
  $(".move-page-top").click(function(){
    $("html, body").animate({scrollTop:0},"slow");
  });
});