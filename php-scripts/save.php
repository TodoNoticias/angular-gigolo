<?php
include 'connect.php';

$data = json_decode(file_get_contents('php://input'));



$sql = "INSERT INTO users (user_name, user_status)
VALUES ('$data->user_name', '$data->user_status')";

if (mysqli_query($conn, $sql)) {
    echo 'true';
} else {
    echo "false";
}

mysqli_close($conn);


