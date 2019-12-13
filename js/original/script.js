// JavaScript Document
// ページを開く際、移動する際にfadeIn
$('head').append(
  '<style type="text/css">.is-hide{display:none;}</style>'
);
$(window).on("load",function() {
  $('body').fadeIn(500).removeClass("is-hide");
});
$(function(){
  $('a.fadelink').on("click",function() {
    var url = $(this).attr('href');
    if (url != '') {
      $('body').fadeOut(500);
      setTimeout(function(){
        location.href = url;
      }, 500);
    }
    return false;
  });
});

//ページ遷移時fadeOut
$(window).on("pageshow",function() {
  if (event.persisted) {
    window.location.reload();
  }
});

$(function(){

  // FadeIn系統
  $('.title-effect').css("opacity","0");
  $('.vision').css("opacity","0");
  $('.project-example').css("opacity","0");
  $(window).scroll(function (){
    // titleをFadeInする。
    $('.title-effect').each(function(){

      var ef = $(this).offset().top;
      var sc = $(window).scrollTop();
      var wh = $(window).height();

      if (sc > ef - wh + 100){
        $(this).animate({"opacity": "1"}, 1000);
      }
    });
  	// VisionをFadeInする。
  	$('.vision').each(function(i) {
      var ef = $(this).offset().top;
      var sc = $(window).scrollTop();
      var wh = $(window).height();

      if (sc > ef - wh + 100){
        $(this).animate({"opacity": "1"}, 1000);
      }
    });
    // Project ExampleをFadeInする。
    $('.project-example').each(function(i) {
      var ef = $(this).offset().top;
      var sc = $(window).scrollTop();
      var wh = $(window).height();

      if (sc > ef - wh + 100){
        $(this).animate({"opacity": "1"}, 1000);
      }
    });
  });

// フォームの書き込みエリア
  var $textarea = $('#textarea');
  var lineHeight = parseInt($textarea.css('lineHeight'));
  $textarea.on('input', function(e) {
    var lines = ($(this).val() + '\n').match(/\n/g).length;
    $(this).height(lineHeight * lines);
  });

  // Modalの表示
  $('#art-show').click(function(){
    $('#art-modal').fadeIn();
  });
  $('#bizx-show').click(function(){
    $('#bizx-modal').fadeIn();
  });
  $('#career-show').click(function(){
    $('#career-modal').fadeIn();
  });
  $('#chado-show').click(function(){
    $('#chado-modal').fadeIn();
  });
  $('#hcollege-show').click(function(){
    $('#hcollege-modal').fadeIn();
  });
  $('#japantrip-show').click(function(){
    $('#japantrip-modal').fadeIn();
  });
  $('#jj-show').click(function(){
    $('#jj-modal').fadeIn();
  });
  $('#locco-show').click(function(){
    $('#locco-modal').fadeIn();
  });
  $('#mxspace-show').click(function(){
    $('#mxspace-modal').fadeIn();
  });
  $('#nichy-show').click(function(){
    $('#nichy-modal').fadeIn();
  });
  $('#pizzjapan-show').click(function(){
    $('#pizzjapan-modal').fadeIn();
  });
  $('#africa-show').click(function(){
    $('#africa-modal').fadeIn();
  });

  // Past ProjectsのModalの表示
  $('#summit-show').click(function(){
    $('#summit-modal').fadeIn();
  });
  $('#svsec-show').click(function(){
    $('#svsec-modal').fadeIn();
  });
  $('#trihack-show').click(function(){
    $('#trihack-modal').fadeIn();
  });
  $('#boku-show').click(function(){
    $('#boku-modal').fadeIn();
  });
  $('#oculus-show').click(function(){
    $('#oculus-modal').fadeIn();
  });
  $('#hpair-show').click(function(){
    $('#hpair-modal').fadeIn();
  });
  $('#champ-show').click(function(){
    $('#champ-modal').fadeIn();
  });
  $('#youngers-show').click(function(){
    $('#youngers-modal').fadeIn();
  });
  $('#okinawa-show').click(function(){
    $('#okinawa-modal').fadeIn();
  });
  $('#ukjp-show').click(function(){
    $('#ukjp-modal').fadeIn();
  });
  $('#aln-show').click(function(){
    $('#aln-modal').fadeIn();
  });
  $('#y7-show').click(function(){
    $('#y7-modal').fadeIn();
  });
  $('#meetsart-show').click(function(){
    $('#meetsart-modal').fadeIn();
  });
  $('#zeroichi-show').click(function(){
    $('#zeroichi-modal').fadeIn();
  });

  // モーダルの非表示
  $('.project-modal-wrapper').click(function(event) {
    if(!$(event.target).closest('.modal').length) {
      $('.project-modal-wrapper').fadeOut();
    }
  });

  // mobileのheaderの表示、非表示
  $('.toggle').click(function() {
    $(this).toggleClass("active");
        if($(this).hasClass('active')) {
            $('.nav-wrapper').fadeIn();
            $('body,html').css({"overflow":"hidden","height":"100%"});
        } else {
            $('.nav-wrapper').fadeOut();
            $('body,html').css({"overflow":"visible","height":"auto"});
        }
  });
});

// スクロールに対応してheaderが出現・消失
// var startPos = 0,winScrollTop = 0;
// $(window).on('scroll',function(){
//     winScrollTop = $(this).scrollTop();
//     if (winScrollTop >= startPos) {
//       if(winScrollTop >= 200){
//           $('.site-header').addClass('hide');
//       }
//     } else {
//       document.getElementById('.site-header').style.display = 'none'
//         $('.site-header').removeClass('hide');
//     }
//     startPos = winScrollTop;
// });
var $win = $(window),
      $header = $('header'),
      headerHeight = $header.outerHeight(),
      startPos = 0;

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > startPos && value > headerHeight ) {
      $header.css('top', '-' + headerHeight + 'px');
    } else {
      $header.css('top', '0');
    }
    startPos = value;
  });

if (!window.console){
    window.console = {
        log : function(msg){
            // do nothing.
        }
    };
}
