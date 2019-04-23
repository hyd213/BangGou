<?php
include 'connect.php';



$name = isset($_GET["name"])?$_GET["name"]:"";
$type = isset($_GET["type"])?$_GET["type"]:"";
$id = isset($_GET["id"])?$_GET["id"]:"";
$fenzu = isset($_GET["fenzu"])?$_GET["fenzu"]:"";
$nowid = isset($_GET["nowid"])?$_GET["nowid"]:"";

if($type==1){
	$res = $conn->query("select commodity from user where name='".$name."'");
	$shop = $res->fetch_all(MYSQLI_ASSOC);
	
	echo(json_encode($shop[0]['commodity']));


	$res->close();
	$conn->close();
}
if($type==2){
	$res = $conn->query("select * from commodity where id='".$id."'");

	$shopping = $res->fetch_all(MYSQLI_ASSOC);
	
	echo(json_encode($shopping[0]));


	$res->close();
	$conn->close();

	}
if($type==3){
	// $sql = "update user set commodity='".$fenzu."' where name='".$name."'";
	mysqli_query($conn,"UPDATE user set commodity='".$fenzu."' where name='".$name."'");
	$res = $conn->query("select commodity from user where name='".$name."'");
	$shop = $res->fetch_all(MYSQLI_ASSOC);
	
	echo(json_encode($shop[0]['commodity']));


	$res->close();
	$conn->close();

}









?>