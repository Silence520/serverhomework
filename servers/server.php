<?php
	$con = mysql_connect("localhost","root","");
	if (!$con){
	  	die('Could not connect: ' . mysql_error());
	  }else{
	  	// echo "链接成功！";


	  	mysql_select_db("thumbs", $con);

	 	// $sql = " INSERT INTO `Statistics`( `number`) VALUES ( '0' )";
		// $result = mysql_query($sql,$con);
		// if(!$result){
		// 	 die('Error: ' . mysql_error());
		// }else{
		// 	echo '插入成功！';
		// }

		$sql = " UPDATE `Statistics` SET `number`=2 WHERE `id`=3";
		$result = mysql_query($sql,$con);
		if(!$result){
			 die('Error: ' . mysql_error());
		}else{
			echo '修改成功！';
		}

		

	  }

	mysql_close($con);

?>


