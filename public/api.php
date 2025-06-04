<?php
  try {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['message'];
    var_dump($_POST);

    $to      = 'website@uralblast.ru';
    $message = "От: $name \r\n" . "тел: $phone \r\n" . "почта: $email \r\n" . $text;

    var_dump(mail($to, $subject, $message));
  } catch(Exception $e) {
    var_dump($e);
  }
?>