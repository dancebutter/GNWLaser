<?php

$to = "harry@gnwlaser.com";
$subject = "Test mail";
$message = "This is test 2";
$from = "harry@gnwlaser.com";
$headers = "From: $from";
mail($to,$subject,$message,$headers);
echo "Mail Sent.";

?>