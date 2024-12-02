    // 햄버거 메뉴 클릭 시 gnb 메뉴 노출
    const ham = document.querySelector('.ham');
    const gnb = document.querySelector('.gnb');
    const blackBox = document.querySelector('.black-box');
    const close = document.querySelector('.xi-close');
    const open = document.querySelector('.xi-plus');
    const short = document.querySelector('.xi-minus');
    const gnbSub = document.querySelector('.gnb-open');
    const gnbDirect = document.querySelector('.gnb-menu > li > a');
    const gnbImg = document.querySelector('.gnb-img');

    // 햄버거 메뉴 클릭 시
    ham.addEventListener('click', () => {
        gnb.classList.remove('hidden'); // 메뉴 표시
        gnb.style.animation = 'moveLeft 0.7s ease-in-out'; // 애니메이션 설정
        document.body.style.position = 'fixed';
        blackBox.classList.remove('hidden'); // 블랙박스 표시
    });

    // 닫기 버튼 클릭 시
    close.addEventListener('click', () => {
        gnb.style.animation = 'moveRight 0.7s ease-in-out'; // 애니메이션 설정
        blackBox.classList.add('hidden'); // 블랙박스 숨기기
        document.body.style.position = 'initial'; // 스크롤 활성화

        // 애니메이션 종료 후 메뉴 숨기기
        gnb.addEventListener('animationend', () => {
            gnb.classList.add('hidden'); // 애니메이션 종료 후 숨기기
        }, { once: true }); // 이벤트가 한 번만 발생하도록 설정
    });

    // 서브메뉴 플러스 버튼 눌렀을 시
    gnbDirect.addEventListener('click', () => {
        open.classList.toggle('hidden'); // 플러스 버튼 숨기기
        short.classList.toggle('hidden'); // 마이너스 버튼 표시
        gnbSub.classList.toggle('hidden'); // 서브메뉴 표시
        gnbImg.classList.toggle('hidden'); // 서브메뉴 이미지 표시
    });