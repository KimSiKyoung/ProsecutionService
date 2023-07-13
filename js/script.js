$(function () {

    /* 
    홈페이지 +,- 글자 조정
    */
    var base = 100;
    var mybody = $('body');
    $('.zoom>a').on('click', function () {
        var zNum = $('.zoom>a').index(this);
        if (zNum == 0) { //확대(+)
            base += 5;
        } else if (zNum == 1) {
            base = 100;
        } else { // 축소(-)
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




    /* 
    배너 이미지 슬라이드
    */
    var visual = $('.main_banner>ul>li'); //비쥬얼 슬라이드 이미지
    var button = $('.slide_num>ul>li') // 슬라이드 버튼
    var current = 0; //현재상태 초기화
    var setIntervalId; //반복되는 배너를 변수로 지정

    function move(tg, start, end) {
        tg.css('left', start).stop().animate({
            left: end
        }, 500) /* 스탑먼저 쓰고 애니메이트*/
    }

    timer(); //호출

    function timer() { //일정시간동안 호출하기 위해 타이머를 만듬.
        setIntervalId = setInterval(function () { //setInterval은 자동
            var prev = visual.eq(current);
            var pn = button.eq(current); /* 활성화 된 버튼 현재상태 (순서 똑같이 고정) */
            move(prev, 0, '-100%');

            pn.removeClass('on');
            current++;

            if (current == visual.size()) {
                current = 0
            }

            //current는 현재의 상태

            var next = visual.eq(current);
            var pnn = button.eq(current);

            move(next, '100%', 0);
            pnn.addClass('on');


        }, 3000);
    }


    //stop, play 버튼

    $('.sd_stop').click(function () {
        clearInterval(setIntervalId); /* setIntervalId을 취소하는 것 */
        $('.sd_stop').hide();
        $('.sd_start').show();
    });


    $('.sd_start').click(function () {
        timer();
        $('.sd_stop').show();
        $('.sd_start').hide();
    });

    //동그라미 버튼
    button.click(function () {
        var tg = $(this);
        var i = tg.index(); /* 타겟 된 인덱스 순번을 i라고 함 */
        button.removeClass('on');
        tg.addClass('on');
        movel(i); // 버튼을 클릭하면 현재 화면에서 재생되도록
    });

    function movel(i) { //현재화면에서 재생
        if (current == i) {
            return
        } //i가 현재 화면과 같다면 반환하기
        var currentEl = visual.eq(current); //eq는 순번
        var nextEl = visual.eq(i);
        currentEl.css({
            left: 0
        }).stop().animate({
            left: '-100%'
        }, 500);
        nextEl.css({
            left: '100%'
        }).stop().animate({
            left: 0
        }, 500);
        current = i;
    }

    var current1 = 0;
    var subtext = $('.sub_text>li');
    var tim;

    function set() {
        tim = setInterval(function () {

            var prev1 = subtext.eq(current1);
            move1(prev1, 0, '-100%');
            current1++;
            if (current1 == subtext.size()) {
                current1 = 0
            }
            var next1 = subtext.eq(current1)
            move1(next1, '100%', 0);
        }, 3000);
    }

    set();

    function move1(tgg, start, end) {
        tgg.css('top', start).stop().animate({
            top: end
        }, 800);
    }

    $('.sub_text').hover(function () {
        clearInterval(tim);
    }, function () {
        set();
    });

    //사회공헌 슬라이드
    var current2 = 0;
    var subtext2 = $('.sub_text1>li');
    var tim2;

    function set2() {
        tim2 = setInterval(function () {

            var prev2 = subtext2.eq(current2);
            move2(prev2, 0, '100%');
            current2++;
            if (current2 == subtext2.size()) {
                current2 = 0
            }
            var next2 = subtext2.eq(current2)
            move2(next2, '-100%', 0);
        }, 3000);
    }

    set2();

    function move2(tgg2, start, end) {
        tgg2.css('top', start).stop().animate({
            top: end
        }, 800);
    }

    $('.sub_text1').hover(function () {
        clearInterval(tim2);
    }, function () {
        set2();
    });



    AOS.init();

    /* 탭메뉴 네비 */
    $(document).ready(function () {
        $(".tab_title li").click(function () {
            var idx = $(this).index();
            $(".tab_title li").removeClass("on");
            $(".tab_title li").eq(idx).addClass("on");
            $(".tab_cont > div").hide();
            $(".tab_cont > div").eq(idx).show();
        })
    });
});