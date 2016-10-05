<?php
echo '<pre>';
echo $_POST["image"];

if(move_uploaded_file($_POST["image"], "upload/test.jpg")){
  echo "<br>uploaded";
  exit();
}else{
  echo "<br>upload error";
}