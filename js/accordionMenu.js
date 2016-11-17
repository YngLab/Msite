$(function(){
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
});