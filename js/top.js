// 문서가 완전히 로드된 후 실행
$(document).ready(function () {
    // 스크롤 위치에 따라 탑 버튼의 표시 여부 결정
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#top-btn').fadeIn(); // 300px 이상 스크롤 시 버튼 표시
            $('#quick').fadeIn();
        } else {
            $('#top-btn').fadeOut(); // 300px 미만 스크롤 시 버튼 숨김
            $('#quick').fadeOut();
        }
    });

    // 탑 버튼 클릭 시 페이지 상단으로 스크롤
    $('#top-btn').click(function (event) {
        event.preventDefault(); // 기본 링크 동작 방지
        $('html, body').animate({ scrollTop: 0 }, 400); // 부드럽게 스크롤
    });
});