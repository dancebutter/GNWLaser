<?php

$to = "harry@gnwlaser.com";
$from = "ken@gnwlaser.com";
/*

$subject = "Comments from $name";
$headers = "From: $email";
$message = "Email: $email \n $comments \n $phone";
mail($to,$subject,$message,$headers);

 \n Email:$email \n Phone:$phone
*/
$name =$_POST["name"];
$company =$_POST["company"];
$email =$_POST["email"];
$phone =$_POST["phone"];
$comments =$_POST["comments"];

$subject = "Website Comments from $name $company";
$message = "Customer name:$name \n Company:$company \n Email:$email \n Phone:$phone \n Comments:$comments";
$headers = "From: $from";
mail($to,$subject,$message,$headers);

echo "Mail Sent.";

?>