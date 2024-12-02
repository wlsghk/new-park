$(function () {
    // 첫 번째 메뉴 항목에 마우스를 올렸을 때
    $('.nav-b > ul > li:first-child').hover(
        function () {
            // 마우스가 들어갔을 때 .nav-sub 슬라이드 다운
            $(this).find('.nav-sub').stop(true, true).slideDown(500);
        },
        function () {
            // 마우스가 나갔을 때 .nav-sub 슬라이드 업
            $(this).find('.nav-sub').stop(true, true).slideUp(500);
        }
    );
});