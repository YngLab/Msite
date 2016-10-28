function countdown(eventDate) {
  today = new Date().getDate();
  if(eventDate > today){
    document.write(eventDate - today);
  }
}
