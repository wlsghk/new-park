$(document).ready(function () {
    // 팝업을 처음에 숨김
    $('.popup').hide();

    // 페이지 로드 후 팝업 슬라이드 다운
    $('.popup').slideDown(900, function () {
        // 스크롤 비활성화
        if ($(window).width() > 480) {
            $('html, body').css('overflow', 'hidden');
        } else {
            $('html, body').css('overflow', 'auto');
        }
    });

    // '오늘 하루 보지 않기' 버튼 클릭 시
    $('.not-today').click(function (e) {
        e.preventDefault();
        $('.popup').slideUp(900, function () {
            // 스크롤 활성화
            $('html, body').css('overflow', 'auto');
        });
    });

    // 닫기 버튼 클릭 시
    $('.xi-close').click(function (e) {
        e.preventDefault();
        $('.popup').slideUp(900, function () {
            // 스크롤 활성화
            $('html, body').css('overflow', 'auto');
        });
    });

    // 화면 크기 변경 시
    $(window).resize(function () {
        if ($(window).width() <= 480) {
            $('html, body').css('overflow', 'auto');
        }
    });

    $('body').click(function () {
        $('.popup').slideUp(900);
    })
});