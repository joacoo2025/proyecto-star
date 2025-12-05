<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");

require_once __DIR__ . "/conexion.php"; // tu archivo de conexión

$data = json_decode(file_get_contents("php://input"), true);

$nombre = $data["nombre"];
$email = $data["email"];
$mensaje = $data["mensaje"];

// === 1. Guardar en la base de datos ===
$stmt = $conn->prepare("INSERT INTO consultas (nombre, email, mensaje) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nombre, $email, $mensaje);
$stmt->execute();

// === 2. Enviar correo ===
$para = "joaquifelimu@gmail.com";
$titulo = "Nueva consulta de $nombre";
$cuerpo = "Nombre: $nombre\nEmail: $email\nMensaje:\n$mensaje";

@mail($para, $titulo, $cuerpo);

// === 3. Respuesta ===
echo json_encode(["status" => "ok"]);
