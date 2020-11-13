<?php
    include("connect.php");
    include("functions.php");

    if (isset($_GET["id"])) {
        $targetID = $_GET["id"];
        $result = getSingleItem($pdo, $targetID);

        return $result;
    } else {
        $allItems = getAllItems($pdo);

        return $allItems;
    }
