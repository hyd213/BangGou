<?php
include 'connect.php';
$res = $conn->query("select * from indexpicture ");

$src = $res->fetch_all(MYSQLI_ASSOC);
	// echo(json_encode($src[0]['src']));
	// echo count($src);
	for($i=0;$i<count($src);$i++){
		echo $src[$i]['name'];
		echo ':';
		echo $src[$i]['src'];
		echo ',';
	}


?>