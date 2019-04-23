<?php
include 'connect.php';
$name = isset($_GET["name"])?$_GET["name"]:"";
$type = isset($_GET["type"])?$_GET["type"]:"";
$phone = isset($_GET["phone"])?$_GET["phone"]:"";
$savename = isset($_GET["savename"])?$_GET["savename"]:"";
$savepwd = isset($_GET["savepwd"])?$_GET["savepwd"]:"";
$savephone = isset($_GET["savephone"])?$_GET["savephone"]:"";
$vip = isset($_GET["vip"])?$_GET["vip"]:"";
// echo $name;
$res = $conn->query("select * from user");
//注册验证用户名是否存在
if($type==0){
	
	$user = $res->fetch_all(MYSQLI_ASSOC);
	for($i=0;$i<count($user);$i++){
		if($user[$i]['name']==$name){
			echo true;
		}
	}
}
//注册验证手机号码是否已注册
if($type==1){
	$num = $res->fetch_all(MYSQL_ASSOC);
	for($i=0;$i<count($num);$i++){
		if($num[$i]['phone']==$phone){
			echo true;
		}
	}
}
//用户信息存进数据库
if($type==2){
	$res = $conn->query("insert into user (name,phone,pwd,integral) values ('".$savename."','".$savephone."','".$savepwd."','".$vip."')");
	$conn->close();

}
	



?>