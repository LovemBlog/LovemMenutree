
+function ($) {
  if ($('#Lovem-post-menu').length <= 0) {
    return
  }
  var tocOffsetTop = $('#Lovem-post-menu').offset().top;

  $('#Lovem-post-menu').css('max-height', (window.innerHeight - 20) + 'px')
  $(window).resize(function(e) {
    $('#Lovem-post-menu').css('max-height', (window.innerHeight - 20) + 'px');
  }) 

  $(window).scroll(function(event){
    // 然后监听滚动事件，滚到之后，悬浮，滚回之后取消悬浮
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= (tocOffsetTop - 20)) {
      $('#Lovem-post-menu').addClass('Lovem-post-menu-fixed');
    } else {
      $('#Lovem-post-menu').removeClass('Lovem-post-menu-fixed');
    }
  });

  var showMenuFlag = true
  $('.Lovem-post-menu-title').click(function () {
    console.log('click')
    if (showMenuFlag) {
      $('.Lovem-post-menu-title').addClass('up-arrow');
      $('.table-of-contents').hide()
    } else {
      $('.Lovem-post-menu-title').removeClass('up-arrow');
      $('.table-of-contents').show()
    }
    showMenuFlag = !showMenuFlag
  });
}(jQuery);
