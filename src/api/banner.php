<?php
include 'connect.php';


$res = $conn->query("select src from indexpicture where name='banner'");

$src = $res->fetch_all(MYSQLI_ASSOC);
	// echo(json_encode($src[0]['src']));
	// echo count($src);
	for($i=0;$i<count($src);$i++){
		echo $src[$i]['src'];
		echo ',';
	}
	// var_dump($src[0])

	// echo(json_encode($pwd['src']));
	// echo gettype($pwd);
	// var_dump($res)




?>