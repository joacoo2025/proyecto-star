<?php
// Habilitar CORS básico (ajustar según dominio de Angular)
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

// Responder OPTIONS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Autoload simple (ajusta rutas si tu estructura es distinta)
require_once __DIR__ . '/../controllers/ProductController.php';

// Parsear ruta: /api.php/products or /api.php/products/1
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$script = $_SERVER['SCRIPT_NAME']; // /public/api.php
// intentamos extraer la parte después de api.php
$basePos = strpos($uri, basename($script));
$path = $basePos !== false ? substr($uri, $basePos + strlen(basename($script))) : substr($uri, strlen($script));
$path = trim($path, '/'); // ej: "products/1"

// separar
$parts = explode('/', $path);

// soporte: si llamás directamente a /products...
if ($parts[0] === '' || $parts[0] === null) {
    // root -> lista recursos disponibles
    echo json_encode(['message' => 'API Petshop: /products']);
    exit;
}

$resource = $parts[0];
$id = isset($parts[1]) && is_numeric($parts[1]) ? (int)$parts[1] : null;

$controller = null;
if ($resource === 'products' || $resource === 'productos') {
    $controller = new ProductController();
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Recurso no encontrado']);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

try {
    if ($method === 'GET' && !$id) {
        $controller->getAll();
    } elseif ($method === 'GET' && $id) {
        $controller->getById($id);
    } elseif ($method === 'POST') {
        $controller->create();
    } elseif (($method === 'PUT' || $method === 'PATCH') && $id) {
        $controller->update($id);
    } elseif ($method === 'DELETE' && $id) {
        $controller->delete($id);
    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Método no permitido']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Error del servidor', 'details' => $e->getMessage()]);
}
