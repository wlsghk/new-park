<meta charset="utf-8" />
<?php
session_start();
include "../config/db.php";

$customer_name = $_POST['customer_name'];
$customer_name = addslashes($_POST['customer_name']); 

if ($customer_name == "") {
	echo "<script>alert('이름을 입력하세요');history.back();</script>";
} else {

$customer_phone = $_POST['customer_phone'];

$sql2 = "select count(*) from customer where customer_phone='".$customer_phone."'";
$result2 = mysqli_query($con, $sql2);
$rowCount2 = mysqli_fetch_array($result2);
$total_record2 = $rowCount2["count(*)"];

if ($total_record2 >= 1) { 	
echo "<script>alert('등록된 고객님이십니다.');history.back();</script>";
} else { 

$customer_sido= $_POST['customer_sido'];
$customer_sigugun = $_POST['customer_sigugun'];
$customer_dong = $_POST['customer_dong'];
$customer_wdate = date("Y-m-d H:i:s"); 
$customer_ip = $_SERVER["REMOTE_ADDR"];
$customer_type = $_POST['customer_type'];
$sql = "INSERT INTO customer (customer_name,customer_phone,customer_sido,customer_sigugun,customer_dong,customer_wdate,customer_ip,customer_type,customer_opt) values('".$customer_name."','".$customer_phone."','".$customer_sido."','".$customer_sigugun."','".$customer_dong."','".$customer_wdate."','".$customer_ip."','".$customer_type."',1)";

$result = mysqli_query($con, $sql);


?>
<script type="text/javascript">
alert('관심고객으로 등록되었습니다.');
location.href="register.html";
</script>

<?php
}
}
?>