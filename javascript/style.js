$(function() {
  $('#toggle').on('click', function() {
    $('body').toggleClass('is-open');
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header__menusection').addClass('fixed');
    } else {
      $('.header__menusection').removeClass('fixed');
    }
  });
});


(function(d) {
  var config = {
    kitId: 'bko4kwq',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);



$(function(){
 
  /* TOP-Pageボタン制御 */
  $('.page-top').hide();  // TOP-Pageボタン非表示

  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {    // スクロールが100に達したらボタン表示
        $('.page-top').fadeIn();
      } else {
        $('.page-top').fadeOut();
      }
  });

  $('.page-top').click(function () {      // TOP-Pageボタンクリックされた時
      $('body,html').animate({scrollTop: 0}, 500);  // TOPへスクロール
      return false;
  });
});
