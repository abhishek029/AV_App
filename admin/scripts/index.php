<?php
    require_once('config.php');

    if(isset($_GET['media'])){
        $type = $_GET['media'];
        $filter = $_GET['filter'];

        if($type == "video"){
            $tbl = "tbl_movies";
        }else{
            $tbl = "tbl_audio";
        }
    }
    $results = getAll($tbl,$filter);

    echo json_encode($results);
?>