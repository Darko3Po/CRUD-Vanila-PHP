<?php

require 'bootstrap.php';

//downloading data from the sav_data.php page
$json = file_get_contents('php://input');

//convert data in object
$data = json_decode($json);

//Save data with method in QueryBuilder Class
echo $query->save($data);
