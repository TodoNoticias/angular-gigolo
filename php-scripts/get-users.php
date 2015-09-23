<?php
header('Content-type:application/json');
include 'connect.php';


$return_arr = array();

$fetch = mysqli_query($conn,"SELECT * FROM users");


while ($row = mysqli_fetch_array($fetch)) {
    $row_array['id'] = $row['id'];
    $row_array['user_name'] = $row['user_name'];
    $row_array['user_status'] = $row['user_status'];
    array_push($return_arr,$row_array);
}

echo json_encode($return_arr);

mysqli_close($conn);

