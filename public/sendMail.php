<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

function respond(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'message' => 'Method not allowed']);
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '', true);

if (!is_array($data)) {
    respond(400, ['ok' => false, 'message' => 'Invalid request body']);
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$message = trim((string)($data['msg'] ?? ($data['message'] ?? '')));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['ok' => false, 'message' => 'Invalid input']);
}

if (strlen($name) > 120 || strlen($email) > 200 || strlen($message) > 6000) {
    respond(400, ['ok' => false, 'message' => 'Input too long']);
}

$safeName = str_replace(["\r", "\n"], '', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);

// Deine angepassten Daten - kein fremder Name mehr vorhanden!
// $recipient = 'saeed-ghorban@web.de';
// $sender = 'saeed-ghorban@web.de';

$recipient = 'saeed.ghorbani@web.de'; 

// HIER muss eine System-E-Mail deines Hosters hin (z.B. von deinem Server)
// Wenn du gar nichts weißt, lass hier übergangsweise ein Minimum stehen, 
// aber frage bei deinem Hoster (z.B. Strato, Ionos) nach der "Standard-System-E-Mail".
$sender = 'noreply@' . $_SERVER['HTTP_HOST']; 

$subject = 'Portfolio Kontaktformular';
$subject = 'Message';
$mailBody = "Name: {$safeName}\n";
$mailBody .= "E-Mail: {$safeEmail}\n\n";
$mailBody .= "Nachricht:\n{$message}\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = "From: {$sender}";
$headers[] = "Reply-To: {$safeEmail}";

$sent = mail($recipient, $subject, $mailBody, implode("\r\n", $headers));

if (!$sent) {
    error_log('sendMail.php: mail() returned false');
    respond(500, ['ok' => false, 'message' => 'Mail not sent']);
}

respond(200, ['ok' => true]);