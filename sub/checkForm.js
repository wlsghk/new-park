window.onload = function() {
    // ������ id�� joinForm�� ���� submit ��ư�� �������� �� ����Ǵ� �̺�Ʈ ó��
    document.getElementById('joinForm').onsubmit = function() {
        // ������ �Է����� ���� ��� ���â ����
        // ���� �Է� ĭ�� id�� ã�ƿ���
        var name = document.getElementById('app_name')
        // ���� ������� Ȯ�� �� ������� ��� ���, �Է¶��� ��Ŀ��, ������ ���۵��� �ʰ�(���� �������� �̵� ���ϰ�)
       
		 if(name.value.length < 2 || name.value.length > 10) { // ���� �� �˻�
            alert("�̸��� 2�� �̻� �Է��ϼ���");
            name.focus();
            name.value = "";
            return false;
        } // ���̵� ���� ��



        // ������ �������� ���� ��� �˻�
        var job = document.getElementById('job');
        if(job.value == "") {
            alert("������ ������ �ּ���.");
            return false;
        } // ���� ���� �˻� �Ϸ�
        // if(job.selectedIndex == 0) {
        //     alert("������ ������ �ּ���.");
        //     return false;
        // } // ���� ���� �˻� �Ϸ�

        // radio ��ư �˻�.
        // radio ��ư�� ��� id �Ӽ��� ������� �ʰ� �׷� �̸��� name �Ӽ� ���
        // ���� �׷쿡 ���� ���� ���� ��ư(��ü)�� ������ name : �迭�� ó��
        // üũ ���θ� ������ ���� ����
        var chk = false;
        for(var i = 0; i < joinForm.emailRcv.length; i++) {
            if(joinForm.emailRcv[i].checked == true) {
                chk = true; // �ϳ��� üũ�Ǹ� true�� ����
                // �ϳ��� üũ���� ������ false �� �״�� ����.
            }
        }
        if(chk == false) { // �ϳ��� üũ���� �ʾ��� ���
            alert("�̸��� ���� ���θ� ������ �ּ���.")
            return false;
        }  // radio ��ư �˻� ��.

        // üũ�ڽ��� �ϳ��� �������� ���� ��� �˻�
        var agreement1 = document.getElementById('agreement1');
        var agreement2 = document.getElementById('agreement2');
        if(agreement1.checked == false && agreement2.checked == false) {
            alert("�� ��� �� �ϳ��� ����̶� ������ �ּ���.")
            return false;
        }
    }; // onsubmit ��
}; // window.onload ��