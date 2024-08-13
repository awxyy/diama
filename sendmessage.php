<?php
// Перевірка, чи отримані дані від POST-запиту
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Ініціалізація змінної для зберігання вмісту повідомлення
    $content = '';

    // Цикл по всім елементам у POST-даних
    foreach ($_POST as $key => $value) {
        // Перевірка, чи значення не порожнє
        if (!empty($value)) {
            // Додавання форматованого рядка до змінної $content
            $content .= "<b>$key</b>: <i>$value</i>\n";
        }
    }

    // Перевірка, чи змінна $content не порожня
    if (trim($content)) {
        // Формування повідомлення для відправлення в Telegram
        $content = "<b>Message from Site:</b>\n" . $content;
        $apiToken = "7288114968:AAGyePb2TBBIvrtMj-YZpmXVrlg-1sLOq7Q";
        $data = [
            'chat_id' => '@diamatransport',
            'text' => $content,
            'parse_mode' => 'HTML'
        ];

        // Відправлення запиту до API Telegram з використанням file_get_contents
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data));

        // Вивід результату в залежності від успішності відправлення
        if ($response === false) {
            echo "Error sending message to Telegram.";
        } else {
            echo "Message sent to Telegram successfully.";
        }
    } else {
        echo "No data received or data was empty."; 
    }
} else {
    echo "Invalid request method.";
}
