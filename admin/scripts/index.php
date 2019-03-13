<?php
    require_once('config.php');

    if(isset($_GET['media'])){
        $type = $_GET['media'];
        $filter = $_GET['filter'];

        if($type == "video"){
            $tbl = "tbl_movies";
            $col = "movies_audience";
        }else if($type == "audio"){
            $tbl = "tbl_audio";
            $col = "audio_audience";
        }
    }
    $results = getAll($tbl,$filter,$col);

    echo json_encode($results);
?>