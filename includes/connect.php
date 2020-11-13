<?php
    $db_dsn = array(
        'host' => 'localhost',
        'dbname' => 'evans_favourites',
        'charset' => 'utf8'
    );

    $dsn = 'mysql:'.http_build_query($db_dsn, '', ';');

    //This is the DB credentials

    $db_user = 'root';
    $db_pass = '';

    try {
        $pdo = new PDO($dsn, $db_user, $db_pass);
        //var_dump($pdo);
        // echo - IN THIS CASE - is almost like console.log
        // echo "You're in! Enjoy the show!";
    } catch (PDOException $exception) {
        echo 'Connection Error:'.$exception->getMessage();
        exit();
    }
