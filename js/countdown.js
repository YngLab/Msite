function countdown(eventDate) {
  today = new Date().getDate();
  if(eventDate > today){
    document.write("あと" + (eventDate - today) + "日");
  }
}
