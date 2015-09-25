<?php


header('Content-type:application/json');
include 'connect.php';


$return_arr = array();

$fetch = mysqli_query($conn,"SELECT * FROM users WHERE user_status='online' AND user_time != '' ORDER BY user_time ASC LIMIT 1");


while ($row = mysqli_fetch_array($fetch)) {
    $row_array['id'] = $row['id'];
    $row_array['user_name'] = $row['user_name'];
    $row_array['user_time'] = $row['user_time'];
    array_push($return_arr,$row_array);
}

echo json_encode($return_arr);

mysqli_close($conn);