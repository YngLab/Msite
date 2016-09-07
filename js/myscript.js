$(function(){
  w_size = $(window).width();
  w_size = w_size * .209259;
  $(".latestBox_future").css("width", w_size + "px");
  $(".latestBox_future").css("height", w_size + "px");
  $(window).resize(function () {
    w_size = $(window).width();
    w_size = w_size * .209259;
    $(".latestBox_future").css("width", w_size + "px");
    $(".latestBox_future").css("height", w_size + "px");
  });
});