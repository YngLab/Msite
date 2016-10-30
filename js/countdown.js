/*
 * auther: sKawashima
 * 引数にイベントの日にちを入れる（月越しは未対応）
 */
function countdown() {
  for (var i = 0; i < arguments.length; i++) {//複数日程指定時
    if(arguments[i+1] == undefined){//次の日付がなければ
      leftdays = calc_leftDays(arguments[i]);
      break;
    }else{//次の日付があれば
      leftdays = calc_leftDays(arguments[i]);
      if(leftdays >= 0){//過ぎていないなら
        break;
      }else{//過ぎているなら
        continue;
      }
    }
  }
  if(leftdays > 0){
    document.write("あと" + leftdays + "日");
  }else if(leftdays == 0){
    document.write("本日");
  }else{
    document.write("終了");
  }
}

function apDay(y,m,d) {//Ref: http://javascript.eweb-design.com/0605_ap.html
  today = new Date();
  apday = new Date(y,m-1,d);
  dayms = 24 * 60 * 60 * 1000;
  leftdays = Math.floor((apday.getTime()-today.getTime())/dayms) + 1;
  return(leftdays);
}

function calc_leftDays(eventDate){//イベントの日付を3つに分ける
  evyear = parseInt(eventDate / 10000);
  eventDate -= evyear * 10000;
  evmonth = parseInt(eventDate / 100);
  evdate = parseInt(eventDate - evmonth * 100);
  return(apDay(evyear, evmonth, evdate));
}