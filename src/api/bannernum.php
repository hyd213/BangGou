<?php
include 'connect.php';


$res = $conn->query("select src from indexpicture where name='banner'");

$src = $res->fetch_all(MYSQLI_ASSOC);

	echo count($src);






?>