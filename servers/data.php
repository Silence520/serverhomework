<?php
// header("Content-type:application/json; charset=utf-8");
$con = mysql_connect("localhost","root","");
if(! $con )
{
    die('Could not connect: ' . mysqli_error());
}else{
	 echo '数据库连接成功！';
	 mysql_select_db('thumbs', $con);
	
	 //UPDATE
	  // $number=$_REQUEST['number'];
	  // echo $number ;


	  $sql = "UPDATE `statistics` SET `number`= 1213  WHERE id=2";
	  $result = mysql_query($sql,$con);
	  if(!$result){
	 	die('无法插入数据: ' . mysqli_error($con));
	 }else{
		$resdate = [
		'msg' => 'success', 'code' => '0'
		];
		echo json_encode($resdate);
	 }



	 //INSERT
	 // $sql= "INSERT INTO `number`( `number`) VALUES ('122')";
	 // $result = mysql_query($sql,$con);
	 // if(!$result){
	 // 	die('无法插入数据: ' . mysqli_error($con));
	 // }else{
	 // 	echo('SUCCESS');
	 // }

	 //DELECT
	  // $sql = "DELETE FROM `number` WHERE id=4";
	  // $result = mysql_query($sql,$con);
	  // if(!$result){
	 	// 	die('无法插入数据: ' . mysqli_error($con));
	 	// }else{
	 	// 	echo('SUCCESS');
	 	// }
	// echo '数据库连接成功！';

}
mysql_close($con);


?>