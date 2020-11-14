<?php
    $result = array();

    function getAllItems($conn)
    {
        $query = "SELECT * FROM favourites";
        $runQuery = $conn->query($query);

        while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
        echo(json_encode($result));
    }

    function getSingleItem($conn, $id)
    {
        $query = "SELECT * FROM favourites WHERE id=" . $id . "";
        $runQuery = $conn->query($query);

        while ($row = $runQuery->fetchAll(PDO::FETCH_ASSOC)) {
            $result[] = $row;
        }
    
        echo(json_encode($result));
    }
