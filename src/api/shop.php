<?php
include 'connect.php';
$res = $conn->query("select * from commodity");
$qte = isset($_GET["qte"])?$_GET["qte"]:"";
$type = isset($_GET["type"])?$_GET["type"]:"";
$shop = $res->fetch_all(MYSQLI_ASSOC);
	if($type==1){
		for($i=0;$i<count($shop);$i++){
		echo $shop[$i]['type'];
		echo '^';
		echo $shop[$i]['img'];
		echo '^';
		echo $shop[$i]['name'];
		echo '^';
		echo $shop[$i]['price'];
		echo '^';
		echo $shop[$i]['id'];
		echo '^';
		echo $shop[$i]['discount'];
		echo ';';
		
	}



	}
	
	if($qte){
		// echo $qte;
		// $content = json_decode($shop,true);
		$resArr = array_slice($shop,($qte-1)*20,20);

		$data = array(
					"resArr" => $resArr,
					"len" => count($shop),
					"qte" => $qte
		);
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
	}



?>