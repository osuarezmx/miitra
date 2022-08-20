<?php
$destinatario = 'luis.melendez@miitra.com.mx';
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$header = "Enviado desde el formulario de contacto de Miitra";
$mensajeCompleto = $mensaje . "\n" . $nombre . "\n" . $telefono . "\n" . $correo;

mail($destinatario, $asunto, utf8_decode($mensajeCompleto), $header);
echo "<script>alert('correo enviado extirosamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";
?>*/
