<?php
include 'connect.php';

$data = json_decode(file_get_contents('php://input'));

$sql = "UPDATE users
        SET user_status='$data->user_status', user_time='$data->user_time'
        WHERE user_name='$data->user_name'";

if (mysqli_query($conn, $sql)) {
    echo 'true';
} else {
    echo "false";
}

mysqli_close($conn);

