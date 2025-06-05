<?php
  try {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['message'];

    $to      = 'website@uralblast.ru';
    $message = "От: $name \r\n" . "тел: $phone \r\n" . "почта: $email \r\n" . $text;

    if($_FILES['fileInput']['name'][0] == "") {
      var_dump(mail($to, $subject, $message));
    } else {
    
		if ($_FILES['fileInput']['size'] > 20 * 1024 * 1024) {
		  throw new Exception('File too big');
		}
		
		
		$filename = $_FILES['fileInput']['name'];
		$file = $_FILES['fileInput']['tmp_name'];
		
		$content = file_get_contents( $file);
		$content = chunk_split(base64_encode($content));
		$file_name = basename($file);
		
		// a random hash will be necessary to send mixed content
		$uid = md5(uniqid(time()));
		
		// carriage return type (RFC)
		$eol = "\r\n";
		
		// main header (multipart mandatory)
		$header .= "MIME-Version: 1.0\r\n";
		$header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
		
		// message & attachment
		$nmessage = "--".$uid."\r\n";
		$nmessage .= "Content-type:text/plain; charset=utf-8\r\n";
		$nmessage .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
		$nmessage .= $message."\r\n\r\n";
		$nmessage .= "--".$uid."\r\n";
		$nmessage .= "Content-Type: application/octet-stream; name=\"".$filename."\"\r\n";
		$nmessage .= "Content-Transfer-Encoding: base64\r\n";
		$nmessage .= "Content-Disposition: attachment; filename=\"".$filename."\"\r\n\r\n";
		$nmessage .= $content."\r\n\r\n";
		$nmessage .= "--".$uid."--";

      //SEND Mail
      if (mail($to, $subject, $nmessage, $header)) {
          echo "mail send ... OK"; // or use booleans here
      } else {
          echo "mail send ... ERROR!";
          print_r( error_get_last() );
      }
    }
    
  } catch(Exception $e) {
    http_response_code(500);
    var_dump($e);
  }
?>