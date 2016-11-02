$(function(){
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
});