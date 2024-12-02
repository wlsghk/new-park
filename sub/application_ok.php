<meta charset="utf-8" />
<?php
session_start();
include "../config/db.php";

$app_name = $_POST['app_name'];
$app_name = addslashes($_POST['app_name']); 

if ($app_name == "") {
	echo "<script>alert('이름을 입력하세요');history.back();</script>";
} else {

$app_jumin1 = $_POST['app_jumin1'];
$app_jumin2 = $_POST['app_jumin2'];
$app_phone = $_POST['app_phone']."-".$_POST['app_phone1']."-".$_POST['app_phone2'];


$sql2 = "select count(*) from application where app_phone='".$app_phone."'";
$result2 = mysqli_query($con, $sql2);
$rowCount2 = mysqli_fetch_array($result2);
$total_record2 = $rowCount2["count(*)"];

if ($total_record2 >= 1) { 	
echo "<script>alert('기존 등록하신 고객님이십니다.');history.back();</script>";
} else { 

$app_unit= $_POST['app_unit'];
$app_wdate = date("Y-m-d H:i:s"); 

$sql = "INSERT INTO application (app_name,app_phone,app_phone1,app_phone2,app_jumin1,app_jumin2,app_unit,app_wdate) values('".$app_name."','".$app_phone."','".$app_phone1."','".$app_phone2."','".$app_jumin1."','".$app_jumin2."','".$app_unit."','".$app_wdate."')";

$result = mysqli_query($con, $sql);


?>
<script type="text/javascript">
alert('청약신청위임장을 등록하였습니다.');
location.href="application.html";
</script>

<?php
}
}
?>