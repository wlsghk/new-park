window.onload = function () {
    const ntSelect = document.querySelectorAll('.notice-select li');
    const ntSelectA = document.querySelectorAll('.notice-select li a');
    const ntSearch = document.querySelectorAll('.search-bar');
    const ntBoard = document.querySelectorAll('.notice-table');
    const pagination = document.querySelectorAll('.pagination');

    // ntSelectA 요소들을 순회
    ntSelectA.forEach((list, i) => {
        // 각 요소에 클릭 이벤트 리스너 추가
        list.addEventListener('click', (e) => {
            // 클릭 이벤트의 기본 동작 방지
           // e.preventDefault();

            // ntSelect 요소들에서 checked 클래스 제거
            ntSelect.forEach((item) => item.classList.remove('checked'));

            // 클릭된 요소에 checked 클래스 추가
            if (ntSelect[i]) {
                ntSelect[i].classList.add('checked');
            }

            // 모든 ntSearch와 ntBoard 요소 숨기기
            ntSearch.forEach(search => search.classList.add('hidden'));
            ntBoard.forEach(board => board.classList.add('hidden'));
            pagination.forEach(page => page.classList.add('hidden'));

            // 클릭된 인덱스와 관련된 ntSearch와 ntBoard 요소만 표시하기
            if (ntSearch[i]) {
                ntSearch[i].classList.remove('hidden');
            }

            if (ntBoard[i]) {
                ntBoard[i].classList.remove('hidden');
            }

            if (pagination[i]) {
                pagination[i].classList.remove('hidden');
            }
        });
    });
};
