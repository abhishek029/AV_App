<?php

include 'functions.php';
//got all movie data in data variable array
    $data = get_all_movies($conn);
    $kids = get_all_kids_movies($conn);
    echo json_encode(array($data,$kids));
    // echo json_encode($kids);
 

?>