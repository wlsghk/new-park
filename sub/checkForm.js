window.onload = function() {
    // 폼에서 id가 joinForm인 폼의 submit 버튼이 눌러졌을 때 수행되는 이벤트 처리
    document.getElementById('joinForm').onsubmit = function() {
        // 성명을 입력하지 않은 경우 경고창 띄우기
        // 성명 입력 칸의 id를 찾아오기
        var name = document.getElementById('app_name')
        // 값이 비었는지 확인 후 비었으면 경고 출력, 입력란에 포커스, 서버로 전송되지 않게(다음 페이지로 이동 못하게)
       
		 if(name.value.length < 2 || name.value.length > 10) { // 글자 수 검사
            alert("이름은 2자 이상 입력하세요");
            name.focus();
            name.value = "";
            return false;
        } // 아이디 검증 끝



        // 직업을 선택하지 않은 경우 검사
        var job = document.getElementById('job');
        if(job.value == "") {
            alert("직업을 선택해 주세요.");
            return false;
        } // 직업 선택 검사 완료
        // if(job.selectedIndex == 0) {
        //     alert("직업을 선택해 주세요.");
        //     return false;
        // } // 직업 선택 검사 완료

        // radio 버튼 검사.
        // radio 버튼의 경우 id 속성을 사용하지 않고 그룹 이름인 name 속성 사용
        // 동일 그룹에 속한 여러 라디오 버튼(객체)는 동일한 name : 배열로 처리
        // 체크 여부를 저장할 변수 선언
        var chk = false;
        for(var i = 0; i < joinForm.emailRcv.length; i++) {
            if(joinForm.emailRcv[i].checked == true) {
                chk = true; // 하나라도 체크되면 true값 저장
                // 하나도 체크되지 않으면 false 값 그대로 유지.
            }
        }
        if(chk == false) { // 하나도 체크되지 않았을 경우
            alert("이메일 수신 여부를 선택해 주세요.")
            return false;
        }  // radio 버튼 검사 끝.

        // 체크박스를 하나도 선택하지 않은 경우 검사
        var agreement1 = document.getElementById('agreement1');
        var agreement2 = document.getElementById('agreement2');
        if(agreement1.checked == false && agreement2.checked == false) {
            alert("두 약관 중 하나의 약관이라도 동의해 주세요.")
            return false;
        }
    }; // onsubmit 끝
}; // window.onload 끝