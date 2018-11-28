<?php

include 'functions.php';
//got all movie data in data variable array
    $data = get_all_movies($conn);
    echo json_encode($data);
 

?>