function countdown(eventDate) {
  today = new Date().getDate();
  if(eventDate > today){
    document.write("あと" + (eventDate - today) + "日");
  }else if(eventDate == today){
    document.write("本日");
  }else{
    document.write("終了");
  }
}
