<?php
include 'connect.php';

$name = isset($_GET["name"])?$_GET["name"]:"";
$type = isset($_GET["type"])?$_GET["type"]:"";
$phone = isset($_GET["phone"])?$_GET["phone"]:"";
$pwd = isset($_GET["pwd"])?$_GET["pwd"]:"";




if($type==1){
	$res = $conn->query("select name from user where name='".$name."'");
	$num = $res->num_rows;

	if($num == 0){
		echo 1;
	}else{
		echo 2;
	}
	$res->close();
	$conn->close();
}
if($type==2){
	$res = $conn->query("select name from user where phone='".$phone."'");
	$num = $res->num_rows;

	if($num == 0){
		echo 1;
	}else{
		echo 2;
	}
	$res->close();
	$conn->close();
}
if($type==3){
	$res = $conn->query("select pwd from user where name='".$name."'");
	$pwd = $res->fetch_all(MYSQLI_ASSOC);
	
	echo(json_encode($pwd[0]['pwd']));


	$res->close();
	$conn->close();
}
if($type==4){
	$res = $conn->query("select pwd from user where phone='".$phone."'");
	$pwd = $res->fetch_all(MYSQLI_ASSOC);
	
	echo(json_encode($pwd[0]['pwd']));



	$res->close();
	$conn->close();

	
}
?>