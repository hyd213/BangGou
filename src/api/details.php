<?php
include 'connect.php';

$idx = isset($_GET["idx"])?$_GET["idx"]:"";
	// echo $idx;
$res = $conn->query("select * from commodity where id=".$idx."");
	$shopping = $res->fetch_all(MYSQLI_ASSOC);
	
	echo(json_encode($shopping[0]));


	$res->close();
	$conn->close();




?>