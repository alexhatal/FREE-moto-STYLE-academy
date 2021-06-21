<?php
echo "<pre>";
print_r($_POST);
echo '</pre>'

if(isset($_POST))

$Jméno = $_POST ['Jméno'];
$Email = $_POST ['Email'];
$Telefon = $_POST ['Telefon'];
$Služba = $_POST ['Služba'];
$Zpráva = $_POST ['Zpráva'];

$to="hatalovska@gmail.com";
$body= "";

$body .= "Jméno: ".$Jméno. "\r\n";
$body .= "Email: ".$Email. "\r\n";
$body .= "Telefon: ".$Telefon. "\r\n";
$body .= "Služba: ".$Služba. "\r\n";
$body .= "Zpráva: ".$Zpráva. "\r\n";

mail($to,$Služba,$body)
?>