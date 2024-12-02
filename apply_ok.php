<meta charset="utf-8" />
<?php
session_start();
include "config/db.php";

$apply_name = $_POST['apply_name'];
$apply_name = addslashes($_POST['apply_name']); 

if ($apply_name == "") {
	echo "<script>alert('이름을 입력하세요');history.back();</script>";
} else {

$apply_title = $_POST['apply_title'];
$apply_phone = $_POST['apply_phone'];

$sql2 = "select count(*) from apply where apply_phone='".$apply_phone."'";
$result2 = mysqli_query($con, $sql2);
$rowCount2 = mysqli_fetch_array($result2);
$total_record2 = $rowCount2["count(*)"];

if ($total_record2 >= 1) { 	
echo "<script>alert('신청완료된 고객님이십니다.');history.back();</script>";
} else { 


$apply_ip = $_SERVER["REMOTE_ADDR"];
$apply_wdate = date("Y-m-d H:i:s"); 

$sql = "INSERT INTO apply (apply_title,apply_name,apply_phone,apply_ip,apply_wdate) values('".$apply_title."','".$apply_name."','".$apply_phone."','".$apply_ip."','".$apply_wdate."')";

$result = mysqli_query($con, $sql);


?>
<script type="text/javascript">
alert('사업설명회 참석신청이 완료되었습니다.');
location.href="/";
</script>

<?php
}
}
?>