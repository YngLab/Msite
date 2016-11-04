$(function(){
 var $content = $('.g_allArea, footer'),
      $drawer = $('.g_drawer'),
      $button = $('.g_drawerToggle'),
      isOpen = false;
    
  //ボタンをタップ、クリックした時
  $button.on('touchstart click', function () {
    if(isOpen) {
      drawerClose();
      isOpen = false;
    } else {
      $drawer.addClass('open');
      $content.addClass('open');
      $button.addClass('open');
      current_scrollY = $( window ).scrollTop(); 
      $("html, body").css({
        position: 'fixed',
        width: '100%',
        top: -1 * current_scrollY
      });
      isOpen = true;
    }
    return false; //親要素へのイベント伝播、aタグのURLクリックによる画面遷移を防ぐ
  });

  //コンテンツ部分をタップ、クリックした時
  $content.on('touchstart click', function (e) {
    if(isOpen) {
      drawerClose();
      e.preventDefault();
      isOpen = false;
    }
  });
  
  //ドロワーメニューを閉じる
  function drawerClose(){
    $drawer.removeClass('open');
    $content.removeClass('open');
    $button.removeClass('open');
    $("html, body").removeAttr("style");
    $("html, body").prop({scrollTop: current_scrollY});
  }
});