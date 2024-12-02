window.onload = function () {
    document.getElementById('mgm_business').addEventListener('input', function (e) {
        let input = e.target.value.replace(/-/g, ''); // 기존 하이픈 제거
        let formatted = '';

        // 사업자 등록번호 형식에 맞춰 하이픈 삽입
        if (input.length > 3 && input.length <= 5) {
            formatted = `${input.slice(0, 3)}-${input.slice(3)}`;
        } else if (input.length > 5) {
            formatted = `${input.slice(0, 3)}-${input.slice(3, 5)}-${input.slice(5)}`;
        } else {
            formatted = input;
        }

        e.target.value = formatted; // 포맷된 값으로 입력 필드 업데이트
    });


    document.getElementById('mgm_phone').addEventListener('input', function (e) {
        let input = e.target.value.replace(/-/g, ''); // 기존 하이픈 제거
        let formatted = '';

        // 휴대폰 번호 형식에 맞춰 하이픈 삽입
        if (input.length > 3 && input.length <= 7) {
            formatted = `${input.slice(0, 3)}-${input.slice(3)}`;
        } else if (input.length > 7) {
            formatted = `${input.slice(0, 3)}-${input.slice(3, 7)}-${input.slice(7)}`;
        } else {
            formatted = input;
        }

        e.target.value = formatted; // 포맷된 값으로 입력 필드 업데이트
    });
}