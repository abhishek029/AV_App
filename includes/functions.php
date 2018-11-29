<?php
include 'connect.php';



function get_all_movies($pdo) {
    $query = "SELECT * FROM tbl_parent";

    $get_movie = $pdo->query($query);
    $results = array();

    while($row = $get_movie->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}

function get_all_kids_movies($pdo) {
    $query = "SELECT * FROM tbl_kids";

    $get_movie = $pdo->query($query);
    $results = array();

    while($row = $get_movie->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }

    return $results;
}


?>