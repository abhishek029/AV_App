<?php
    if(isset($_GET['allUsers'])){
        include('connect.php');

        $query = "SELECT * FROM tbl_user";

        $getAllUsers = $pdo->prepare($query);
        $getAllUsers->execute();

        $allUsers = array();

        while($user = $getAllUsers->fetch(PDO::FETCH_ASSOC)){
            $currentuser = array();

            $currentuser['id'] = $user['user_id'];
            $currentuser['fname'] = $user['user_fname'];
            $currentuser['username'] = $user['user_name'];
            $currentuser['admin'] = $user['user_admin'];
            $currentuser['access'] = $user['user_access'];
            $currentuser['avatar'] = $user['user_avatar'];

            $allUsers[] = $currentuser;
        }
        echo json_encode($allUsers);
    }
?>