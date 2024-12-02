window.onload = function () {
    'use strict';

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChangeTransitionEnd: function () {
                // 모든 이미지에서 애니메이션 제거
                document.querySelectorAll('.swiper-slide img').forEach(function (img) {
                    img.classList.remove('animate');
                });

                // 현재 활성 슬라이드에 애니메이션 추가
                var activeSlide = document.querySelector('.swiper-slide-active img');
                if (activeSlide) {
                    activeSlide.classList.add('animate');
                }
            },
        },
        // 초기 활성 슬라이드 애니메이션 적용
        init: function () {
            var initialActiveSlide = document.querySelector('.swiper-slide-active img');
            if (initialActiveSlide) {
                initialActiveSlide.classList.add('animate');
            }
        },
    });

    // 스크롤 이벤트
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            header.style.top = '-135px';
        } else {
            header.style.top = '0';
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // 모바일에서 동영상 자동재생 막기
    function checkMobile() {
        const videoElements = document.getElementsByTagName('video');
        for (const video of videoElements) {
            // 화면 폭이 768px 이하일 경우
            if (window.innerWidth <= 768) {
                video.autoplay = false; // autoplay 비활성화
            } else {
                video.autoplay = true; // 다시 활성화 (필요 시)
            }
            video.load(); // 속성 변경 후 비디오 로드
        }
    }

    // 페이지 로드 시 체크
    window.onload = checkMobile;
    // 화면 크기 변경 시 체크
    window.onresize = checkMobile;
}
