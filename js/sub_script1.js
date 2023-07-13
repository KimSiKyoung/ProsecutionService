$(function () {


  /* 
  홈페이지 +,- 글자 조정
  */
  var base = 100;
  var mybody = $('body');
  $('.zoom>a').on('click', function () {
    var zNum = $('.zoom>a').index(this);
    if (zNum == 0) {//확대(+)
      base += 5;
    } else if (zNum == 1) {
      base = 100;
    } else {// 축소(-)
      base -= 5;
    }
    mybody.css('overflow-x', 'auto')
      .css('transform-origin', '50% 0')
      .css('transform', 'scale(' + base / 100 + ')')
      .css('zoom', base + '%');
    return false;
  });

  /* 
  네비 메뉴 내려오게 
  */

  $("nav > ul > li").hover(
    function () {
      $(this).find("div").addClass('active'); //find () 메서드는 선택한 요소의 하위 요소를 반환
    },
    function () {
      $(this).find("div").removeClass('active');
    }
  );


  /* 세로텝메뉴 */

  $('.aside>ul>li').hover(function () {
    $(this).find('.depth3').stop().slideDown()
  }, function () {
    $(this).find('.depth3').stop().slideUp()
  
  
  });

});










