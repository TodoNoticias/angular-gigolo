<?php
include 'connect.php';

$data = json_decode(file_get_contents('php://input'));

echo "esto es data desde el php --->  ".json_encode($data);

$sql = "UPDATE users
        SET user_status='$data->user_status'
        WHERE user_name='$data->user_name'";

if (mysqli_query($conn, $sql)) {
    echo 'true';
} else {
    echo "false";
}

mysqli_close($conn);

