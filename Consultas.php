<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

// Responder preflight (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
// =============================
// 1. Leer cuerpo JSON
// =============================
$data = json_decode(file_get_contents("php://input"), true);

$nombre = $data['nombre'] ?? '';
$email = $data['email'] ?? '';
$mensaje = $data['mensaje'] ?? '';

// Validación simple
if (!$nombre || !$email || !$mensaje) {
    echo json_encode(["status" => "error", "msg" => "Campos incompletos"]);
    exit;
}

// =============================
// 2. Guardar en la base de datos
// =============================
$host = "localhost"; 
$usuario = "root"; 
$password = ""; 
$bd = "tu_base_de_datos";  // <-- CAMBIALO

$conn = new mysqli($host, $usuario, $password, $bd);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "msg" => "Error DB"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO consultas (nombre, email, mensaje) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $nombre, $email, $mensaje);
$stmt->execute();
$stmt->close();


// =============================
// 3. Enviar email con PHPMailer
// =============================
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Config SMTP Gmail
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;

    $mail->Username = 'tu_correo@gmail.com';  // <-- TU GMAIL
    $mail->Password = 'TU_APP_PASSWORD';      // <-- TU APP PASSWORD

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Desde y hacia
    $mail->setFrom($email, $nombre);
    $mail->addAddress('tu_correo@gmail.com'); // <-- TU CORREO DONDE LLEGA

    $mail->isHTML(true);
    $mail->Subject = "Nueva consulta desde la web";
    $mail->Body = "
        <h3>Consulta recibida</h3>
        <p><b>Nombre:</b> $nombre</p>
        <p><b>Email:</b> $email</p>
        <p><b>Mensaje:</b><br>$mensaje</p>
    ";

    $mail->send();

    echo json_encode(["status" => "ok", "msg" => "Consulta enviada"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "msg" => "No se pudo enviar el correo", "error" => $e->getMessage()]);
}

?>
