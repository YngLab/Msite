function countdown() {
  today = new Date().getDate();
  for (var i = 0; i < arguments.length; i++) {//複数日程指定時
    if(arguments[i+1] == undefined){//次の日付がなければ
      eventDate = arguments[i];
      break;
    }else{//次の日付があれば
      if(arguments[i] >= today){//過ぎていないなら
        eventDate = arguments[i];
        break;
      }else{//過ぎているなら
        continue;
      }
    }
  }
  if(eventDate > today){
    document.write("あと" + (eventDate - today) + "日");
  }else if(eventDate == today){
    document.write("本日");
  }else{
    document.write("終了");
  }
}

var isset = function(data){
    if(data === "" || data === null || data === undefined){
        return false;
    }else{
        return true;
    }
};